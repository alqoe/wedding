"use client";

import { useEffect } from 'react';
import MusicPlayer from "@/components/MusicPlayer";
import WeddingDetails from "@/components/WeddingDetails";
import BrideAndGroom from "@/components/BrideAndGroom";
import Comments from "@/components/Comments";

export default function WeddingPage() {
  useEffect(() => {
    // Auto-play music when the page loads
    const audio = new Audio("https://dl.swasthi.app/al.mp3");
    audio.play().catch(error => {
      console.log("Auto-play prevented:", error);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#441515] text-white">
      <div className="max-w-md mx-auto p-4">
        <MusicPlayer autoPlay={true} />
        <WeddingDetails />
        <BrideAndGroom />
        <Comments />
      </div>
    </main>
  );
}