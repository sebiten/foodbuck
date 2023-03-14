import { createContext, useEffect, usest } from "react";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  const { systemTheme, theme, setTheme } = useTheme();
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
        theme,
        setTheme,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
