import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area"
import GetProjects from "@/hooks/getProjects";
import { useEffect, useState } from "react";
import { Project } from "@/types/projects";
import Image from 'next/image'


export default function ProjectInfo({ projectId }: { projectId: string | null }) {
    const { getByID, getAll } = GetProjects();
    const [project, setProject] = useState<Project | null>();

    useEffect(() => {
        if (projectId) {
            const projectData = getByID(projectId)
            if (projectData) {
                setProject(projectData);
            }

        }
    }, []);


    return (
        <div className="flex items-center justify-center w-full h-full">
            {project ? (<View project={project} />) : (<div className="w-full h-full justify-center items-center"><h1 className="text-black text-3xl font-serif">Project not found.</h1></div>)}
        </div>
    )

}


const View = ({ project }: { project: Project }) => {
    return (
        <ScrollArea className="w-full h-full pt-12">
            <div className="px-5">
                <h1 className="text-xl font-serif">{project['title']}</h1>
            </div>
            <div className="px-5 py-4">
                <p className="text-md font-sans">{project['description']}</p>
            </div>
            <Carousel>
                <CarouselContent>
                    {project['images'].map(image => (

                        <CarouselItem className="rounded-md" key={image['alt']}>
                            <Image width={600} height={400} src={image['src']} alt={image['alt']} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </ScrollArea>

    )
}
