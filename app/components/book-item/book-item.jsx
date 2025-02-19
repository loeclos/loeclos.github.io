export default function BookItem({ title, author, id, className }) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 px-10 py-5 items-center h-fit bg-white bg-gradient-to-br from-red-50 via-amber-100 to-yellow-100 dark:bg-gradient-to-br dark:from-blue-950 dark:via-cyan-950 dark:to-zinc-900 rounded-2xl ${className}`}
        >
            <h3 className="text-lg font-bold italic">"{title}"</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{author}</p>
        </div>
    );
}
