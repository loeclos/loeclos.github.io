import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/about/about';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const navbarLinks = [
    {
        id: 'asgsasdasddfasdfasdf',
        url: '/',
        text: 'Home',
    },
    {
        id: 'asgsfasdfasdfasdf',
        url: '#projects',
        text: 'Projects',
    },
    {
        id: 'asgsfaserterfddfasdf',
        url: '#about',
        text: 'About',
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
            <div className="min-h-screen w-full bg-[#c5a98e] relative">
                <Hero />
            </div>
            <Projects />
            <Skills />
            <div className="flex justify-center items-center h-full w-full">
                <Footer />
            </div>
        </div>
    );
}
