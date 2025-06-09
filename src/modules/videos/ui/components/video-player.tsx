"use client"

import MuxPlayer from "@mux/mux-player-react";
import { useRef, useState } from "react";
import { THUMBNAIL_FALLBACK } from "@/modules/videos/constants";
import { PlayIcon } from "lucide-react"; 

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}

export const VideoPlayer = ({
playbackId,
thumbnailUrl,
autoPlay = false,
onPlay,
}: VideoPlayerProps) => {
type MuxPlayerRef = React.ComponentRef<typeof MuxPlayer>;
const playerRef = useRef<MuxPlayerRef>(null);
const [hasUserInteracted, setHasUserInteracted] = useState(autoPlay);

const handleCustomPlay = () => {
    setHasUserInteracted(true);
    playerRef.current?.play(); // Trigger playback
    onPlay?.();
};

return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg group">
    {/* Mux Player */}
    <MuxPlayer
        ref={playerRef}
        playbackId={playbackId || ""}
        poster={thumbnailUrl || THUMBNAIL_FALLBACK}
        playerInitTime={0}
        autoPlay={autoPlay}
        thumbnailTime={0}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        accentColor="#FF2056"
    />

    {/* Custom Overlay with Thumbnail + Button */}
    {!hasUserInteracted && (
        <button
        onClick={handleCustomPlay}
        className="absolute inset-0 z-10 w-full h-full bg-black/30 hover:bg-black/40 flex items-center justify-center transition"
        >
        <img
            src={thumbnailUrl || THUMBNAIL_FALLBACK}
            alt="Video thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <PlayIcon className="w-9 h-9 fill-white text-white opacity-100 group-hover:scale-105 transition-transform" />
        </button>
    )}
    </div>
);
};
