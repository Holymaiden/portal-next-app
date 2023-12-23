"use client";

import useDarkMode from "@/common/hooks/useDarkMode";
import COLORS from "@/common/data/enumColors";
import { ThemeProvider } from "react-jss";

const ThemeProv = ({ children }: { children: React.ReactNode }) => {
  /**
   * Dark Mode
   */
  const { themeStatus } = useDarkMode();
  const theme = {
    theme: themeStatus,
    primary: COLORS.PRIMARY.code,
    secondary: COLORS.SECONDARY.code,
    success: COLORS.SUCCESS.code,
    info: COLORS.INFO.code,
    warning: COLORS.WARNING.code,
    danger: COLORS.DANGER.code,
    dark: COLORS.DARK.code,
    light: COLORS.LIGHT.code,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProv;
