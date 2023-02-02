import { AppProps } from "next/app";
import "../styles/index.css";
import { OpenFormProvider } from "../contexts/contact-form-context";

/**
 * By wrapping the app Component in an OpenFormProvider, the form
 * can be opened from anywhere in the app using OpenFormContext
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OpenFormProvider> 
      <Component {...pageProps} />
    </OpenFormProvider>
  );
}
