export default function Skills() {
    return (
        <section
            id="about"
            className="w-full flex flex-col gap-3 items-center justify-center py-12"
        >
            <div className="flex flex-col gap-8 max-w-7xl w-full px-4">
                <div className="text-center">
                    <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                        <h2 className="text-3xl font-semibold font-serif">about</h2>
                    </div>
                    <p className="text-sm py-2 text-muted-foreground">
                        Some stuff about me
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 max-w-7xl w-full px-4">
                <div className='w-full md:max-w-1/2 font-mono text-sm'>
                    <p className='indent-8 py-3'>I started my coding &quot;journey&quot; in 2021. I had taken an online course covering the basics of HTML and CSS. Quickly amazed at what I could build with this, I delved in deeper. Things developed relatively quickly from there on. Python, Javascript, Typescript followed one after another. The most recent language I learned (or am learning; it&apos;s a lifetime process) is Golang.</p>
                    <p className='indent-8 py-3'>But of course programming languages aren&apos;t the only stuff I&apos;ve practiced over the years. I&apos;ve gone into backend development with FastAPI and Python. Learned frontend dev with TS/Next.js (this site is built with this stack). ML/DL with Pytorch and Python. As of Janurary of 2026, I am going through an online course covering AWS, and I plan on finishing soon.</p>
                    <p className='indent-8 py-3'>Overall, I believe that coding is a great (and truly interesting) field to go into. That&apos;s why I took the time to write these paragraphs.</p>
                </div>
            </div>
        </section>
    );
}
