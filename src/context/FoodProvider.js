import { createContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const { theme, systemThem, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <FoodContext.Provider
      value={{
        currentTheme,
        setTheme,
        systemTheme,
        
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
