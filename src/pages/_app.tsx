import '../styles/HeroNew.module.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Add analytics tracking here if needed
    const handleRouteChange = (url: string) => {
      // Detects when a user navigates between pages - cleans up event listeners when the component unmounts.
      console.log(`Page navigated to: ${url}`);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // every page (components) is wrapped inside layout - SEO metadata passed dynamically via pageProps
  return (
    <Layout
      title={pageProps.title}
      description={pageProps.description}
      image={pageProps.image}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
