'use client';

import { useState, useCallback } from 'react';
import { Project } from '@/types/projects';

export type ProcessState = 'error' | 'loading' | 'success';

export default function getProjects() {
    const [process, setProcess] = useState<ProcessState>('loading');
    const projects: Project[] = [
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180b8325662b',
            title: 'Showcase',
            description: "It's before your eyes.",
            thumbnailUrl: '/images/PORTFOLIO-thumbnail.png',
            images: [
                {
                    src: '/images/PORTFOLIO-thumbnail.png',
                    alt: 'Showcase portfolio thumbnail',
                },
            ],
            codeURL: 'https://github.com/loeclos/loeclos.github.io',
            projectUrl: 'https://loeclos.github.io/',
            skills: ['React', 'Firebase', 'Vite', 'Tailwind'],
            projectType: 'Frontend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180b8574d62b',
            title: 'Minifolio',
            description:
                '⚡ A minimal portfolio template for Developers | 2025. I was the one who migrated the old template (written in JS and html) to React/Next.JS and TS.',
            thumbnailUrl: '/images/MINIFOLIO-thumbnail.png',
            images: [
                {
                    src: '/images/MINIFOLIO-thumbnail.png',
                    alt: 'Minifolio thumbnail',
                },
                {
                    src: '/images/MINIFOLIO-01.png',
                    alt: 'Minifolio screenshot 1',
                },
                {
                    src: '/images/MINIFOLIO-02.png',
                    alt: 'Minifolio screenshot 2',
                },
            ],
            codeURL: 'https://github.com/loeclos/Minifolio',
            projectUrl: 'https://minifolio-preview.vercel.app',
            skills: ['React', 'Vercel', 'Next.js', 'React', 'pnpm'],
            projectType: 'Frontend Application',
        },
        {
            id: 'cd500df9-152d-4fad-a371-cb47dcdd43ed',
            title: 'Chess Website',
            description: 'A playable multiplayer chess game',
            thumbnailUrl: '/images/CHESS-thumbnail.png',
            images: [
                {
                    src: '/images/CHESS-thumbnail.png',
                    alt: 'Chess website thumbnail',
                },
                {
                    src: '/images/CHESS-01.png',
                    alt: 'Chess website screenshot 1',
                },
            ],
            projectUrl: 'https://chessgame-85747.vercel.app/',
            codeURL: 'https://github.com/loeclos/chess-frontend',
            skills: [
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Vercel',
                'pnpm',
            ],
            projectType: 'Frontend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180b4354547d62b',
            title: 'Chess Backend',
            description: 'The backend part of my chess site',
            thumbnailUrl: '/images/CHESS-thumbnail.png',
            images: [
                {
                    src: '/images/CHESS-thumbnail.png',
                    alt: 'Chess backend thumbnail',
                },
                {
                    src: '/images/CHESS-01.png',
                    alt: 'Chess backend screenshot 1',
                },
            ],
            codeURL: 'https://github.com/loeclos/chess-backend',
            projectUrl: 'https://chessgame-85747.vercel.app/',
            skills: ['JS', 'socket.io', 'pnpm'],
            projectType: 'Backend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d1804345446d62b',
            title: 'Linktree',
            description: 'A personnal linktree website',
            thumbnailUrl: '/images/LINKTREE-thumbnail.png',
            images: [
                {
                    src: '/images/LINKTREE-thumbnail.png',
                    alt: 'Linktree website thumbnail',
                },
            ],
            codeURL: 'https://github.com/loeclos/linktree-template',
            projectUrl: 'https://linktree-template-preview.vercel.app/',
            skills: ['React', 'Next.JS', 'Typescript'],
            projectType: 'Frontend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180b87d62b',
            title: 'Media Team Site',
            description: 'A blog/info site for a media team',
            thumbnailUrl: '/images/GABC-thumbnail.png',
            images: [
                {
                    src: '/images/GABC-thumbnail.png',
                    alt: 'Media team site thumbnail',
                },
                {
                    src: '/images/GABC-01.png',
                    alt: 'Media team site screenshot 1',
                },
                {
                    src: '/images/GABC-02.png',
                    alt: 'Media team site screenshot 2',
                },
            ],
            codeURL: 'https://github.com/loeclos/Media-Team-Web-Firebase',
            projectUrl: 'https://gabc-media-team.web.app/',
            skills: ['React', 'Firebase', 'Vite', 'Tailwind', 'pnpm'],
            projectType: 'Frontend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d18234262b',
            title: 'Marvel Information portal',
            description: 'A helpful site for Marvel lovers.',
            thumbnailUrl: '/images/MARVEL-thumbnail.png',
            images: [
                {
                    src: '/images/MARVEL-thumbnail.png',
                    alt: 'Marvel information portal thumbnail',
                },
                {
                    src: '/images/MARVEL-01.png',
                    alt: 'Marvel information portal screenshot 1',
                },
            ],
            codeURL: 'https://github.com/loeclos/Marvel-Information-Portal',
            projectUrl: 'https://marvel-information-portal-2qnc.vercel.app/',
            skills: ['React', 'Vercel', 'Vite', 'Sass'],
            projectType: 'Frontend Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180434476762b',
            title: 'Nutrify Website',
            description:
                'A website for a nutritionist, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
            thumbnailUrl: '/images/NUTRIFY-thumbnail.png',
            images: [
                {
                    src: '/images/NUTRIFY-thumbnail.png',
                    alt: 'Nutrify website thumbnail',
                },
                {
                    src: '/images/NUTRIFY-01.png',
                    alt: 'Nutrify website screenshot 1',
                },
            ],
            codeURL: 'https://github.com/loeclos/OlharDevice',
            projectUrl: 'https://olhar.media/',
            skills: ['React', 'Tailwind', 'PNPM'],
            projectType: 'Python Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d180b454d62b',
            title: 'Aircraft Prediction',
            description: 'A finetuned yolo11n model on custom dataset.',
            thumbnailUrl: '/images/AIR-thumbnail.png',
            images: [
                {
                    src: '/images/AIR-thumbnail.png',
                    alt: 'Aircraft prediction thumbnail',
                },
            ],
            codeURL: 'https://github.com/loeclos/aircraft-prediction',
            projectUrl:
                'https://huggingface.co/spaces/loeclos/aircraft-prediction',
            skills: ['Python', 'Yolo', 'Pytorch'],
            projectType: 'Python Application',
        },
        {
            id: 'b9c564ec-4811-4237-a2b8-9d18043446d62b',
            title: 'Olhar Device',
            description:
                "At first, this sees to be nothing, but the project is actually quite complicated. It uses request to get video source URL's, download the videos one by one and show them in a loop onto the screen. After each video comes a QR code, with a link that was in the metadata.",
            thumbnailUrl: '/images/OLHAR-thumbnail.png',
            images: [
                {
                    src: '/images/OLHAR-thumbnail.png',
                    alt: 'Olhar device thumbnail',
                },
            ],
            codeURL: 'https://github.com/loeclos/OlharDevice',
            projectUrl: 'https://olhar.media/',
            skills: ['Python', 'PyQT'],
            projectType: 'Python Application',
        },
    ];

    const request = useCallback(() => {
        setProcess('success');
        return projects;
    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    const getByID = (id: string) => {
        return projects.find((project) => project.id === id);
    };

    const filterProjects = (query: string) => {
        setProcess('loading');
        if (!query) {
            return projects;
        }
        const lowerQuery = query.toLowerCase();
        const filtered = projects.filter((project) => {
            const inTitle = project.title.toLowerCase().includes(lowerQuery);
            const inDescription = project.description
                .toLowerCase()
                .includes(lowerQuery);
            const inSkills = project.skills.some((skill) =>
                skill.toLowerCase().includes(lowerQuery)
            );
            const inType = project.projectType
                .toLowerCase()
                .includes(lowerQuery);

            return inTitle || inDescription || inSkills || inType;
        });
        setProcess('success');
        return filtered;
    };

    return {
        request,
        clearError,
        process,
        setProcess,
        filterProjects,
        getByID,
    };
}
