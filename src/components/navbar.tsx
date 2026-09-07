'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

function formatTime(time: number) {
  if (!Number.isFinite(time) || time <= 0) return '0:00';
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Navbar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Keep audio element in sync with volume/muted
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onLoaded = () => setDuration(a.duration || 0);
    const onTimeUpdate = () => {
      if (!isDragging) setCurrentTime(a.currentTime);
    };
    const onEnded = () => {
      // loop handles replay, but keep state consistent if loop disabled
      setIsPlaying(false);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    a.addEventListener('loadedmetadata', onLoaded);
    a.addEventListener('timeupdate', onTimeUpdate);
    a.addEventListener('ended', onEnded);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);

    // if metadata already loaded
    if (a.readyState >= 1) setDuration(a.duration || 0);

    return () => {
      a.removeEventListener('loadedmetadata', onLoaded);
      a.removeEventListener('timeupdate', onTimeUpdate);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
    };
  }, [isDragging]);

  const togglePlay = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
    } else {
      try {
        await a.play();
      } catch {
        // autoplay blocked — stay paused
        setIsPlaying(false);
      }
    }
  };

  const seekTo = (clientX: number) => {
    const a = audioRef.current;
    const bar = progressRef.current;
    if (!a || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const t = ratio * duration;
    a.currentTime = t;
    setCurrentTime(t);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    seekTo(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    seekTo(e.clientX);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed z-50 flex w-full bg-black items-center h-7 px-0 gap-2 sm:gap-3 font-mono text-white text-xs select-none">
      {/* play/pause — full bar height */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause lofi' : 'Play lofi'}
        className="shrink-0 flex items-center justify-center h-full px-3 hover:bg-[#ffe8ba] hover:text-black active:bg-white transition-colors duration-200"
      >
        {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-[1px]" />}
      </button>

      {/* label + time */}
      <span className="shrink-0 hidden sm:inline tracking-tight">lofi</span>
      <span className="shrink-0 tabular-nums opacity-80">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      {/* visible scrub — flex-1 */}
      <div
        ref={progressRef}
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={duration || 0}
        aria-valuenow={Math.floor(currentTime)}
        tabIndex={0}
        onClick={handleProgressClick}
        onPointerMove={handlePointerMove}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          setIsDragging(true);
          seekTo(e.clientX);
        }}
        onPointerUp={(e) => {
          (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
          setIsDragging(false);
        }}
        onKeyDown={(e) => {
          const a = audioRef.current;
          if (!a || !duration) return;
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            a.currentTime = Math.max(0, a.currentTime - 5);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            a.currentTime = Math.min(duration, a.currentTime + 5);
          } else if (e.key === 'Home') {
            e.preventDefault();
            a.currentTime = 0;
          } else if (e.key === 'End') {
            e.preventDefault();
            a.currentTime = duration;
          }
        }}
        className="flex-1 relative h-[14px] flex items-center cursor-pointer group outline-none focus-visible:ring-1 focus-visible:ring-[#ffe8ba] rounded-[1px]"
      >
        {/* track */}
        <div className="w-full h-[2px] bg-white/20 group-hover:bg-white/30 transition-colors">
          <div
            className="h-full bg-white group-hover:bg-[#ffe8ba] transition-colors"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white group-hover:bg-[#ffe8ba] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none"
          style={{ left: `${progress}%` }}
        />
      </div>

      {/* volume — full bar height */}
      <div className="shrink-0 flex items-center gap-1 h-full pr-2">
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label={muted || volume === 0 ? 'Unmute' : 'Mute'}
          className="flex items-center justify-center h-full px-3 hover:bg-[#ffe8ba] hover:text-black active:bg-white transition-colors duration-200"
        >
          {muted || volume === 0 ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>

        {/* slider - hidden on very small, visible sm+ */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setVolume(v);
            if (v > 0 && muted) setMuted(false);
            if (v === 0) setMuted(true);
          }}
          aria-label="Volume"
          className="hidden sm:block w-16 md:w-20 h-[2px] appearance-none bg-white/20 accent-white hover:accent-[#ffe8ba] cursor-pointer [&::-webkit-slider-runnable-track]:h-[2px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:-mt-[3px]"
        />
      </div>

      <audio ref={audioRef} src="/lofi.mp3" loop preload="metadata" />
    </div>
  );
}
