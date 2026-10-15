/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './lib/router.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { Lightbox } from './components/Lightbox.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProgramsPage } from './pages/ProgramsPage.tsx';
import { EventsPage } from './pages/EventsPage.tsx';
import { LeadershipPage } from './pages/LeadershipPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { DonationsPage } from './pages/DonationsPage.tsx';
import { TributePage } from './pages/TributePage.tsx';
import { loadStoredImages } from './lib/storage.ts';

function AppContent() {
  const { currentRoute } = useRouter();
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  // Permanent image loading from durable LocalStorage & IndexedDB
  useEffect(() => {
    try {
      const saved = localStorage.getItem('clm_uploaded_scenes');
      if (saved) {
        const parsed = JSON.parse(saved);
        delete parsed['WhatsApp Image 2026-10-12 at 13.55.33.jpeg'];
        setUploadedImages(parsed);
      }
    } catch {
      // ignore
    }

    loadStoredImages()
      .then((imgs) => {
        if (imgs && Object.keys(imgs).length > 0) {
          delete imgs['WhatsApp Image 2026-10-12 at 13.55.33.jpeg'];
          setUploadedImages((prev) => ({ ...prev, ...imgs }));
        }
      })
      .catch(() => {});
  }, []);

  const whoWeAreImageSrc = uploadedImages['WhatsApp Image 2026-10-12 at 14.08.52.jpeg'];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#2B2B2B]">
      {/* Global Image Lightbox Modal */}
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Persistent Multi-Page Navigation Header */}
      <Header />

      {/* Multi-Page Route Switch */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <HomePage
            whoWeAreImageSrc={whoWeAreImageSrc}
            onOpenLightbox={(src, caption) => setLightboxImage({ src, caption })}
          />
        )}

        {currentRoute === '/about' && (
          <AboutPage
            whoWeAreImageSrc={whoWeAreImageSrc}
            onOpenLightbox={(src, caption) => setLightboxImage({ src, caption })}
          />
        )}

        {currentRoute === '/programs' && <ProgramsPage />}

        {currentRoute === '/events' && (
          <EventsPage
            uploadedImages={uploadedImages}
            onOpenLightbox={(src, caption) => setLightboxImage({ src, caption })}
          />
        )}

        {currentRoute === '/leadership' && <LeadershipPage />}

        {currentRoute === '/contact' && <ContactPage />}

        {currentRoute === '/donate' && <DonationsPage />}

        {currentRoute === '/tribute' && <TributePage />}
      </main>

      {/* Persistent Institutional Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
