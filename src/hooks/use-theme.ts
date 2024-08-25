import { useAppearanceStore } from "@/stores/appearance.store";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

type Theme = "system" | "dark" | "light";

type UseThemeOutput = {
  theme: Theme;
  isDarkMode: boolean;
};

export const useTheme = (): UseThemeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

  const { appearance, setAppearanceValues } = useAppearanceStore();
  useEffect(() => {
    if (appearance?.theme === "system") setDarkMode((prev) => !prev);
  }, [appearance]);

  useEffect(() => {
    switch (appearance?.theme) {
      case "light": {
        setDarkMode(false);
        break;
      }
      case "system": {
        setDarkMode(isDarkOS);
        break;
      }
      case "dark": {
        setDarkMode(true);
        break;
      }
    }
  }, [appearance, isDarkOS]);

  return {
    theme: appearance.theme,
    isDarkMode,
  };
};
