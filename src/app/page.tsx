import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Posts from '@/components/posts/posts';
import Skills from '@/components/skills/skills';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const navbarLinks = [
    {
        id: 'asgsfasdfasdfasdf',
        url: '#projects',
        text: 'Projects',
    },
    {
        id: 'asgsfaserterfddfasdf',
        url: '#skills',
        text: 'Skills',
    },
    {
        id: 'asgsfasdfsfddfertretdf',
        url: '#posts',
        text: 'Blog',
    },
];

export default function Home() {
    return (
        <div>
            <Navbar links={navbarLinks} />
            <Hero />
            <Projects />
            <Posts />
            <Skills />
            <div className="flex justify-center items-center h-full w-full">
                <Footer />
            </div>
        </div>
    );
}
