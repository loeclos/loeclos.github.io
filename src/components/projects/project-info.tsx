import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { ArrowUpRightIcon } from "lucide-react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import { Badge } from "../ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area"
import GetProjects from "@/hooks/getProjects";
import { useEffect, useState } from "react";
import { Project } from "@/types/projects";
import Image from 'next/image'
import Link from "next/link";


export default function ProjectInfo({ projectId }: { projectId: string | null }) {
    const { getByID } = GetProjects();
    const [project, setProject] = useState<Project | null>();

    useEffect(() => {
        if (projectId) {
            const projectData = getByID(projectId)
            if (projectData) {
                setProject(projectData);
            }
        }
    }, [getByID, projectId]);

    return (
        <div className="flex items-center justify-center w-full h-full">
            {project ? (<View project={project} />) : (<div className="w-full h-full justify-center items-center"><h1 className="text-black text-3xl font-serif">Project not found.</h1></div>)}
        </div>
    )

}

const View = ({ project }: { project: Project }) => {
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="w-full h-full">
            <ScrollArea className="w-full h-full pt-12 flex flex-col items-center">
                <div className="w-full flex flex-col mx-auto max-w-9xl md:max-w-7xl lg:max-w-xl justify-left items-start">

                    <div className=" px-5">
                        <h1 className="text-2xl font-serif">{project['title']}</h1>
                    </div>
                    <div className="px-5 py-4">
                        <p className="text-md font-sans">{project['description']}</p>
                    </div>

                    <div className="px-5 flex flex-row gap-2">
                        {project['urls'].map(url => (
                            <Link href={url.url} key={url.url}>
                                <CraftButton className="rounded-none text-xs font-mono">
                                    <CraftButtonLabel>{url.title.toUpperCase()}</CraftButtonLabel>
                                    <CraftButtonIcon>
                                        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                                    </CraftButtonIcon>
                                </CraftButton>
                            </Link>
                        ))}
                    </div>

                </div>

                <div className="w-full py-5">
                    <Carousel setApi={setApi} plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}>
                        <CarouselContent className="mx-0 rounded-md">
                            {project['images'].map(image => (
                                <CarouselItem className="rounded-md px-1 flex justify-center" key={image['alt']}>
                                    <Image
                                        width={600}
                                        height={400}
                                        src={image['src']}
                                        alt={image['alt']}
                                        className="rounded-md"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="text-muted-foreground py-2 text-center text-sm">
                        Slide {current} of {count}
                    </div>
                </div>

                <hr className="block md:hidden" />
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="px-3 pb-4">
                        <h3 className="py-2 font-mono text-sm">skills used/learned:</h3>
                        <div className="flex flex-wrap gap-1">
                            {project['skills'].map(skill => (
                                <Badge className="rounded-md" key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="block md:hidden" />

            </ScrollArea>
        </div>
    )
}
