import Image from 'next/image';

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://avatars.githubusercontent.com/u/116607327?v=4",
    alt: "profolio",
    title: "Gleb Zhukov",
    url: "https://github.com/loeclos",
  },
  tagline = "Agile Developer",
  menuItems = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/#home" },
        { text: "Projects", url: "/#projects" },
        { text: "Blog", url: "/#posts" },
        { text: "Skills", url: "/#skills" },
      ],
    },
    {
      title: "Find Me",
      links: [
        { text: "Github", url: "https://github.com/loeclos" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/loeclos/" },
        { text: "Suno", url: "https://suno.com/@wend" },
        { text: "Ask Ubuntu", url: "https://askubuntu.com/users/1749634/gleb" },
        { text: "Stack Overflow", url: "https://stackoverflow.com/users/22437734/gleb" },

      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { text: "Help", url: "#" },
    //     { text: "Sales", url: "#" },
    //     { text: "Advertise", url: "#" },
    //   ],
    // },
    // {
    //   title: "Social",
    //   links: [
    //     { text: "Twitter", url: "#" },
    //     { text: "Instagram", url: "#" },
    //     { text: "LinkedIn", url: "#" },
    //   ],
    // },
  ],
  copyright = "© 2025-2100 Copyright. All rights reserved.",
  bottomLinks = [
    { text: "Some link here", url: "#" },
    { text: "and here", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className="py-32 font-sans">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={30}
                    height={30}
                    title={logo.title}
                    className='h-full w-full rounded-xl'
                  />
                </a>
                <p className="text-xl font-semibold text-red-200">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold text-red-400/40">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-red-200">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-red-500/30 transition-colors duration-200"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-zinc-800/70 pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary transition-colors duration-200">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
