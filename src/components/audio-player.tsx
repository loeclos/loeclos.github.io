'use client';

import { Play, Pause, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Track {
  id: string;
  url: string;
  title: string;
}



export default function AudioPlayer({ track, className }: { track: Track, className?: string }) {
  const [currentTrack, setCurrentTrack] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playIcon, setPlayIcon] = useState(<Play />);

  const [error, setError] = useState("");

  useEffect(() => {
    setAudioPlayer(document.querySelector("audio"));

    const playBtn = document.getElementById(`play-audio`);


    playBtn?.addEventListener('click', function () {
      if (isPlaying) {
        audioPlayer?.pause();
        setPlayIcon(<Play />);
      } else {
        audioPlayer?.play();
        setPlayIcon(<Pause />);
      }
      setIsPlaying(!isPlaying);
    });
    audioPlayer?.addEventListener('ended', function () {
      setIsPlaying(false);
      setPlayIcon(<Play />);
    });
    audioPlayer?.addEventListener('timeupdate', function () {
      setCurrentTime(audioPlayer?.currentTime);
    });
    audioPlayer?.addEventListener('loadedmetadata', function () {
      setDuration(audioPlayer?.duration);
    });
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? `${hours}:` : ''}${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-5 items-center h-fit bg-white bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-br dark:from-blue-950 dark:via-cyan-950 dark:to-zinc-900 rounded-2xl ${className} hover:scale-105 transition-transform duration-200 cursor-pointer`}>
      <div className="flex gap-4 items-center">
        <button
          id="play-audio"
          className="bg-amber-300 p-2 rounded-full w-fit text-black transition-all hover:scale-110"
        >
          {playIcon}
        </button>

        <span className="ml-2 text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      <audio src={track.url}>
        Your browser does not support the audio element.
      </audio>
      <h3 className="text-lg font-bold">{track.title}</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 items-center underline hover:text-cyan-600"
      >
        <ExternalLink className="flex items-center h-5 w-5" />
        <span>Open in suno</span>
      </a>
    </div>
  );
}
