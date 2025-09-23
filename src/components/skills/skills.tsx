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
    {
        name: 'Stack Overflow',
        src: '/stackoverflow/stackoverflow-original.svg',
    },
    { name: 'VS Code', src: '/vscode/vscode-original.svg' },
    { name: 'Linux', src: '/linux/linux-original.svg' },
    { name: 'npm', src: '/npm/npm-original.svg' },
    { name: 'pnpm', src: '/pnpm/pnpm-original.svg' },
    { name: 'Vite', src: '/vitejs/vitejs-original.svg' },
    {
        name: 'Tailwind CSS',
        src: '/tailwindcss/tailwindcss-original.svg',
    },
    { name: 'PyTorch', src: '/pytorch/pytorch-original.svg' },
];

const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function Skills() {
    return (
        <section
            className="w-full h-full flex flex-col justify-center items-center px-5 xl:px-96"
            id="skills"
        >
            <h1 className="text-4xl font-mono mb-8 text-white text-center">Things I've worked with</h1>
            <div className="w-full h-full flex flex-row flex-wrap gap-4 justify-center items-center">
                {skills.map((skill) => (
                    <Tooltip key={skill.name}>
                        <TooltipTrigger>
                            <div
                                className="rounded-3xl border border-zinc-700/20 p-5 bg-zinc-800/20 hover:bg-zinc-700 hover:border-zinc-600 transition-colors duration-200 backdrop-blur-3xl cursor-pointer"
                            >
                                <Image
                                    src={`${baseUrl}${skill.src}`}
                                    width={50}
                                    height={50}
                                    alt={skill.name}
                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="font-mono">
                            <p>{skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </section>
    );
}
