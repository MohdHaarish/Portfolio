export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { h: 43, s: 56, l: 54 };

  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export type ThemeVars = Record<string, string>;

export function generateTheme(accentHex: string, mode: "dark" | "light"): ThemeVars {
  const { h, s, l } = hexToHsl(accentHex);
  // Backgrounds get a very subtle tint of the accent hue
  const bgS = Math.round(Math.min(s * 0.12, 8));
  const fgS = Math.round(Math.min(s * 0.25, 14));

  // Fixed multi-color palette — these never change with the accent picker
  const multiColor = {
    "--secondary":        "114 22% 56%",  // Sage green
    "--secondary-light":  "114 22% 68%",
    "--tertiary":         "24 28% 43%",   // Soft brown
    "--tertiary-light":   "24 28% 58%",
    "--quaternary":       "20 50% 45%",   // Deep clay
    "--quaternary-light": "20 50% 58%",
    "--highlight":        "108 22% 91%",  // Pale sage — headline emphasis
  };

  if (mode === "dark") {
    // For very light accents, pull down lightness so they're legible on dark bg
    const aL = l > 72 ? Math.round(l * 0.78) : l;
    return {
      "--background":        `25 20% 7%`,
      "--surface":           `25 18% 10%`,
      "--card":              `25 16% 13%`,
      "--card-2":            `25 16% 16%`,
      "--foreground":        `40 35% 88%`,
      "--muted-foreground":  `30 10% 54%`,
      "--border":            `25 14% 20%`,
      "--accent":            `${h} ${s}% ${aL}%`,
      "--accent-light":      `${h} ${Math.min(s + 8, 100)}% ${Math.min(aL + 14, 88)}%`,
      "--accent-dark":       `${h} ${Math.max(s - 5, 10)}% ${Math.max(aL - 15, 15)}%`,
      "--accent-foreground": `${h} 5% 6%`,
      ...multiColor,
    };
  } else {
    // For very dark accents, lighten so they're visible on light bg
    const aL = l < 30 ? Math.round(l * 1.4) : Math.max(l - 8, 25);
    return {
      "--background":        `40 30% 96%`,
      "--surface":           `38 25% 91%`,
      "--card":              `36 20% 87%`,
      "--card-2":            `34 18% 82%`,
      "--foreground":        `25 25% 12%`,
      "--muted-foreground":  `25 12% 46%`,
      "--border":            `30 15% 76%`,
      "--accent":            `${h} ${s}% ${aL}%`,
      "--accent-light":      `${h} ${s}% ${Math.min(aL + 12, 84)}%`,
      "--accent-dark":       `${h} ${s}% ${Math.max(aL - 18, 15)}%`,
      "--accent-foreground": `${h} 5% 97%`,
      ...multiColor,
    };
  }
}

export function applyTheme(vars: ThemeVars, accentHex: string): void {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.style.setProperty("--accent-hex", accentHex);
  // Persist for FOUC-prevention on next load
  try {
    localStorage.setItem("portfolio-theme-vars", JSON.stringify(vars));
  } catch {
    // ignore storage errors
  }
}
