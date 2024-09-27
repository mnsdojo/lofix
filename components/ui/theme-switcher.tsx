"use client";

import { useThemeStore } from "@/store/themeStore";
import { Button } from "@/components/ui/button";
import { themes } from "@/theme";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Palette } from "lucide-react";

export default function ThemeSwitcher() {
  const themeStore = useThemeStore();

  const theme = themes[themeStore.currentTheme!];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className={`${theme.button}`}>
          <Palette className="h-6 w-6" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(themes).map(([key, value]) => (
            <Button
              key={key}
              variant="ghost"
              className={`w-full h-10 ${value.background} ${value.text}`}
              onClick={() =>
                themeStore.setCurrentTheme(key as keyof typeof themes)
              }
            >
              <span className="sr-only">{value.name}</span>
              <div className="w-full h-full flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${value.button}`} />
              </div>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
