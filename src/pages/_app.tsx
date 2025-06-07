import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappButton from "@/components/ui/ButtonWhatsapp";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <WhatsappButton />
    <ToastContainer autoClose={3500} />
  </>;
}
