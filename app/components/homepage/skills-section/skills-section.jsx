import { HoverEffect } from '@/components/homepage/skills-section/hover-effect';
import { Card } from '@/ui/card';


const skills = [
    {
        title: 'Languages',
        items: [
            {
                name: 'Javascript',
                description: "I know what I'm doing (kind of)",
                percentage: '86',
                iconName: 'javascript',
            },
            {
                name: 'Python',
                description: 'slither_slither_slither.',
                percentage: '87',
                iconName: 'python',
            },
            {
                name: 'CSS',
                description: 'CSS is easy!',
                percentage: '95',
                iconName: 'css',
            },
            {
                name: 'HTML',
                description: 'I have created a couple websites.',
                percentage: '100',
                iconName: 'html',
            },
            {
                name: 'SASS',
                description: 'Basically CSS.',
                percentage: '70',
                iconName: 'sass',
            },
            {
                name: 'Php',
                description: 'Had a couple glances at it.',
                percentage: '5',
                iconName: 'php',
            },
        ],
    },
    {
        title: 'Tools',
        items: [
            {
                name: 'Git',
                description: 'You remember that repo error? Yeah, that was me.',
                percentage: '90',
                iconName: 'git',
            },
            {
                name: 'Github',
                description: 'GUI version of Git.',
                percentage: '99',
                iconName: 'github',
            },
            {
                name: 'Vite',
                description: 'All you have to do is run "npm run dev" 😁',
                percentage: '100',
                iconName: 'vite',
            },
            {
                name: 'Firebase',
                description: 'Google database.',
                percentage: '90',
                iconName: 'firebase',
            },
            {
                name: 'Render',
                description: 'Easy GUI, Easy to learn.',    
                percentage: '95',
                iconName: 'vercel',
            },
            {
                name: 'MongoDB',
                description: "I'd rather not comment.",
                percentage: '20',
                iconName: 'mongodb',
            },
        ],
    },
    {
        title: 'Libraries',
        items: [
            {
                name: 'React',
                description: '🤯 <em>explosion</em>',
                percentage: '98',
                iconName: 'react',
            },  
            {
                name: 'Bootstrap',
                description: 'A precompiled CSS class library',
                percentage: '100',
                iconName: 'bootstrap',
            },
            {
                name: 'Tailwind',
                description: 'A more powerful version of bootstrap.',
                percentage: '100',
                iconName: 'tailwind',
            },
            {
                name: 'Flask',
                description:
                    'Remember I told you I could create a good backend with Python?',
                percentage: '99',
                iconName: 'flask',
            },
            {
                name: 'Numpy',
                description: 'Numbers, numbers, and numbers.',
                percentage: '97',
                iconName: 'python',
            },
            {
                name: 'Pandas',
                description: 'Easy Python library for CSVs.',
                percentage: '89',
                iconName: 'python',
            },
        ],
    },
    {
        title: 'Other',
        items: [
            {
                name: 'Machine Learning',
                description:
                    'When AI takes over the world, you know who to blame.',
                percentage: '98',
                iconName: 'ai',
            },
            {
                name: 'Deep Learning',
                description: 'Same as before.',
                percentage: '98',
                iconName: 'ai',
            },
            {
                name: 'Frontend (React + Tailwind)',
                description: 'Combine two previous skills and you get a new one!',
                percentage: '95',
                iconName: 'react',
            },
            {
                name: 'Backend (Python + Flask)',
                description: 'You know, "double, double, toil and trouble"',
                percentage: '95',
                iconName: 'flask',
            },
            {
                name: 'Linux',
                description: 'Terminal, terminal, terminal.',
                percentage: '97',
                iconName: 'linux',
            },
            {
                name: 'Windows',
                description:
                    "I broke it a couple times and that's how I found Linux.",
                percentage: '96',
                iconName: 'windows',
            },
            {
                name: 'Vscode',
                description: 'Powerful tool. Would like to say something else, but nothing comes to mind.',
                percentage: '98',
                iconName: 'vscode',
            },
        ],
    },
];



export default function SkillsSection() {
    return (
      <div id="skills" className='max-w-[90%] md:max-w-5xl mx-auto px-4'>
        <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
            <h1 className="text-5xl font-bold my-10">Skills</h1>
            <p className="mb-10 italic opacity-55 text-sm">
                Things I've learned throughout the years.
            </p>
            {skills.map((skill) => (
                <Card
                    key={skill.title}
                    className={
                        'backdrop-blur-2xl my-15 border border-zinc-200 dark:border-zinc-700'
                    }
                >
                    <h1 className="text-2xl font-bold">{skill.title}</h1>
                    <HoverEffect items={skill.items} />
                </Card>
            ))}
        </div>
        </div>
    );
}
