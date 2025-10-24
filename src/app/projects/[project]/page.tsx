import ProjectImageCarousel from './project-image-carousel';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Project } from '@/types/projects';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { getAllProjects, getProjectByID } from '@/lib/projects';

export async function generateStaticParams() {
    const projects = await getAllProjects();

    return projects.map((p: Project) => ({
        project: p.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    const project = await getProjectByID(params.project);

    if (!project) {
        return <div className="text-white p-10">Project not found</div>;
    }

    return (
        <div className="flex flex-col gap-6 py-5 px-5 min-h-screen h-full w-full bg-black">
            <Card className="w-full min-h-screen h-full bg-transparent backdrop-blur-3xl text-white font-sans border border-zinc-950 rounded-5xl px-5 py-5">
                <CardHeader>
                    <a href={`/#projects`}>
                    <div className='w-fit-content h-12 flex gap-2 justify-start items-center'>
                        <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center cursor-pointer hover:shadow-red-200 shadow-md transition-all duration-300 hover:w-11 hover:h-11 active:w-9 active:h-9">
                            <ArrowLeft className="text-black" /> 
                        </div>
                        <span>Go back</span>
                        </div>
                    </a>
                    <ProjectImageCarousel
                        slides={project.images ?? []}
                        options={{
                            loop: true,
                            align: 'start',
                            dragFree: false,
                        }}
                    />

                    <div className="flex flex-col justify-center items-center md:flex-row gap-2 w-full h-full mt-4">
                        <Link
                            href={project.projectUrl ?? '#'}
                            className="flex flex-row gap-2 w-full justify-center items-center lg:max-w-1/4 px-4 py-4 rounded-2xl backdrop-blur-md border border-zinc-600 text-white bg-zinc-700/10 hover:bg-zinc-600/20 active:bg-zinc-500/20 transition-colors duration-300 cursor-pointer"
                        >
                            Visit <ArrowUpRight />
                        </Link>
                        <Link
                            href={project.codeURL ?? '#'}
                            className="flex flex-row gap-2 w-full justify-center items-center lg:max-w-1/4 px-4 py-4 rounded-2xl backdrop-blur-md border border-zinc-600 text-white bg-zinc-700/10 hover:bg-zinc-600/20 active:bg-zinc-500/20 transition-colors duration-300 cursor-pointer"
                        >
                            Code <ArrowUpRight />
                        </Link>
                    </div>
                </CardHeader>

                <CardContent className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <div className="w-full md:w-1/2 h-full">
                        <h1 className="text-4xl mb-5">{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col md:flex-row gap-2 w-full h-full" />
            </Card>
        </div>
    );
}
