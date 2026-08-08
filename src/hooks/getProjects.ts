'use client';

import { useCallback } from 'react';
import { Project } from '@/types/projects';

const projects: Project[] = [
    {
        id: 'b9c564ec-4811-4237-a2b8-9d180b8325662b',
        title: 'Portfolio Website',
        description: "The main hub for my stuff",
        thumbnailUrl: '/images/PORTFOLIO-thumbnail.webp',
        images: [
            {
                src: '/images/PORTFOLIO-thumbnail.webp',
                alt: 'Showcase portfolio thumbnail',
            },
            {
                src: '/images/PORTFOLIO-01.webp',
                alt: 'Portfolio screenshot.'
            }
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/loeclos.github.io' },
            { title: 'Preview', url: 'https://loeclos.github.io/' },
        ],
        skills: ['React', 'Firebase', 'Vite', 'Tailwind'],
        projectType: 'Frontend Application',
        date: 2025,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d180b8574d62b',
        title: 'Minifolio',
        description:
            '⚡ A minimal portfolio template for Developers | 2025. I was the one who migrated the old template (written in JS and html) to React/Next.JS and TS.',
        thumbnailUrl: '/images/MINIFOLIO-thumbnail.webp',
        images: [
            {
                src: '/images/MINIFOLIO-thumbnail.webp',
                alt: 'Minifolio thumbnail',
            },
            {
                src: '/images/MINIFOLIO-01.webp',
                alt: 'Minifolio screenshot 1',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/Minifolio' },
            { title: 'Preview', url: 'https://minifolio-preview.vercel.app' },
        ],
        skills: ['React', 'Vercel', 'Next.js', 'pnpm'],
        projectType: 'Frontend Application',
        date: 2023,
    },
    {
        id: 'cd500df9-152d-4fad-a371-cb47dcdd43ed',
        title: 'Chess Website',
        description: 'A playable multiplayer chess game',
        thumbnailUrl: '/images/CHESS-thumbnail.webp',
        images: [
            {
                src: '/images/CHESS-thumbnail.webp',
                alt: 'Chess website thumbnail',
            },
            {
                src: '/images/CHESS-01.webp',
                alt: 'Chess website screenshot 1',
            },
            {
                src: '/images/CHESS-02.webp',
                alt: 'Chess website screenshot 2',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/chess-frontend' },
            { title: 'Preview', url: 'https://chessgame-85747.vercel.app/' },
        ],
        skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'pnpm'],
        projectType: 'Frontend Application',
        date: 2025,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d180b4354547d62b',
        title: 'Chess Backend',
        description: 'The backend part of my chess site',
        thumbnailUrl: '/images/CHESS-thumbnail.webp',
        images: [
            {
                src: '/images/CHESS-thumbnail.webp',
                alt: 'Chess website thumbnail',
            },
            {
                src: '/images/CHESS-01.webp',
                alt: 'Chess website screenshot 1',
            },
            {
                src: '/images/CHESS-02.webp',
                alt: 'Chess website screenshot 2',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/chess-backend' },
            { title: 'Preview', url: 'https://chessgame-85747.vercel.app/' },
        ],
        skills: ['JS', 'socket.io', 'pnpm'],
        projectType: 'Backend Application',
        date: 2025,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d1804345446d62b',
        title: 'Linktree',
        description: 'A personnal linktree website',
        thumbnailUrl: '/images/LINKTREE-thumbnail.webp',
        images: [
            {
                src: '/images/LINKTREE-thumbnail.webp',
                alt: 'Linktree website thumbnail',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/linktree-template' },
            { title: 'Preview', url: 'https://linktree-template-preview.vercel.app/' },
        ],
        skills: ['React', 'Next.JS', 'Typescript'],
        projectType: 'Frontend Application',
        date: 2025,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d180b87d62b',
        title: 'Media Team Site',
        description: 'A blog/info site for a media team',
        thumbnailUrl: '/images/GABC-thumbnail.webp',
        images: [
            {
                src: '/images/GABC-thumbnail.webp',
                alt: 'Media team site thumbnail',
            },
            {
                src: '/images/GABC-01.webp',
                alt: 'Media team site screenshot 1',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/Media-Team-Web-Firebase' },
            { title: 'Preview', url: 'https://gabc-media-team.web.app/' },
        ],
        skills: ['React', 'Firebase', 'Vite', 'Tailwind', 'pnpm'],
        projectType: 'Frontend Application',
        date: 2024,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d180b454d62b',
        title: 'Aircraft Prediction',
        description: 'A finetuned yolo11n model on custom dataset.',
        thumbnailUrl: '/images/AIR-thumbnail.webp',
        images: [
            {
                src: '/images/AIR-thumbnail.webp',
                alt: 'Aircraft prediction thumbnail',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/aircraft-prediction' },
            { title: 'Preview', url: 'https://huggingface.co/spaces/loeclos/aircraft-prediction' },
        ],
        skills: ['Python', 'Yolo', 'Pytorch'],
        projectType: 'Python Application',
        date: 2025,
    },
    {
        id: 'b9c564ec-4811-4237-a2b8-9d18043446d62b',
        title: 'Olhar Device',
        description:
            "At first, this sees to be nothing, but the project is actually quite complicated. It uses request to get video source URL's, download the videos one by one and show them in a loop onto the screen. After each video comes a QR code, with a link that was in the metadata.",
        thumbnailUrl: '/images/OLHAR-thumbnail.webp',
        images: [
            {
                src: '/images/OLHAR-thumbnail.webp',
                alt: 'Olhar device thumbnail',
            },
        ],
        urls: [
            { title: 'Github', url: 'https://github.com/loeclos/OlharDevice' },
            { title: 'Preview', url: 'https://olhar.media/' },
        ],
        skills: ['Python', 'PyQT'],
        projectType: 'Python Application',
        date: 2024,
    },
];

export default function GetProjects() {
    const request = useCallback(() => {
        return projects;
    }, []);

    const getByID = (id: string) => {
        return projects.find(project => project["id"] === id)
    };

    return {
        request,
        getByID,
    };
}
