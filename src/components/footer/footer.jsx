const Footer = () => {
    return (
        <footer className="rounded-lg shadow m-4 bg-gray-800">
            <div className="w-full mx-auto mt-4 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-gray-400">
                    © 2024{" "}
                    <a href="https://github.com/marsianjohncarter" className="link transition-all ease-in-out duration-300">
                        marsianjohncarter
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/marsianjohncarter" className="me-4 md:me-6 link transition-all ease-in-out duration-300">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="link transition-all ease-in-out duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
