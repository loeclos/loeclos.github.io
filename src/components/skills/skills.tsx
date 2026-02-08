import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
    { name: 'HTML5', src: '/html5/html5-original.svg' },
    { name: 'CSS3', src: '/css3/css3-original.svg' },
    { name: 'JavaScript', src: '/javascript/javascript-original.svg' },
    { name: 'TypeScript', src: '/typescript/typescript-original.svg' },
    { name: 'Python', src: '/python/python-original.svg' },
    { name: 'Bootstrap', src: '/bootstrap/bootstrap-original.svg' },
    { name: 'jQuery', src: '/jquery/jquery-original.svg' },
    { name: 'Babel', src: '/babel/babel-original.svg' },
    { name: 'React', src: '/react/react-original.svg' },
    { name: 'Next.js', src: '/nextjs/nextjs-original.svg' },
    { name: 'Webpack', src: '/webpack/webpack-original.svg' },
    { name: 'Flask', src: '/flask/flask-original.svg' },
    { name: 'Scikit-learn', src: '/scikitlearn/scikitlearn-original.svg' },
    { name: 'Git', src: '/git/git-original.svg' },
    { name: 'Postman', src: '/postman/postman-original.svg' },
    { name: 'CodePen', src: '/codepen/codepen-original.svg' },
    { name: 'Replit', src: '/replit/replit-original.svg' },
    { name: 'GitHub', src: '/github/github-original.svg' },
    { name: 'Stack Overflow', src: '/stackoverflow/stackoverflow-original.svg' },
    { name: 'VS Code', src: '/vscode/vscode-original.svg' },
    { name: 'Linux', src: '/linux/linux-original.svg' },
    { name: 'npm', src: '/npm/npm-original.svg' },
    { name: 'pnpm', src: '/pnpm/pnpm-original.svg' },
    { name: 'Vite', src: '/vitejs/vitejs-original.svg' },
    { name: 'Tailwind CSS', src: '/tailwindcss/tailwindcss-original.svg' },
];

const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full flex flex-col items-center justify-center py-12"
        >
            <div className="flex flex-col gap-8 max-w-7xl w-full px-4">
                {/* Header */}
                <div className="text-center">
                    <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                        <h2 className="text-3xl font-semibold font-serif">skillset</h2>
                    </div>
                    <p className="text-sm py-2 text-muted-foreground">
                        The tools in my toolbox.
                    </p>
                </div>

                {/* Skills Grid */}
                <div
                    className="
            w-full
            flex flex-wrap justify-center
            gap-2 sm:gap-4
            p-4 sm:p-6
            rounded-3xl
            bg-gradient-to-br from-zinc-800 to-zinc-900
            border border-white/5
          "
                >
                    {skills.map((skill) => (
                        <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                                <div
                                    className="
                    group
                    p-4
                    rounded-xl
                    bg-zinc-800/60
                    backdrop-blur
                    border border-white/5
                    cursor-pointer
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:bg-zinc-700/80
                    hover:shadow-lg hover:shadow-black/40
                  "
                                >
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <Image
                                            src={`${baseUrl}${skill.src}`}
                                            width={40}
                                            height={40}
                                            alt={skill.name}
                                            className="
                        object-contain
                        transition-all duration-300
                        grayscale opacity-70
                        group-hover:grayscale-0
                        group-hover:opacity-100
                      "
                                        />
                                    </div>
                                </div>
                            </TooltipTrigger>

                            <TooltipContent
                                className="
                "
                            >
                                {skill.name}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </section>
    );
}
