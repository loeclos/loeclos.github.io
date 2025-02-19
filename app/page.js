import TopSection from '@/homepage/top-section/top-section.jsx';
import SkillsSection from '@/homepage/skills-section/skills-section';
import ProjectsSection from '@/homepage/projects-section/projects-section';
import HobbiesSection from '@/homepage/hobbies-section/hobbies-section';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <TopSection />
            <SkillsSection />
            <ProjectsSection />
            <HobbiesSection />
        </>
    );
}
