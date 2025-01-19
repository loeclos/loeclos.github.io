const projects = [
    {
        id: 1,
        title: 'Olhar Device',
        link: 'https://olhar.media/',
        codeLink: 'https://github.com/marsianjohncarter/OlharDevice',
        description:
            'This Python application is designed to download and display videos. It provides a user interface for video playback and also a QR code generation function. The application utilizes various functionalities including location retrieval, screen brightness adjustment, and video download.',
        technologies: [
            {
                name: 'Python',
                icon: 'https://img.icons8.com/color/48/python--v1.png',
            },
            { name: 'PyQt', icon: 'https://img.icons8.com/ios/50/qt.png' },
        ],
        imageSrc: '/taxi_promo_1.jpg',
    },
    {
        id: 2,
        title: 'Portfolio website',
        link: 'https://marsianjohncarter.github.io',
        codeLink: 'https://github.com/marsianjohncarter/OlharDevice',
        description: 'Not much to explain. It is before your own eyes.',
        technologies: [
            {
                name: 'React',
                icon: 'https://img.icons8.com/external-others-amoghdesign/24/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png',
            },
            {
                name: 'Vite',
                icon: 'https://img.icons8.com/fluency/48/vite.png',
            },
            {
                name: 'Tailwind',
                icon: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            },
            {
                name: 'PNPM',
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAADI0lEQVR4nO3YIY5VWRSG0aNIMBhEJ8yBYBgACskAWuB7Fig044B6pBOStjAsXiF2W/Io9wj3fFXrS35/du5Sdy3pyObjenQ+rSnv+2l9u7zr9vN6e/S7rt3tzfrn8q7zzfpy9Luu3XxeTwEMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgeBMC11vp+s76Wd3uzPlx+qB+f1uuj33X1TuvNLwBP6/3h77py8996cnmXJEmSlG9m/pqZV/E9u7zr/O96/uPTelXeARz+fDPzdvo9jN8w97EBcNsB2AnAagPgtgOwE4DVBsBtB2AnAKsNgNsOwE4AVhsAtx2AnQCsNgBuOwA7AVhtANx2AHYCsNoAuO0A7ARgtQFw2wHYCcBqA+C2A7ATgNUGwG0HYCcAqw2A2w7ATgBWGwC3HYCdAKw2AG47ADsBWG0A3HYAdgKw2gC47QDsBGC1AXDbAdgJwGoD4LYDsBOA1QbAbQdgJwCrDYDbDsBOAFYbALcdgJ0ArDYAbjsAOwFYbQDcdgB2ArDaALjtHgrAFzPzLr6Xl3edT+vv82m9K28+rsdHmJAkSdJGzczX+D7ccdPrDd517d7ccdf7Dd517Z78fNCj6fftjg91L3/DzMyXox/1G3r680EA7huAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEY6f4DlCRJR/Q/zoV3IvK4wkkAAAAASUVORK5CYII=',
            },
            {
                name: 'Github',
                icon: 'https://img.icons8.com/fluency/48/github.png',
            },
        ],
        imageSrc: 'Portfolio Project.png',
    },
    {
        id: 3,
        title: 'Media Team Web App',
        link: 'https://gabc-media-team.web.app/',
        codeLink:
            'https://github.com/marsianjohncarter/Media-Team-Web-Firebase',
        description:
            'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
        technologies: [
            {
                name: 'React',
                icon: 'https://img.icons8.com/external-others-amoghdesign/24/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png',
            },
            {
                name: 'Vite',
                icon: 'https://img.icons8.com/fluency/48/vite.png',
            },
            {
                name: 'Tailwind',
                icon: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            },
            {
                name: 'Firebase',
                icon: 'https://img.icons8.com/color/48/firebase.png',
            },
            {
                name: 'PNPM',
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAADI0lEQVR4nO3YIY5VWRSG0aNIMBhEJ8yBYBgACskAWuB7Fig044B6pBOStjAsXiF2W/Io9wj3fFXrS35/du5Sdy3pyObjenQ+rSnv+2l9u7zr9vN6e/S7rt3tzfrn8q7zzfpy9Luu3XxeTwEMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgeBMC11vp+s76Wd3uzPlx+qB+f1uuj33X1TuvNLwBP6/3h77py8996cnmXJEmSlG9m/pqZV/E9u7zr/O96/uPTelXeARz+fDPzdvo9jN8w97EBcNsB2AnAagPgtgOwE4DVBsBtB2AnAKsNgNsOwE4AVhsAtx2AnQCsNgBuOwA7AVhtANx2AHYCsNoAuO0A7ARgtQFw2wHYCcBqA+C2A7ATgNUGwG0HYCcAqw2A2w7ATgBWGwC3HYCdAKw2AG47ADsBWG0A3HYAdgKw2gC47QDsBGC1AXDbAdgJwGoD4LYDsBOA1QbAbQdgJwCrDYDbDsBOAFYbALcdgJ0ArDYAbjsAOwFYbQDcdgB2ArDaALjtHgrAFzPzLr6Xl3edT+vv82m9K28+rsdHmJAkSdJGzczX+D7ccdPrDd517d7ccdf7Dd517Z78fNCj6fftjg91L3/DzMyXox/1G3r680EA7huAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEY6f4DlCRJR/Q/zoV3IvK4wkkAAAAASUVORK5CYII=',
            },
        ],
        imageSrc: '/GABC app.png',
    },
    {
        id: 4,
        title: 'React + Vite + Tailwind website',
        link: 'Not Available',
        codeLink: 'https://github.com/marsianjohncarter/github-react-example',
        description:
            'A simple multi page site created with React, Vite, and Tailwind.',
        technologies: [
            {
                name: 'React',
                icon: 'https://img.icons8.com/external-others-amoghdesign/24/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png',
            },
            {
                name: 'Vite',
                icon: 'https://img.icons8.com/fluency/48/vite.png',
            },
            {
                name: 'Tailwind',
                icon: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            },
        ],
        imageSrc:
            'https://github.com/marsianjohncarter/github-react-example/assets/116607327/caed8b99-c1aa-4cb6-8114-e24fc87aa37d',
    },
    {
        id: 5,
        title: 'Nutrify Website',
        link: 'https://nutrify-preview.web.app/',
        codeLink:
            'https://github.com/marsianjohncarter/Nutrify-Website',
        description:
            'A website for a nutritionist, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        technologies: [
            {
                name: 'React',
                icon: 'https://img.icons8.com/external-others-amoghdesign/24/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png',
            },
            {
                name: 'Vite',
                icon: 'https://img.icons8.com/fluency/48/vite.png',
            },
            {
                name: 'Tailwind',
                icon: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            },
            {
                name: 'Firebase',
                icon: 'https://img.icons8.com/color/48/firebase.png',
            },
            {
                name: 'PNPM',
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAADI0lEQVR4nO3YIY5VWRSG0aNIMBhEJ8yBYBgACskAWuB7Fig044B6pBOStjAsXiF2W/Io9wj3fFXrS35/du5Sdy3pyObjenQ+rSnv+2l9u7zr9vN6e/S7rt3tzfrn8q7zzfpy9Luu3XxeTwEMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgAjAzA1gCMDMDIAGwNwMgeBMC11vp+s76Wd3uzPlx+qB+f1uuj33X1TuvNLwBP6/3h77py8996cnmXJEmSlG9m/pqZV/E9u7zr/O96/uPTelXeARz+fDPzdvo9jN8w97EBcNsB2AnAagPgtgOwE4DVBsBtB2AnAKsNgNsOwE4AVhsAtx2AnQCsNgBuOwA7AVhtANx2AHYCsNoAuO0A7ARgtQFw2wHYCcBqA+C2A7ATgNUGwG0HYCcAqw2A2w7ATgBWGwC3HYCdAKw2AG47ADsBWG0A3HYAdgKw2gC47QDsBGC1AXDbAdgJwGoD4LYDsBOA1QbAbQdgJwCrDYDbDsBOAFYbALcdgJ0ArDYAbjsAOwFYbQDcdgB2ArDaALjtHgrAFzPzLr6Xl3edT+vv82m9K28+rsdHmJAkSdJGzczX+D7ccdPrDd517d7ccdf7Dd517Z78fNCj6fftjg91L3/DzMyXox/1G3r680EA7huAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEYCcBIALYCMBKAkQBsBWAkACMB2ArASABGArAVgJEAjARgKwAjARgJwFYARgIwEoCtAIwEYCQAWwEY6f4DlCRJR/Q/zoV3IvK4wkkAAAAASUVORK5CYII=',
            },
        ],
        imageSrc: '/image.png',
    },
    {
        id: 6,
        title: 'Chess Website',
        link: 'https://chess-website-completed.onrender.com/',
        codeLink:
            'https://github.com/marsianjohncarter/Chess',
        description:
            'A website for a chess player, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        technologies: [
            {
                name: 'JavaScript',
                icon: 'https://img.icons8.com/color/48/javascript.png',
            },
            {
                name: 'Socket.IO',
                icon: '/image copy 2.png',
            },
            {
                name: 'Bootstrap',
                icon: 'https://img.icons8.com/fluency/48/bootstrap.png',
            }
        ],
        imageSrc: '/image copy.png',
    }
];

const ProjectCard = ({
    id,
    title,
    link,
    codeLink,
    description,
    technologies,
    imageSrc,
}) => {
    return ( 
<>

            <div
                key={id}
                className="text-white my-5 rounded-3xl shadow-lg shadow-slate-950 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 bg-gray-800"
            >
                <div className="flex flex-col justify-between md:w-2/3 m-6">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <a href={link} className="text-blue-400 underline mb-4">
                        {link}
                    </a>
                    <p className="text-gray-300 mb-6">{description}</p>
                    <div className="flex space-x-2 mb-4">
                        {technologies.map((tech, index) => (
                            <img
                                key={index}
                                src={tech.icon}
                                alt={tech.name}
                                className="h-8"
                            />
                        ))}
                    </div>
                    <a
                        href={codeLink}
                        className="bg-[#45707a] active:bg-[#395c64] hover:bg-[#304d53] text-bla px-4 py-2 rounded-lg w-fit transition-all duration-300 ease-in-out"
                        role="button"
                    >
                        View code
                    </a>
                </div>
                <img
                    src={imageSrc}
                    alt={title}
                    className="md:w-2/4 object-cover w-full rounded-3xl aspect-[16/9] border-2 border-slate-600 transition-all duration-300 "
                />
            </div>
</>
    );
};

function ProjectSection() {
    return (
        <>
            <div className="pt-10 px-4 mx-auto max-w-screen-xl lg:py-16">
                <h1
                    id="projects"
                    className="mb-4 mt-12 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white text-center bg-clip-border bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-2xl shadow-lg hover:shadow-slate-700/50 transition-all duration-300 ease-linear py-8 px-4 mx-auto max-w-screen-xl lg:py-16"
                >
                    Projects
                </h1>

                {projects.map((element) => {
                    return (
                        <ProjectCard
                            key={element.id}
                            id={element.id}
                            title={element.title}
                            link={element.link}
                            codeLink={element.codeLink}
                            description={element.description}
                            technologies={element.technologies}
                            imageSrc={element.imageSrc}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default ProjectSection;
