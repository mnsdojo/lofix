import { create } from "zustand";

import { themes } from "@/theme";
type CurrentTheme = keyof typeof themes;

interface ThemeStore {
  currentTheme: CurrentTheme;
  setCurrentTheme: (theme: CurrentTheme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: "coolMint",
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
}));
