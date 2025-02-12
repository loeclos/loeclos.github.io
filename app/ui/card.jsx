import React from 'react';

const Card = ({ children, className }) => {
    return (
        <div
            className={`card-container p-6 border border-gray-300 dark:border-gray-800 rounded-3xl shadow-lg dark:shadow-slate-950 hover:shadow-slate-300 dark:hover:shadow-slate-900 dark:text-white ${className} transition-all duration-300`}
        >
            {children}
        </div>
    );
};

const glowingCard = ({ children, className }) => {
    return (
        <div className=''>
            <div
                className={`card-container p-6 border border-gray-800 rounded-2xl shadow-lg shadow-slate-950 hover:shadow-slate-900 ${className} transition-all duration-300`}
            >
                <div className="glow">{children}</div>
            </div>
        </div>
    );
};

const CardFooter = ({ children, className }) => {
    return (
        <div className={`flex items-center justify-center pt-10 ${className}`}>
            {children}
        </div>
    );
};

export { Card, CardFooter };
