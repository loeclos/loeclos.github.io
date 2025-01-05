import ModalWindow from "../ModalWindow/ModalWindow";

const skillsDict = {
    Languages: [
        {
            name: 'Javascript',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/fluency/48/javascript.png',
        },
        {
            name: 'Python',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/color/48/python--v1.png',
        },
        {
            name: 'CSS',
            level: 'Proficient',
            percentage: '95',
            link: 'https://img.icons8.com/color/48/css3.png',
        },
        {
            name: 'HTML',
            level: 'Advanced',
            percentage: '100',
            link: 'https://img.icons8.com/color/48/html-5--v1.png',
        },
        {
            name: 'SASS',
            level: 'Familiar',
            percentage: '70',
            link: 'https://img.icons8.com/color/48/sass-avatar.png',
        },
        {
            name: 'Php',
            level: 'Not worth noticing',
            percentage: '5',
            link: 'https://img.icons8.com/fluency/48/php.png',
        },
    ],

    Tools: [
        {
            name: 'Git',
            level: 'Advanced',
            percentage: '99',
            link: 'https://img.icons8.com/color/48/git.png',
        },
        {
            name: 'Github',
            level: 'Advanced',
            percentage: '99',
            link: 'https://img.icons8.com/fluency/48/github.png',
        },
        {
            name: 'Vite',
            level: 'Advanced',
            percentage: '100',
            link: 'https://img.icons8.com/fluency/48/vite.png',
        },
        {
            name: 'Firebase',
            level: 'Proficient',
            percentage: '90',
            link: 'https://img.icons8.com/color/48/firebase.png',
        },
        {
            name: 'Render',
            level: 'Proficient',
            percentage: '95',
            link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uBXapYnVomXOvJ8bFROhPgAAAA%26pid%3DApi&f=1&ipt=5707ea7d4e88b1cf1d5e14384486e1c3794164708b229f18c46c39bf6d6d1c90&ipo=images',
        },
        {
            name: 'MongoDB',
            level: 'Weak',
            percentage: '20',
            link: 'https://img.icons8.com/color/48/mongodb.png',
        },
    ],

    Libraries: [
        {
            name: 'React',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/color/48/react-native.png',
        },
        {
            name: 'Tailwind',
            level: 'Advanced',
            percentage: '100',
            link: 'https://img.icons8.com/fluency/48/tailwind_css.png',
        },
        {
            name: 'Bootstrap',
            level: 'Advanced',
            percentage: '100',
            link: 'https://img.icons8.com/color/48/bootstrap.png',
        },
        {
            name: 'Flask',
            level: 'Advanced',
            percentage: '99',
            link: 'https://img.icons8.com/fluency/48/flask.png',
        },
        {
            name: 'Numpy',
            level: 'Advanced',
            percentage: '97',
            link: 'https://img.icons8.com/color/48/numpy.png',
        },
        {
            name: 'Pandas',
            level: 'Advanced',
            percentage: '99',
            link: 'https://img.icons8.com/color/48/pandas.png',
        },
    ],

    Other: [
        {
            name: 'Machine Learning',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/pulsar-color/48/machine-learning.png',
        },
        {
            name: 'Deep Learning',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-deep-learning-data-analytics-flaticons-flat-flat-icons.png',
        },
        {
            name: 'Frontend (react + tailwind)',
            level: 'proficient',
            percentage: '95',
            link: 'https://img.icons8.com/nolan/64/code--v2.png',
        },
        {
            name: 'Backend (python + flask)',
            level: 'proficient',
            percentage: '95',
            link: 'https://img.icons8.com/nolan/64/code--v1.png',
        },
        {
            name: 'Linux',
            level: 'Advanced',
            percentage: '97',
            link: 'https://img.icons8.com/color/48/linux.png',
        },
        {
            name: 'Windows',
            level: 'Advanced',
            percentage: '96',
            link: 'https://img.icons8.com/color/48/windows.png',
        },
        {
            name: 'Vscode',
            level: 'Advanced',
            percentage: '98',
            link: 'https://img.icons8.com/color/48/visual-studio-code-2019.png',
        },
    ],
};

const skillProjectsDict = {
    Python: [
        {
            link: 'https://github.com/marsianjohncarter/OlharDevice',
            description:
                'A application made to work with the Orange Pi Zero 2W to show all ads on certain API endpoint. This was created using Python and PYQT.',
            img: '/taxi_promo_1.jpg',
        },
    ],
    React: [
        {
            title: 'Media Team Web App',
            link: 'https://gabc-media-team.web.app/',
            description:
                'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
            img: '/GABC app.png',
        },
        {
            title: 'React + Vite + Tailwind website',
            link: 'https://github.com/marsianjohncarter/github-react-example',
            description:
                'A simple multi page site created with React, Vite, and Tailwind.',
            img: '/GABC app.png',
        },
        {
            title: 'Portfolio website',
            link: 'https://marsianjohncarter.github.io/',
            description:
                'Not much to explain. It is before your own eyes.',
            img: '/GABC app.png',
        },
    ],
    Tailwind: [
        {
            title: 'React + Vite + Tailwind website',
            link: 'https://github.com/marsianjohncarter/github-react-example',
            description:
                'A simple multi page site created with React, Vite, and Tailwind.',
            img: '/GABC app.png',
        },
        {
            title: 'Portfolio website',
            link: 'https://marsianjohncarter.github.io/',
            description:
                'Not much to explain. It is before your own eyes.',
            img: '/GABC app.png',
        },
        {
            title: 'Nutrify Website',
            link: 'https://nutrify-preview.web.app/',
            description:
                'A website for a nutritionist, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
            img: '/GABC app.png',
        },
    ],
    Javascript: [
        {
            title: 'React + Vite + Tailwind website',
            link: 'https://github.com/marsianjohncarter/github-react-example',
            description:
                'A simple multi page site created with React, Vite, and Tailwind.',
            img: '/GABC app.png',
        },
        {
            title: 'Portfolio website',
            link: 'https://marsianjohncarter.github.io/',
            description:
                'Not much to explain. It is before your own eyes.',
            img: '/GABC app.png',
        },
        {
            title: 'Media Team Web App',
            link: 'https://gabc-media-team.web.app/',
            description:
                'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
            img: '/GABC app.png',
        },
    ],
    Bootstrap: [
        {
            title: 'Media Team Web App',
            link: 'https://gabc-media-team.web.app/',
            description:
                'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
            img: '/GABC app.png',
        },
    ],


};

const Skills = () => {
    return (
        <>
            <div className="px-4 mx-auto max-w-screen-xl pt-10 sm:pt-0">
                <h1
                    id="skills"
                    className="mt-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white text-center bg-clip-border p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-lg shadow-lg hover:shadow-slate-700/50 transition-all duration-300 ease-linear"
                >
                    Skills and tools
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <View skills={skillsDict} />
            </div>
        </>
    );
};

const View = ({ skills }) => {

    // openModal = (e) => {
    //     e.preventDefault();
    //     setModalOpen(true);
    // };

    return (
        <>
            {Object.keys(skills).map((key, index) => (
                <div
                    key={index}
                    className="w-full sm:text-center max-w-md p-4 rounded-3xl sm:p-8 bg-gray-800 shadow hover:shadow-slate-700 transition-all ease-in-out duration-300 sm:mx-auto"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-white">
                            {key}
                        </h5>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-700">
                            {skills[key].map((skill, index) => (
                                <li key={index} className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={skill.link}
                                                alt="Thomas image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 m-2">
                                            <p className="text-sm font-medium truncate text-white">
                                                {skill.name} - {skill.level}
                                            </p>
                                            <div className="w-full  rounded-full h-2.5 mb-4 mt-4 bg-gray-700">
                                                <div
                                                    className={
                                                        'h-2.5 rounded-full bg-green-500 ' +
                                                        (+skill.percentage > 85
                                                            ? 'bg-green-600 '
                                                            : +skill.percentage >
                                                                  60 &&
                                                              +skill.percentage <
                                                                  70
                                                            ? 'bg-yellow-200 '
                                                            : +skill.percentage >
                                                              50
                                                            ? 'bg-yellow-500 '
                                                            : 'bg-red-500 ')
                                                    }
                                                    style={{
                                                        width: `${skill.percentage}%`,
                                                    }}
                                                />
                                            </div>
                                            <p className="text-sm truncate text-gray-400">
                                                {skill.level}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-white">
                                            {skill.percentage}%
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;
