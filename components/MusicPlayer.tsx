"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Clock, List, Share, ChevronDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("-0:00");
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://dl.swasthi.app/al.mp3");
    
    const audio = audioRef.current;
    
    audio.addEventListener("loadedmetadata", () => {
      setDuration(`-${Math.floor(audio.duration / 60)}:${String(Math.floor(audio.duration % 60)).padStart(2, "0")}`);
      if (autoPlay) {
        audio.play().catch(error => {
          console.log("Auto-play prevented:", error);
          setPlaying(false);
        });
      }
    });
    
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(`${Math.floor(audio.currentTime / 60)}:${String(Math.floor(audio.currentTime % 60)).padStart(2, "0")}`);
      setProgress((audio.currentTime / audio.duration) * 100);
    });
    
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <button className="p-2">
          <ChevronDown className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Mocca</h1>
        <button className="p-2">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      <div className="relative aspect-square">
        <Image
          src="https://dl.swasthi.app/al.jpg"
          alt="Album cover"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">On the Night Like This</h2>
        <p className="text-gray-300">Mocca</p>
      </div>

      <div className="space-y-4">
        <div className="relative w-full h-1 bg-gray-600 rounded">
          <div
            className="absolute h-full bg-green-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <button className="p-2 text-green-500">
            <Shuffle className="w-6 h-6" />
          </button>
          <button className="p-2">
            <SkipBack className="w-8 h-8" />
          </button>
          <button
            className="p-4 bg-white rounded-full"
            onClick={togglePlay}
          >
            {playing ? (
              <Pause className="w-8 h-8 text-black" />
            ) : (
              <Play className="w-8 h-8 text-black" />
            )}
          </button>
          <button className="p-2">
            <SkipForward className="w-8 h-8" />
          </button>
          <button className="p-2">
            <Clock className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-between mt-8">
          <button className="p-2">
            <List className="w-6 h-6" />
          </button>
          <button className="p-2">
            <Share className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}