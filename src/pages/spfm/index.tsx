// /pages/spfm/index.tsx

import React, { useRef, useState } from 'react';
import LiveStreamPlayer from '../../components/spfm/LiveStreamPlayer';
import RadioStream from '../../components/spfm/RadioStream';
import Link from 'next/link';
import PageHero from '@/components/engineering/PageHero';

export default function SpfmPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  return (
    <>
      <PageHero 
        title="SwahiliPot FM Live Streaming" 
        subtitle="Experience the energy of our community radio – from local stories to captivating music."
      />
      <div className="container-custom mx-auto p-8">
        {/* Hidden audio element for the radio stream */}
        <audio
          ref={audioRef}
          src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127"
          preload="auto"
        />

        {/* Live and Radio Stream components */}
        <div className="mb-8">
          <LiveStreamPlayer title={''} />
          {/* <RadioStream streamUrl={''} title={''} /> */}
        </div>

        {/* Action buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? 'Pause' : 'Listen Live'}
          </button>

          <Link href="https://www.swahilipotfm.co.ke/" target="_blank" rel="noopener noreferrer">
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Visit Website
            </button>
          </Link>
          
        </div>
      </div>
    </>
  );
}
