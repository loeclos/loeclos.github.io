import Hero from "@/components/hero";
import Link from 'next/link';
import ProjectsCarousel from '@/components/projects/projects-carousel';
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div
      className="relative min-h-full w-full"
    >
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
