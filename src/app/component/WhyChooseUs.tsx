import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
const musicContent = [
  {
    title: "Music Collaboration",
    description:
      "Create and edit music tracks with your band or collaborators in real time. Share melodies, tweak arrangements, and finalize compositions together, no matter where you are. Our platform makes music production seamless and engaging.",
  },
  {
    title: "Live Audio Mixing",
    description:
      "Mix tracks as changes unfold live. Adjust levels, add effects, and perfect your sound in real time, ensuring every beat is captured exactly as you envision. Say goodbye to outdated mixes and hello to instant audio perfection.",
  },
  {
    title: "Song Versioning",
    description:
      "Keep track of every edit with effortless version control. Our platform saves each change, letting you revisit previous versions or merge new ideas without losing your creative flow. Stay organized and focus on making music.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get instant input from collaborators or fans as you create. Share drafts, receive comments, and refine your tracks on the fly. Our platform keeps everyone connected, making feedback loops faster and more productive.",
  },
  {
    title: "Cloud-Based Studio",
    description:
      "Access your music projects from anywhere with our cloud-based studio. Work on your tracks from any device, ensuring your creative spark isn’t tied to a single location. Freedom and flexibility for every musician.",
  },
  {
    title: "Seamless Track Sharing",
    description:
      "Share your music effortlessly with collaborators or listeners. Our platform lets you send tracks, albums, or playlists instantly, with built-in tools to control access and gather feedback in real time.",
  },
  {
    title: "Dynamic Sound Editing",
    description:
      "Edit your music with precision and see changes in real time. From trimming clips to layering effects, our platform ensures every tweak is instantly reflected, keeping your creative process smooth and uninterrupted.",
  },
  {
    title: "Collaborative Playlists",
    description:
      "Build playlists with your team or community in real time. Add, rearrange, or remove tracks together, creating the perfect vibe for any occasion. Our platform makes playlist curation a group effort.",
  },
  {
    title: "Instant Remix Tools",
    description:
      "Remix tracks on the fly with real-time tools. Experiment with beats, loops, and samples while seeing changes instantly. Our platform empowers you to explore new sounds without the hassle of manual saves.",
  },
  {
    title: "Global Music Sync",
    description:
      "Sync your music projects across the globe. Work with international artists or producers in real time, ensuring every collaborator stays on the same page. Our platform bridges distances for seamless music creation.",
  },
];
function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={musicContent} />
    </div>
  )
}

export default WhyChooseUs
