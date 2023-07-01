import { AppProps } from "next/app";
import "../styles/index.css";
import { OpenFormProvider } from "../contexts/contact-form-context";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import ThemeButton from "../components/ThemeButton";

/**
 * By wrapping the app Component in an OpenFormProvider, the form
 * can be opened from anywhere in the app using OpenFormContext
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
    <OpenFormProvider> 
      <>
      <ThemeButton />
      <Component {...pageProps} />
      <Analytics />
      </>
    </OpenFormProvider>
    </ThemeProvider>
  );
}
