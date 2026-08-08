'use client';

import { useEffect, useState } from 'react';
import ProjectInfo from "@/components/projects/project-info";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import { Badge } from "@/components/ui/badge"
import {
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import GetProjects from '@/hooks/getProjects';
import { ProjectsResponse } from '@/types/projects';

export default function ProjectsCarousel() {
  const { request } = GetProjects();
  const [projects, setProjects] = useState<ProjectsResponse>([]);
  const [selectedId, setSelectedID] = useState<string | null>(null);

  useEffect(() => {
    setProjects(request());
  }, [request]);

  return (
    <>
      <Carousel
        className="w-full h-full lg:min-h-60"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {projects.map((card, index) => (
            <CarouselItem className="w-full" key={index}>
              <ExpandableScreenTrigger key={card.title} className="cursor-pointer w-full">
                <button className="h-full w-full" onClick={() => setSelectedID(card.id)}>
                  <MinimalCard className=" w-full h-full relative">
                    <MinimalCardImage src={card.thumbnailUrl} alt={card.description} priority={index === 0} />
                    <div className="w-full h-full absolute top-0 right-0 text-left py-1 px-3">
                      <MinimalCardTitle className="flex justify-between">
                        <span className="font-mono text-xs  border-1 border-black text-black px-2 py-1 h-8/12 flex justify-center items-center rounded-lg backdrop-blur-md bg-transparent bg-white/40">{card.title.toUpperCase()}</span>
                        <Badge className="rounded-sm py-[1px] border-1 border-zinc-700 bg-black text-white font-mono text-xs ">{card.date}</Badge>
                      </MinimalCardTitle>
                      <MinimalCardDescription>
                      </MinimalCardDescription>
                    </div>
                  </MinimalCard>
                </button>
              </ExpandableScreenTrigger>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/60 text-white border-zinc-700" />
        <CarouselNext className="right-2 bg-black/60 text-white border-zinc-700" />
      </Carousel>
      <ExpandableScreenContent className="bg-black border-1 border-zinc-700 z-50 flex justify-center">
        <ProjectInfo projectId={selectedId} />
      </ExpandableScreenContent>
    </>
  );
}
