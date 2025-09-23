'use client';

import EmblaCarousel from '@/components/embla-carousel/embla-carousel';
import ProjectImageCarousel from './test-carousel';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import getProjects from '@/hooks/getProjects';
import { useEffect, useState } from 'react';

import { Project as ProjectType, ProjectsResponse } from '@/types/projects';
import { BlurredButton } from '@/components/ui/blurred-button';
import Link from 'next/link';
import { Gauge } from '@/components/ui/gauge';
import { ArrowUpRight } from 'lucide-react';


import {
    Activity,
    Component,
    HomeIcon,
    Mail,
    Package,
    ScrollText,
    SunMoon,
    ArrowBigRightDash,
    ArrowBigLeftDash,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
    {
        title: 'Home',
        icon: <HomeIcon className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Products',
        icon: <Package className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Components',
        icon: <Component className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Activity',
        icon: <Activity className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Change Log',
        icon: <ScrollText className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Email',
        icon: <Mail className="h-full w-full text-neutral-300" />,
        href: '#',
    },
    {
        title: 'Theme',
        icon: <SunMoon className="h-full w-full text-neutral-300" />,
        href: '#',
    },
];

export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    const projectId = params.project;
    const [project, setProject] = useState<ProjectType | undefined>(undefined);
    const { request, process, getByID } = getProjects();

    useEffect(() => {
        console.log('Fetching project with ID:', projectId);
        let p = getByID(projectId);
        setProject(getByID(projectId));
        console.log(p);
    }, []);

    return (
        <div className="flex flex-col gap-6 py-5 px-5 min-h-screen h-full w-full  bg-black">
            {/* <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-4"> */}
            {/* Project Alpha Card */}
            <Card className="w-full min-h-screen h-full bg-transparent backdrop-blur-3xl text-white font-sans border border-zinc-950 rounded-5xl px-5 py-5">
                <CardHeader>
                    {/* <EmblaCarousel slides={project?.images} /> */}
                                                            <ProjectImageCarousel
                                            slides={project?.images ?? []}
                                            options={{
                                                loop: true,
                                                align: 'start',
                                                dragFree: false,
                                                // prevBtnDisabled: false,
                                                // nextBtnDisabled: false,
                                            }}
                                        />
                    <div className="flex flex-col justify-center items-center md:flex-row gap-2 w-full h-full">
                        <Link
                            href={`${project?.projectUrl}`}
                            className="flex flex-row gap-2 w-full justify-center items-center lg:max-w-1/4 px-4 py-4 rounded-2xl backdrop-blur-md border border-zinc-600 text-white bg-zinc-700/10 hover:bg-zinc-600/20 active:bg-zinc-500/20 transition-colors duration-300 cursor-pointer"
                        >
                            Visit <ArrowUpRight />
                        </Link>
                        <Link
                            href={`${project?.codeURL}`}
                            className="flex flex-row gap-2 w-full justify-center items-center lg:max-w-1/4 px-4 py-4 rounded-2xl backdrop-blur-md border border-zinc-600 text-white bg-zinc-700/10 hover:bg-zinc-600/20 active:bg-zinc-500/20 transition-colors duration-300 cursor-pointer"
                        >
                            Code <ArrowUpRight />
                        </Link>
                    </div>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <div className="w-full md:w-1/2 h-full">
                        <h1 className="text-4xl mb-5">{project?.title}</h1>
                        <p>{project?.description}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col md:flex-row gap-2 w-full h-full"></CardFooter>
            </Card>
        </div>
    );
}
