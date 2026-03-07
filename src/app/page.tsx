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

            <Navbar links={navbarLinks} />
            <div className="min-h-screen w-full bg-black relative">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
                        backgroundSize: "60px 60px",
                    }}
                />
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
