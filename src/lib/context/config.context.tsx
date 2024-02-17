import React, { createContext, useEffect, useState } from "react";
import { ThemeVariants } from "@/lib/model/theme-variants.model";

enum StorageKeys {
  Theme = "x-app-theme",
}

export interface ConfigContextType {
  theme: ThemeVariants;
  setTheme: (theme: ThemeVariants) => void;
}

export const ConfigContext = createContext<ConfigContextType>({
  theme: ThemeVariants.Dark,
  setTheme: () => {},
});

const Component: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setStateTheme] = useState<ThemeVariants>(ThemeVariants.Dark);

  useEffect(() => {
    const savedTheme = localStorage.getItem(StorageKeys.Theme) as ThemeVariants | null;

    if (savedTheme) {
      setStateTheme(savedTheme);
    } else {
      const isUserDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

      setTheme(isUserDarkMode ? ThemeVariants.Dark : ThemeVariants.Light);
    }
  }, []);

  const setTheme = (nextTheme: ThemeVariants) => {
    setStateTheme(nextTheme);
    localStorage.setItem(StorageKeys.Theme, nextTheme);
  };

  return (
    <ConfigContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default Component;
