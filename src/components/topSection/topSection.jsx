import { Link } from "react-router-dom";
import ExplodingChicken from '../ExplodingChicken/ExplodingChicken';

function scrollToSkills() {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        window.scrollTo({
            top: skillsSection.offsetTop - 20,
            behavior: "smooth",
        });
    }
}

const TopSection = () => {
    return (
        <section className="pt-16 pb-72 sm:pb-64 md:pb-0 lg:pb-0 xl:pb-0 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-800 shadow-lg hover:shadow-slate-700/50 transition-all ease-in-out duration-300 rounded-3xl p-8 md:p-12 mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
                            Hello!
                        </h1>
                        <p className="text-lg font-normal text-gray-400 mb-6">
                            My name is john and I'm a Frontend/Flask Backend/Machine
                            developer
                        </p>

                        <button
                            onClick={scrollToSkills}
                            className="inline-flex justify-center items-center transition-all py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-[#45707a] active:bg-[#395c64] hover:bg-[#304d53] focus:ring-4  focus:ring-[#45707a]"
                        >
                            Jump to my skills
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                    <img
                        src="/profile.jpeg"
                        alt="John profile"
                        className="hidden md:block w-44 h-44 rounded-3xl"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-8 h-96">
                    <div className="bg-gray-800 shadow-lg hover:shadow-slate-700/50 transition-all ease-in-out duration-300 rounded-3xl p-8 md:p-12">
                        <a
                            href="#"
                            className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2"
                        >
                            <svg
                                className="w-2.5 h-2.5 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                                />
                            </svg>
                            Code
                        </a>
                        <h2 className="text-white text-3xl font-extrabold mb-2">
                            Featured Works
                        </h2>
                        <p className="text-lg font-normal text-gray-400 mb-4">
                            Explore the code, learn about the technologies used,
                            and understand the thought process behind my design
                            decisions.
                        </p>
                        <Link
                            to="/projects"
                            className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Projects
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                        <div className="h-px bg-gray-700 my-4"></div>
                        <div className="px-4">
                        <p className="text-sm text-pretty font-normal text-gray-400 mb-4">
                            By the way, I'm a big fan of "Exploding Chicken", so I've decided to add it to my portfolio.
                        </p>
                        <ExplodingChicken />
                        </div>
                    </div>
                    <div className="bg-gray-800 shadow-lg hover:shadow-slate-700/50 transition-all ease-in-out duration-300 rounded-3xl p-8 md:p-12">
                        <Link
                            to="https://github.com/marsianjohncarter"
                            className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-white mb-2"
                        >
                            <svg
                                className="w-4 h-4 me-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                            Skills
                        </Link>

                        <h2 className="text-white text-3xl font-extrabold mb-2">
                            Github Profile
                        </h2>
                        <p className="text-lg font-normal text-gray-400 mb-4">
                            Discover the technical foundation that drives my
                            work. I possess a strong command of programming
                            languages, frameworks, and tools.
                        </p>
                        <Link
                            to="https://github.com/marsianjohncarter"
                            className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;
