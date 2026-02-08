'use client';
import {
    MinimalCard,
    MinimalCardDescription,
    MinimalCardImage,
    MinimalCardTitle,
} from "@/components/ui/minimal-card"
import { Badge } from "../ui/badge"
import {
    ExpandableScreenContent,
    ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen"
import ProjectInfo from "./project-info";
import { useEffect, useState } from "react"

import GetProjects from "@/hooks/getProjects"
import { ProjectsResponse } from "@/types/projects"



export default function MinimalCardDemo() {
    const { request, process, filterProjects } = GetProjects();
    const [projects, setProjects] = useState<ProjectsResponse>([]);
    const [selectedId, setSelectedID] = useState<string | null>(null);

    useEffect(() => {
        setProjects(request());
    }, [request, projects, process]);

    // const handleSearch = (query: string) => {
    //     const filtered = filterProjects(query);
    //     console.log(filtered);
    //     setProjects(filtered);
    // };
    return (
        <section
            id="projects"
            className="relative min-h-screen min-w-screen bg-black z-50"
        >
            <div className="flex flex-col gap-6 max-w-[90%] md:max-w-7xl mx-auto pt-10 py-12 px-3 lg:px-15 ">
                <div className="p-2 text-center">
                    <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"><h2 className="text-3xl font-semibold font-serif">projects</h2></div>
                    <p className="text-sm py-3">Stuff that is more or less complete. Click on each one to view more info.</p>
                </div>
                <div className="min-h-[500px] p-4 w-full flex flex-col justify-center rounded-lg space-y-4">
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {projects ? projects.map((card) => (
                            <ExpandableScreenTrigger key={card.title} className="cursor-pointer">
                                <button className="h-full w-full" onClick={() => setSelectedID(card.id)}>
                                    <MinimalCard className="relative">
                                        <MinimalCardImage src={card.thumbnailUrl} alt={card.description} />
                                        <div className="w-full absolute top-0 right-0 text-left py-1 px-3">
                                            <MinimalCardTitle className="flex justify-between">
                                                <span className="font-mono text-xs  border-1 border-black text-black px-2 py-1 h-8/12 flex justify-center items-center rounded-md backdrop-blur-md bg-transparent bg-white/40">{card.title.toUpperCase()}</span>
                                                <Badge className="rounded-sm py-[1px] border-1 border-zinc-700 bg-black text-white font-mono text-xs ">{card.date}</Badge>
                                            </MinimalCardTitle>
                                            <MinimalCardDescription>
                                            </MinimalCardDescription>
                                        </div>
                                    </MinimalCard>
                                </button>
                            </ExpandableScreenTrigger>
                        )) : null}
                    </div>
                </div>
            </div>
            <ExpandableScreenContent className="bg-black border-1 border-zinc-700 z-50 flex justify-center">
                <ProjectInfo projectId={selectedId} />
            </ExpandableScreenContent>
        </section>
    )
}
