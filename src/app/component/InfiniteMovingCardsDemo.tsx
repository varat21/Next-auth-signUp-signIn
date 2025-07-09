"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";


export function InfiniteMovingCardsDemo() {
  return (
    
    <div className="relative flex h-[25rem] w-full items-center justify-center bg-white dark:bg-black">
<div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className=" h-[25rem] rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div>
          <h1 className="font-semibold flex justify-center item-center text-2xl">
            Hear Our Harmony: Voices of Success
          </h1>
        </div>
        <div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Create and edit music tracks with your band or collaborators in real time. Share melodies, tweak arrangements, and finalize compositions together, no matter where you are. Our platform makes music production seamless and engaging.",
    name: "Alex Harper",
    title: "Music Producer",
  },
  {
    quote:
      "Mix tracks as changes unfold live. Adjust levels, add effects, and perfect your sound in real time, ensuring every beat is captured exactly as you envision. Say goodbye to outdated mixes and hello to instant audio perfection.",
    name: "Sofia Mendes",
    title: "Music Engineer",
  },
  {
    quote:
      "Keep track of every edit with effortless version control. Our platform saves each change, letting you revisit previous versions or merge new ideas without losing your creative flow. Stay organized and focus on making music.",
    name: "Liam Chen",
    title: "Music Composer",
  },
  {
    quote:
      "Get instant input from collaborators or fans as you create. Share drafts, receive comments, and refine your tracks on the fly. Our platform keeps everyone connected, making feedback loops faster and more productive.",
    name: "Emma Riley",
    title: "Music Collaborator",
  },
  {
    quote:
      "Access your music projects from anywhere with our cloud-based studio. Work on your tracks from any device, ensuring your creative spark isn’t tied to a single location. Freedom and flexibility for every musician.",
    name: "Noah Patel",
    title: "Music Artist",
  },
  {
    quote:
      "Share your music effortlessly with collaborators or listeners. Our platform lets you send tracks, albums, or playlists instantly, with built-in tools to control access and gather feedback in real time.",
    name: "Isabella Cruz",
    title: "Music Distributor",
  },
  {
    quote:
      "Edit your music with precision and see changes in real time. From trimming clips to layering effects, our platform ensures every tweak is instantly reflected, keeping your creative process smooth and uninterrupted.",
    name: "Jameson Lee",
    title: "Music Editor",
  },
  {
    quote:
      "Build playlists with your team or community in real time. Add, rearrange, or remove tracks together, creating the perfect vibe for any occasion. Our platform makes playlist curation a group effort.",
    name: "Ava Thompson",
    title: "Music Curator",
  },
  {
    quote:
      "Remix tracks on the fly with real-time tools. Experiment with beats, loops, and samples while seeing changes instantly. Our platform empowers you to explore new sounds without the hassle of manual saves.",
    name: "Ethan Brooks",
    title: "Music Remixer",
  },
  {
    quote:
      "Sync your music projects across the globe. Work with international artists or producers in real time, ensuring every collaborator stays on the same page. Our platform bridges distances for seamless music creation.",
    name: "Mia Alvarez",
    title: "Music Coordinator",
  },
];
