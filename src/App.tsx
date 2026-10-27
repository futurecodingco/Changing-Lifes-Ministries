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

import herHonourRestoredImg from './assets/images/her_honour_restored.jpg';
import winterWordWorshipImg from './assets/images/winter_word_worship.jpg';
import welkomWomenOutreachImg from './assets/images/welkom_women_outreach.jpg';
import limpopoMissionImg from './assets/images/limpopo_mission.jpg';
import vendaFellowshipImg from './assets/images/venda_fellowship.jpg';

const DEFAULT_IMAGES: Record<string, string> = {
  'WhatsApp Image 2026-10-12 at 13.55.33.jpeg': herHonourRestoredImg,
  'WhatsApp Image 2026-10-12 at 13.56.14.jpeg': winterWordWorshipImg,
  'WhatsApp Image 2026-10-12 at 13.56.59.jpeg': welkomWomenOutreachImg,
  'WhatsApp Image 2026-10-12 at 14.08.52.jpeg': limpopoMissionImg,
  'WhatsApp Image 2026-10-12 at 13.59.39.jpeg': vendaFellowshipImg,
};

function AppContent() {
  const { currentRoute } = useRouter();
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>(DEFAULT_IMAGES);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  // Permanent image loading from durable LocalStorage & IndexedDB
  useEffect(() => {
    try {
      const saved = localStorage.getItem('clm_uploaded_scenes');
      if (saved) {
        const parsed = JSON.parse(saved);
        setUploadedImages((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }

    loadStoredImages()
      .then((imgs) => {
        if (imgs && Object.keys(imgs).length > 0) {
          setUploadedImages((prev) => ({ ...prev, ...imgs }));
        }
      })
      .catch(() => {});
  }, []);

  const whoWeAreImageSrc = uploadedImages['WhatsApp Image 2026-10-12 at 14.08.52.jpeg'] || limpopoMissionImg;

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
