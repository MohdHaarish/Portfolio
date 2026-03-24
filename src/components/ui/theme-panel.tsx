"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, RotateCcw, Palette, X, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const PRESET_COLORS = [
  { hex: "#C9A84C", name: "Gold" },
  { hex: "#8B5CF6", name: "Violet" },
  { hex: "#0EA5E9", name: "Sky" },
  { hex: "#F43F5E", name: "Rose" },
  { hex: "#10B981", name: "Emerald" },
  { hex: "#F97316", name: "Orange" },
  { hex: "#6366F1", name: "Indigo" },
  { hex: "#EC4899", name: "Pink" },
];

export function ThemePanel() {
  const [open, setOpen] = useState(false);
  const { mode, accentColor, setMode, setAccentColor, resetToDefault } =
    useTheme();
  const colorInputRef = useRef<HTMLInputElement>(null);

  const isDefault =
    mode === "dark" &&
    accentColor.toLowerCase() === "#c9a84c";

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-light)) 100%)`,
          boxShadow: `0 8px 32px hsl(var(--accent) / 0.45), 0 2px 8px rgba(0,0,0,0.5)`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open theme settings"
      >
        <motion.div
          animate={{ rotate: open ? 30 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Palette className="w-5 h-5" style={{ color: "hsl(var(--accent-foreground))" }} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Invisible backdrop */}
            <motion.div
              className="fixed inset-0 z-[95]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed z-[100] w-72 rounded-2xl overflow-hidden"
              style={{
                bottom: "80px",
                right: "24px",
                background: `hsl(var(--card) / 0.96)`,
                border: `1px solid hsl(var(--border))`,
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 4px 16px hsl(var(--accent) / 0.12), inset 0 1px 0 hsl(var(--border) / 0.5)`,
              }}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.95 }}
              transition={{ type: "spring", damping: 24, stiffness: 340 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: `1px solid hsl(var(--border))` }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-light)) 100%)`,
                    }}
                  />
                  <span
                    className="font-sans text-sm font-semibold tracking-wide"
                    style={{ color: `hsl(var(--foreground))` }}
                  >
                    Appearance
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
                  style={{
                    color: `hsl(var(--muted-foreground))`,
                    background: `hsl(var(--surface))`,
                  }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                {/* ── Mode toggle ── */}
                <div>
                  <label
                    className="font-sans text-[10px] tracking-[0.28em] uppercase mb-3 block"
                    style={{ color: `hsl(var(--muted-foreground))` }}
                  >
                    Mode
                  </label>
                  <div
                    className="grid grid-cols-2 gap-1 p-1 rounded-xl"
                    style={{
                      background: `hsl(var(--background))`,
                      border: `1px solid hsl(var(--border))`,
                    }}
                  >
                    {(["dark", "light"] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-200"
                        style={
                          mode === m
                            ? {
                                background: `hsl(var(--accent))`,
                                color: `hsl(var(--accent-foreground))`,
                                boxShadow: `0 2px 10px hsl(var(--accent) / 0.4)`,
                              }
                            : {
                                color: `hsl(var(--muted-foreground))`,
                              }
                        }
                      >
                        {m === "dark" ? (
                          <Moon className="w-3.5 h-3.5" />
                        ) : (
                          <Sun className="w-3.5 h-3.5" />
                        )}
                        {m === "dark" ? "Dark" : "Light"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Accent color ── */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label
                      className="font-sans text-[10px] tracking-[0.28em] uppercase"
                      style={{ color: `hsl(var(--muted-foreground))` }}
                    >
                      Accent Color
                    </label>
                    {/* Custom color picker trigger */}
                    <button
                      onClick={() => colorInputRef.current?.click()}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-sans text-xs font-medium transition-all duration-150 hover:scale-105"
                      style={{
                        background: `hsl(var(--surface))`,
                        border: `1px solid hsl(var(--border))`,
                        color: `hsl(var(--muted-foreground))`,
                      }}
                    >
                      <span
                        className="w-3 h-3 rounded-full border flex-shrink-0"
                        style={{
                          background: accentColor,
                          borderColor: `hsl(var(--border))`,
                        }}
                      />
                      Custom
                    </button>
                    <input
                      ref={colorInputRef}
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="sr-only"
                      aria-label="Pick custom accent color"
                    />
                  </div>

                  {/* Preset swatches */}
                  <div className="grid grid-cols-8 gap-2">
                    {PRESET_COLORS.map((color) => {
                      const isSelected =
                        accentColor.toLowerCase() === color.hex.toLowerCase();
                      return (
                        <motion.button
                          key={color.hex}
                          onClick={() => setAccentColor(color.hex)}
                          title={color.name}
                          className="relative w-full aspect-square rounded-lg flex items-center justify-center"
                          style={{ background: color.hex }}
                          animate={{
                            scale: isSelected ? 1.18 : 1,
                            boxShadow: isSelected
                              ? `0 0 0 2px hsl(var(--background)), 0 0 0 4px ${color.hex}88`
                              : "none",
                          }}
                          whileHover={{ scale: isSelected ? 1.18 : 1.1 }}
                          transition={{ duration: 0.15 }}
                        >
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.15 }}
                              >
                                <Check className="w-2.5 h-2.5 text-white drop-shadow" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="rounded-full"
                  style={{ height: 1, background: `hsl(var(--border))` }}
                />

                {/* ── Reset to default ── */}
                <motion.button
                  onClick={resetToDefault}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-sans text-sm font-bold tracking-wide relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(110deg, #C9A84C 0%, #F97316 22%, #F43F5E 44%, #EC4899 62%, #8B5CF6 80%, #0EA5E9 100%)",
                    color: "#ffffff",
                    textShadow: "0 1px 4px rgba(0,0,0,0.35)",
                    boxShadow:
                      "0 4px 20px rgba(201,168,76,0.3), 0 2px 8px rgba(0,0,0,0.3)",
                    opacity: isDefault ? 0.5 : 1,
                  }}
                  whileHover={isDefault ? {} : { scale: 1.02, boxShadow: "0 6px 28px rgba(201,168,76,0.45), 0 3px 12px rgba(0,0,0,0.35)" }}
                  whileTap={isDefault ? {} : { scale: 0.97 }}
                  disabled={isDefault}
                >
                  <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" />
                  Reset to Default
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
