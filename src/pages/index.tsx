import Head from 'next/head';
import HeroNew from '@/components/landing/HeroNew';
import CorePillars from '@/components/landing/CorePillars';
import SwahilipotPillar from '@/components/landing/SwahilipotPillar';
import Numbers from '@/components/landing/Numbers';
import Partners from '@/components/landing/Partners';
import Events from '@/components/landing/Events';
import Testimonials from '@/components/landing/Testimonials';
import CaseManagement from '@/components/landing/CaseManagement';
import Attachment from '@/components/landing/Attachment';
import Swahilipotfm from '@/components/landing/Swahilipotfm';
import WorkWithUs from '@/components/landing/WorkWithUs';
import FAQS from '@/components/landing/FAQS';
import PageCTA from '@/components/landing/PageCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>SwahiliPot Hub - Empowering Innovation in Coastal region</title>
        <meta name="description" content="SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <HeroNew />
        <CorePillars />
        <SwahilipotPillar />
        <Numbers />
        <CaseManagement />
        <Events />
        <Attachment />
        <Swahilipotfm />
        <Testimonials />
        <Partners />
        <WorkWithUs />
        <FAQS />
        <PageCTA />
      </main>
    </>
  );
}