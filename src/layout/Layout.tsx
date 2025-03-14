
import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MetaTags from './MetaTags';
import { ThemeProvider } from '@/utils/themeContext';
import { AccessibilityProvider } from '@/components/accesibility/AccessibilityContext';
import AccessibilityButton from '@/components/accesibility/AccessibilityButton';
import AccessibilityMenu from '@/components/accesibility/AccessibilityMenu';


interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export default function Layout({ 
  children, 
  title = 'SwahiliPot Hub - Empowering Innovation in East Africa',
  description = 'SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.',
  image = '/images/og-image.jpg'
}: LayoutProps) {
  const [isAccessibilityMenuOpen, setIsAccessibilityMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <MetaTags title={title} description={description} image={image} />
        <div className="flex flex-col min-h-screen">

          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />

          {/* Accessibility Features */}
          <AccessibilityButton onClick={() => setIsAccessibilityMenuOpen(true)} />
          <AccessibilityMenu 
            isOpen={isAccessibilityMenuOpen} 
            onClose={() => setIsAccessibilityMenuOpen(false)} 
          />
        </div>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}