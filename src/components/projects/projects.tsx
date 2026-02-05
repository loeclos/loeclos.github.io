'use client';

import ProjectsSkeleton from '@/components/projects/project-search-skeleton';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GetProjects from '@/hooks/getProjects';
import { ProjectsResponse, Project as ProjectProps } from '@/types/projects';
import SearchError from '@/components/projects/search-error';
import { ProjectCard } from '@/components/ui/project-card';

function Project(project: ProjectProps) {
    return <ProjectCard {...project} />;
}

export default function Projects() {
    const { request, process, filterProjects } = GetProjects();
    const [projects, setProjects] = useState<ProjectsResponse>([]);

    useEffect(() => {
        setProjects(request());
    }, [request, projects, process]);

    const handleSearch = (query: string) => {
        const filtered = filterProjects(query);
        console.log(filtered);
        setProjects(filtered);
    };

    return (
        <section
            id="projects"
            className="relative min-h-screen min-w-screen bg-black z-0"
        >

            <div className="relative h-fit min-h-screen w-full">
                <div className=" gap-24 max-w-[90%] md:max-w-7xl mx-auto pt-10">
                    <Card className="py-12 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-transparent backdrop-blur-3xl border-none">
                        <CardHeader className="text-4xl font-serif text-center">
                            projects
                        </CardHeader>
                        <div className="px-5 text-white font-plex-mono">
                            <Label
                                htmlFor="projectSearchInput"
                                className="py-2"
                            >
                                Search Projects (frameworks, libs, langs, etc.)
                            </Label>
                            <Input
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    handleSearch(target.value);
                                }}
                                id="projectSearchInput"
                                className="border-zinc-900/25 p-5 rounded-xl"
                                placeholder="E.G. Next.js"
                            />
                        </div>
                        <CardContent className="text-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-10">
                                {process === 'loading' ? (
                                    <ProjectsSkeleton />
                                ) : projects.length == 0 ? (
                                    <SearchError />
                                ) : (
                                    projects.map((project) => (
                                        <Project
                                            key={project.id}
                                            {...project}
                                        />
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
