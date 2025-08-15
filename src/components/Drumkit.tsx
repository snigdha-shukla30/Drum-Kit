"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Boxes } from "@/components/ui/background-boxes";

const keys = ["w", "a", "s", "d", "j", "k", "l"];

const soundMap: Record<string, string> = {
  w: "/sounds/crash.mp3",
  a: "/sounds/kick-bass.mp3",
  s: "/sounds/snare.mp3",
  d: "/sounds/tom-1.mp3",
  j: "/sounds/tom-2.mp3",
  k: "/sounds/tom-3.mp3",
  l: "/sounds/tom-4.mp3",
};

export default function DrumKit() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      playSound(e.key);
      animateButton(e.key);
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  const playSound = (key: string) => {
    const audioSrc = soundMap[key];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      alert("Invalid key!");
    }
  };

  const animateButton = (key: string) => {
    const button = document.querySelector(`.drum-${key}`);
    if (button) {
      button.classList.add("scale-90", "shadow-glow");
      setTimeout(() => {
        button.classList.remove("scale-90", "shadow-glow");
      }, 150);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#232f45] to-[#283149] text-white flex flex-col items-center justify-center px-4 py-8">
      <Boxes />
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-12 font-[Arvo] text-white drop-shadow-lg"
      >
        Drum <span className="text-pink-400">🥁</span> Kit
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6">
        {keys.map((key) => (
          <motion.div
            whileTap={{ scale: 0.9 }}
            key={key}
            className="rounded-xl backdrop-blur-md shadow-lg shadow-[#DBEDF3]/10 transition-all"
          >
            <div className="rounded-xl">
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  `drum-${key} drum h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 
                  text-4xl sm:text-5xl font-extrabold 
                  text-[#DA0463] border-[3px] border-pink-400 
                  bg-white/10 hover:bg-white/20
                  transition-transform duration-150 ease-in-out
                  rounded-2xl flex items-center justify-center 
                  bg-cover bg-center`
                )}
                style={{
                  backgroundImage: `url(/images/${getImageName(key)})`,
                }}
                onClick={() => {
                  playSound(key);
                  animateButton(key);
                }}
              >
                {key.toUpperCase()}
              </Button>
              <BorderBeam size={80} duration={6} />
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 text-sm text-[#DBEDF3] text-center">
        Made with <span className="text-red-400">❤️</span> & Framer Motion.
      </footer>
    </main>
  );
}

function getImageName(key: string): string {
  const map: Record<string, string> = {
    w: "crash.png",
    a: "kick.png",
    s: "snare.png",
    d: "tom1.png",
    j: "tom2.png",
    k: "tom3.png",
    l: "tom4.png",
  };
  return map[key] || "";
}
