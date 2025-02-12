import TopSection from '@/components/homepage/top-section/top-section.jsx';
import SkillsSection from '@/components/homepage/skills-section/skills-section';
import ProjectsSection from '@/components/homepage/projects-section/projects-section';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <TopSection />
            <SkillsSection />
            <ProjectsSection />
        </>
    );
}
