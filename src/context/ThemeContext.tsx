"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { generateTheme, applyTheme } from "@/lib/theme-utils";

const DEFAULT_ACCENT = "#CB734D"; // Terracotta — earthy primary
// Any previously saved accent that no longer matches the default palette
// gets reset so users see the new earthy theme on first load.
const LEGACY_ACCENTS = ["#C9A84C", "#E963C7"];
const DEFAULT_MODE: "dark" | "light" = "dark";

interface ThemeContextValue {
  mode: "dark" | "light";
  accentColor: string;
  setMode: (mode: "dark" | "light") => void;
  setAccentColor: (hex: string) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: DEFAULT_MODE,
  accentColor: DEFAULT_ACCENT,
  setMode: () => {},
  setAccentColor: () => {},
  resetToDefault: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<"dark" | "light">(DEFAULT_MODE);
  const [accentColor, setAccentColorState] = useState(DEFAULT_ACCENT);

  const apply = useCallback((newMode: "dark" | "light", newAccent: string) => {
    const vars = generateTheme(newAccent, newMode);
    applyTheme(vars, newAccent);
    document.documentElement.setAttribute("data-mode", newMode);
    try {
      localStorage.setItem("portfolio-theme-mode", newMode);
      localStorage.setItem("portfolio-theme-accent", newAccent);
    } catch {
      // ignore
    }
  }, []);

  // On mount, restore saved theme
  useEffect(() => {
    try {
      const savedMode =
        (localStorage.getItem("portfolio-theme-mode") as "dark" | "light") ||
        DEFAULT_MODE;
      const raw = localStorage.getItem("portfolio-theme-accent") || DEFAULT_ACCENT;
      // Migrate any previously saved palette default to the current one
      const savedAccent = LEGACY_ACCENTS.includes(raw) ? DEFAULT_ACCENT : raw;
      setModeState(savedMode);
      setAccentColorState(savedAccent);
      apply(savedMode, savedAccent);
    } catch {
      apply(DEFAULT_MODE, DEFAULT_ACCENT);
    }
  }, [apply]);

  const setMode = useCallback(
    (newMode: "dark" | "light") => {
      setModeState(newMode);
      apply(newMode, accentColor);
    },
    [accentColor, apply]
  );

  const setAccentColor = useCallback(
    (hex: string) => {
      setAccentColorState(hex);
      apply(mode, hex);
    },
    [mode, apply]
  );

  const resetToDefault = useCallback(() => {
    setModeState(DEFAULT_MODE);
    setAccentColorState(DEFAULT_ACCENT);
    apply(DEFAULT_MODE, DEFAULT_ACCENT);
  }, [apply]);

  return (
    <ThemeContext.Provider
      value={{ mode, accentColor, setMode, setAccentColor, resetToDefault }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
