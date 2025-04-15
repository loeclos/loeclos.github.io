'use client';

import { cn } from '@/ui/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useState } from 'react';

export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={`skill-${idx}`}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-800/[0.8] block rounded-4xl -z-10"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.5 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className={'flex flex-col justify-center relative'}>
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex items-center justify-center space-x-2">
                                    <CardTitle className="text-base leading-none underline">
                                        {item.name}
                                    </CardTitle>
                                </div>

                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                                <HoverCardContent className="flex justify-center items-center w-20 h-20 backdrop-blur-2xl z-5">
                                    <Image
                                        src={`https://skillicons.dev/icons?i=${item.iconName}`}
                                        width={40}
                                        height={40}
                                        className="border"
                                        alt={item.name}
                                    />
                                </HoverCardContent>
                            </HoverCardTrigger>
                        </HoverCard>
                        {/* <CardBar percentage={item.percentage} /> */}
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                'rounded-3xl h-full w-full p-2 md:p-4 overflow-hidden bg-gray-100 dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-200 dark:group-hover:border-slate-700 relative',
                className
            )}
        >
            <div className="p-4">{children}</div>
        </div>
    );
};
export const CardTitle = ({ className, children }) => {
    return (
        <h4
            className={cn(
                'text-zinc-800 dark:text-zinc-100 font-bold tracking-wide mt-4',
                className
            )}
        >
            {children}
        </h4>
    );
};
export const CardDescription = ({ className, children }) => {
    return (
        <p
            className={cn(
                'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
                className
            )}
        >
            {children}
        </p>
    );
};


export const CardBar = ({ className, percentage }) => {
    return (
        <div
            className={cn(
                'relative right-0 left-0 px-1  items-center justify-center  text-zinc-400 tracking-wide leading-relaxed text-sm bottom-0',
                className
            )}
        >
            <div className="w-full rounded-full h-2.5 mb-4 mt-4 bg-gray-300 dark:bg-gray-700">
                <div
                    className={
                        'h-2.5 rounded-full ' +
                        (+percentage > 85
                            ? 'bg-green-600 '
                            : +percentage > 60 && +percentage < 70
                            ? 'bg-yellow-200 '
                            : +percentage > 50
                            ? 'bg-yellow-500 '
                            : 'bg-red-500 ')
                    }
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    );
};
