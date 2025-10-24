'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Project } from '@/types/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const ProjectCard = ({id, description, thumbnailUrl, title}: Project) => {
    // const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
        // Add your button logic here
    };

    return (
        <motion.div 
            className='bg-black/80 backdrop-blur-lg rounded-4xl flex flex-col p-2 gap-2 overflow-hidden border border-zinc-900'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ 
                scale: 1.01,
            }}
            // onHoverStart={() => setIsHovered(true)}
            // onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div 
                className='flex justify-end p-2 items-center relative z-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {/* <motion.svg 
                    width="34px" 
                    height="34px" 
                    fill="white" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ pointerEvents: 'auto' }}
                >
                    <rect x="0" y="0" width="24" height="24" fill="transparent" />
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .682 1.2l-1.516 6.068A4.992 4.992 0 0 1 16 16 4.992 4.992 0 0 1 12 18a4.992 4.992 0 0 1-4-2 4.992 4.992 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2L4 10.4zm2-.6L12 8l2.754.826 1.809.543L18 9.8V5H6v4.8zM4 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 12 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 20 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 12 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 4 22H2v-2h2z" />
                    </g>
                </motion.svg> */}

                <Link href={`/projects/${id}`}>
                <motion.div 
                    className='w-10 h-10 bg-red-400 rounded-full flex items-center justify-center cursor-pointer'
                    whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#db536a",
                        boxShadow: "0 0 15px rgba(209, 42, 70, 0.7)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={clicked ? { scale: 0.95 } : {}}
                    onClick={handleButtonClick}
                    style={{ pointerEvents: 'auto' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </motion.div>
                </Link>
            </motion.div>
            <div className='flex flex-col gap-4'>
                <motion.div 
                    className="title text-4xl text-center font-sans text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {title}
                </motion.div>
                <motion.div 
                    className="image relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <motion.div 
                        className="relative z-10 p-2"
                        whileHover={{ scale: 1.03 }}
                        transition={{ ease: "easeInOut" }}
                    >
                    <Link href={`/projects/${id}`}>

                        <Image 
                            src={`${thumbnailUrl}`}
                            alt="Project image" 
                            className="rounded-4xl w-full h-full shadow-lg"
                            width={500}
                            height={300}
                        />
                    </Link>

                    </motion.div>
                </motion.div>
                <motion.div 
                    className="desc text-xs text-center line-clamp-2 max-w-3/4 mx-auto text-neutral-400 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                >
                   {description}
                </motion.div>
            </div>
        </motion.div>
    );
}