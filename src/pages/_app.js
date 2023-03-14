import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { FoodProvider } from "@/context/FoodProvider";

export default function App({ Component, pageProps }) {
  return (
    <FoodProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </FoodProvider>
  );
}
