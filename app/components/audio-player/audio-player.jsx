'use client';

import { Play, Pause, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AudioPlayer({ audioUrl, title, shareUrl, className }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playIcon, setPlayIcon] = useState(<Play />);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = document.getElementById(`audio-${title}`);
        const playBtn = document.getElementById(`play-audio-${title}`);

        playBtn.addEventListener('click', function () {
            if (isPlaying) {
                audio.pause();
                setPlayIcon(<Play />);
            } else {
                audio.play();
                setPlayIcon(<Pause />);
            }
            setIsPlaying(!isPlaying);
        });
        audio.addEventListener('ended', function () {
            setIsPlaying(false);
            setPlayIcon(<Play />);
        });
        audio.addEventListener('timeupdate', function () {
            setCurrentTime(audio.currentTime);
        });
        audio.addEventListener('loadedmetadata', function () {
            setDuration(audio.duration);
        });
    }, [isPlaying]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        return `${hours > 0 ? `${hours}:` : ''}${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-5 items-center h-fit bg-white bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-br dark:from-blue-950 dark:via-cyan-950 dark:to-zinc-900 rounded-2xl ${className}`}>
            <div className="flex gap-4 items-center">
                <button
                    id={`play-audio-${title}`}
                    className="bg-amber-300 p-2 rounded-full w-fit text-black transition-all hover:scale-110"
                >
                    {playIcon}
                </button>

                <span className="ml-2 text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
            </div>
            <audio id={`audio-${title}`} src={audioUrl}>
                Your browser does not support the audio element.
            </audio>
            <h3 className="text-lg font-bold">{title}</h3>
            <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
            >
                <ExternalLink className="flex items-center h-5 w-5" />
                <span>Open in suno</span>
            </a>
        </div>
    );
}
