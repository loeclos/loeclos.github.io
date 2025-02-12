const variantClasses = {
    blue: 'bg-blue-700 text-blue-100 hover:bg-blue-800 border-blue-800 hover:border-blue-900',
    gray: 'bg-gray-700 text-gray-100 hover:bg-gray-800 border-gray-800 hover:border-gray-900',
    red: 'bg-red-700 text-red-100 hover:bg-red-800 border-red-800 hover:border-red-900',
    black: 'bg-white text-black hover:bg-gray-100 border-gray-300 hover:border-gray-400',
    amber: 'bg-amber-700 text-amber-100 hover:bg-amber-800 border-amber-800 hover:border-amber-900',
    violet: 'bg-violet-700 text-violet-100 hover:bg-violet-800 border-violet-800 hover:border-violet-900',
};

const Button = ({ children, className = '', variant = 'blue', onClick }) => {
    const baseClasses = 'px-4 py-2 rounded-lg border-t border-l border-5 active:border-t-5 active active:border-l-5 active:border-b-0 active:border-r-0 cursor-pointer transition-all duration-100';
    const variantClass = variantClasses[variant] || variantClasses.primary;
    const combinedClasses = `${baseClasses} ${variantClass} ${className}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

