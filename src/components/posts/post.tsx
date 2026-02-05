'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Post = ({
    guid,
    title,
    categories,
}: {
    guid: string;
    title: string;
    categories: string[];
}) => {
    // const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
        // Add your button logic here
    };

    return (
        <motion.div
            className="bg-black/80 backdrop-blur-lg rounded-4xl flex flex-col py-2 px-5 gap-2 overflow-hidden border border-zinc-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            whileHover={{
                scale: 1.01,
            }}
            // onHoverStart={() => setIsHovered(true)}
            // onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="flex justify-between p-2 items-center relative z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <motion.div
                    className="title text-md md:text-xl text-left font-sans text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <Link href={`${guid}`}>{title}</Link>
                </motion.div>
                <Link href={`${guid}`}>
                    <motion.div
                        className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center cursor-pointer"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: '#db536a',
                            boxShadow: '0 0 15px rgba(209, 42, 70, 0.7)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={clicked ? { scale: 0.95 } : {}}
                        onClick={handleButtonClick}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </motion.div>
                </Link>
            </motion.div>
            <motion.div
                className="flex flex-row justify-start items-center gap-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {categories.map((c: string) => (
                    <span
                        key={c}
                        className="inline-flex line-clamp-1 items-center rounded-md bg-gray-400/10 px-1 md:px-2 py-0 md:py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20"
                    >
                        {c}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};
