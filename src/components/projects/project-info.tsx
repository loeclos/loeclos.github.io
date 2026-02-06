import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import GetProjects from "@/hooks/getProjects";
import { useEffect, useState } from "react";
import { Project } from "@/types/projects";


export default function ProjectInfo(projectId: (string | null)) {
    const { getByID } = GetProjects();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        if (projectId) {
            const project = getByID(projectId)
            if (project) {
                setProject(project);
            }
        }
    });


    return (
        <div className="flex justify-center w-full h-full">
            {project ? (<div>


            </div>) : (<div className="w-full h-full justify-center items-center"><h1 className="text-black text-3xl font-serif">Project not found.</h1></div>)}
        </div>
    )

}
