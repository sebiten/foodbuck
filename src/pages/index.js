import About from "@/components/About";
import Consejos from "@/components/Consejos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reseñas";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, systemThem, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemThem: theme;

  return (
    <>
      <NavBar currentTheme={currentTheme} theme={theme} setTheme={setTheme} />
      <HeroSection />
      <About />
      <Menu />
      <Reviews />
      <Consejos />
      <Contacto />
      <Footer />
    </>
  );
}
