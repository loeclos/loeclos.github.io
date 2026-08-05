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
    const { request } = GetProjects();
    const [projects, setProjects] = useState<ProjectsResponse>([]);
    const [selectedId, setSelectedID] = useState<string | null>(null);

    useEffect(() => {
        setProjects(request());
    }, [request]);

    return (
        <section
            id="projects"
            className="relative min-h-screen min-w-screen bg-black z-50"
        >
        </section>
    )
}
