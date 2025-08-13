import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappButton from "@/components/ui/ButtonWhatsapp";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const noHeaderPages = ['/landing']
  const showHeader = !noHeaderPages.includes(router.pathname)
  return <>
    {showHeader && <Header />}
    {/* Google Ads Tag */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-17359122520"
      strategy="afterInteractive"
    />
    <Script id="google-ads" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17359122520');
        `}
    </Script>
    <Component {...pageProps} />
    <Footer />
    <WhatsappButton />
    <ToastContainer autoClose={3500} />
  </>;
}
