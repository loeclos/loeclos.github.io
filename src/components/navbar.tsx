import Link from "next/link";

interface Link {
  url: string;
  title: string;
}

const links: Link[] = [

  {
    url: "/",
    title: "home",
  }

]

export default function Navbar() {
  return (
    <div className="fixed z-50 flex flex-row w-full bg-black items-center justify-center">
      {links.map(link => (
        <Link key={link.title} href={link.url} className="px-1 font-mono text-white hover:bg-[#ffe8ba] hover:text-black active:bg-white  transition-colors duration-200">
          {link.title}
        </Link>
      ))}
    </div>
  );
}
