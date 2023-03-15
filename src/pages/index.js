import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, systemThem, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <NavBar currentTheme={currentTheme} theme={theme} setTheme={setTheme} />
      <HeroSection />
      <About />
      <Menu/>
    </>
  );
}
