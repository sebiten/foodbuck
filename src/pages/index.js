import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavBar from "@/components/NavBar";

export default function Navbar() {
 

  return (
    <NavBar currentTheme={currentTheme} theme={currentTheme} onThemeChange={(theme) => setTheme(theme)} />
  );
}
