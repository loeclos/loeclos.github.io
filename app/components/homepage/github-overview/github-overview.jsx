// import CommitGraph from '@/components/commit-graph/commit-graph';
// import Image from 'next/image';

// export default function GitHubOverview() {
//     return (
//         <div className="px-1 md:px-8 md:mx-10">
//             <div className="overflow-auto scrollbar-hidden relative size-full max-w-[90%] md:max-w-5xl mx-auto my-10  text-white bg-zinc-900 border-6 border-zinc-700 rounded-3xl">
//                 <div
//                     className="pointer-events-none absolute inset-0 size-full"
//                     style={{
//                         WebkitTransition:
//                             'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
//                         transition:
//                             'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
//                     }}
//                 >
//                     <div
//                         className="size-full"
//                         style={{
//                             WebkitTransition:
//                                 'background 0.3s var(--spring-easing)',
//                             transition: 'background 0.3s var(--spring-easing)',
//                         }}
//                     />
//                 </div>
//                 <div className="relative flex size-full flex-col overflow-hidden">
//                     <div className="h-[50px] w-full shrink-0 border-b border-b-transparent px-[18px]  flex items-center gap-[8px]">
//                         <div className="flex items-center gap-[7px]">
//                             <div
//                                 className="size-[13px] rounded-full "
//                                 style={{
//                                     backgroundColor: 'red',
//                                 }}
//                             />
//                             <div className="size-[13px] rounded-full bg-amber-300" />
//                             <div
//                                 className="size-[13px] rounded-full"
//                                 style={{
//                                     backgroundColor: 'green',
//                                 }}
//                             />
//                         </div>
//                         {/* <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={22}
//                         height={22}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-chevron-left ml-4 shrink-0 opacity-70"
//                     >
//                         <path d="m15 18-6-6 6-6" />
//                     </svg>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={22}
//                         height={22}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-chevron-right ml-0.5 shrink-0 opacity-70"
//                     >
//                         <path d="m9 18 6-6-6-6" />
//                     </svg>
//                     <div className="absolute inset-x-0 mx-auto flex h-[34px] w-fit min-w-[270px] items-center justify-between gap-2 rounded-xl border-2 border-[color-mix(in_srgb,_var(--theme-border),_transparent_70%)] bg-theme-secondary p-1 px-2 ring-theme-primary transition-shadow duration-150 focus-within:ring-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width={16}
//                             height={16}
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-lock opacity-70"
//                         >
//                             <rect
//                                 width={18}
//                                 height={11}
//                                 x={3}
//                                 y={11}
//                                 rx={2}
//                                 ry={2}
//                             />
//                             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                         </svg>
//                         <div className="relative overflow-hidden text-[13px] opacity-70 hidden md:block">
//                             <input
//                                 data-hide-on-export="true"
//                                 className="size-full appearance-none text-ellipsis border-none bg-transparent p-1 text-center font-medium outline-none placeholder:text-foreground"
//                                 aria-label="Frame title"
//                                 defaultValue="github.com/marsianjohncarter"
//                             />
//                             <div
//                                 data-show-only-on-export="true"
//                                 className="pointer-events-none absolute inset-0 w-full overflow-hidden text-ellipsis p-1 text-center font-medium"
//                             >
//                                 github.com/marsianjohncarter
//                             </div>
//                         </div>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width={16}
//                             height={16}
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-rotate-cw opacity-70"
//                         >
//                             <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
//                             <path d="M21 3v5h-5" />
//                         </svg>
//                     </div>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={22}
//                         height={22}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-share ml-auto mr-3 shrink-0 opacity-70"
//                     >
//                         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//                         <polyline points="16 6 12 2 8 6" />
//                         <line x1={12} x2={12} y1={2} y2={15} />
//                     </svg>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={22}
//                         height={22}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-plus mr-3 shrink-0 opacity-70"
//                     >
//                         <path d="M5 12h14" />
//                         <path d="M12 5v14" />
//                     </svg>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={22}
//                         height={22}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-copy shrink-0 opacity-70"
//                     >
//                         <rect
//                             width={14}
//                             height={14}
//                             x={8}
//                             y={8}
//                             rx={2}
//                             ry={2}
//                         />
//                         <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
//                     </svg> */}
//                     </div>
//                     <div className="grid grid-rows-2 w-full  gap-10 p-6">
//                         <div className="z-0 flex h-fit gap-8 p-1.5 overflow-auto">
//                             <div className='grid grid-rows-3 md:grid-rows-2  lg:grid-rows-1'>
//                                 <Image
//                                     className=" rounded-full object-cover border border-theme-border"
//                                     src="https://avatars.githubusercontent.com/u/116607327?s=128&v=4"
//                                     width={128}
//                                     height={128}
//                                 />
//                                 <div className="flex flex-1 justify-between font-medium">
//                                     <div className="flex flex-col gap-2">
//                                         <h1 className="line-clamp-1 text-ellipsis text-4xl font-semibold tracking-tight">
//                                             john
//                                         </h1>
//                                         <span className="flex items-center gap-2 text-nowrap">
//                                             <span>@marsianjohncarter</span>
//                                             <div className="size-1.5 rounded-full bg-current opacity-70" />
//                                             <span className="flex items-center gap-1 text-nowrap">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width={16}
//                                                     height={16}
//                                                     viewBox="0 0 24 24"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     className="lucide lucide-user-round"
//                                                 >
//                                                     <circle
//                                                         cx={12}
//                                                         cy={8}
//                                                         r={5}
//                                                     />
//                                                     <path d="M20 21a8 8 0 0 0-16 0" />
//                                                 </svg>
//                                                 192
//                                                 <span className="opacity-70">
//                                                     Followers
//                                                 </span>
//                                             </span>
//                                             <div className="size-1.5 rounded-full bg-current opacity-70" />
//                                             <span className="inline-flex items-center gap-1.5 text-nowrap">
//                                                 453
//                                                 <span className="opacity-70">
//                                                     Following
//                                                 </span>
//                                             </span>
//                                         </span>
//                                         <p className="line-clamp-2 max-w-sm text-wrap font-normal opacity-70">
//                                             "Do or do not, there is no try." -
//                                             Yoda{' '}
//                                         </p>
//                                     </div>
//                                     <div className="flex h-full shrink-0 flex-col items-end gap-0.5">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={56}
//                                             height={56}
//                                             fill="currentColor"
//                                             viewBox="0 0 24 24"
//                                             className="mb-auto"
//                                         >
//                                             <title>GitHub</title>
//                                             <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//                                         </svg>
//                                         <p className="line-clamp-1 text-nowrap opacity-70">
//                                             615 Commits
//                                         </p>
//                                         <p className="line-clamp-1 text-nowrap opacity-70">
//                                             4 Years
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="space-y-6 overflow-auto scrollbar-hidden">
//                                 <div
//                                     className="space-y-1"
//                                     style={{
//                                         height: '163px',
//                                     }}
//                                 >
//                                     <div className="line-clamp-1 flex items-center gap-3 text-nowrap text-sm font-medium">
//                                         <h5 className="font-semibold">2025</h5>
//                                         <span className="opacity-70">
//                                             135 Commits,
//                                         </span>
//                                         <span className="opacity-70">
//                                             19 Days,
//                                         </span>
//                                         <span className="flex items-center gap-1 opacity-70">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width={16}
//                                                 height={16}
//                                                 viewBox="0 0 24 24"
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 strokeWidth={2}
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 className="lucide lucide-flame"
//                                             >
//                                                 <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
//                                             </svg>{' '}
//                                             4 Days
//                                         </span>
//                                     </div>
//                                     <CommitGraph />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import CommitGraph from '@/components/commit-graph/commit-graph';

export default function GitHubOverview() {
    return (
        <div
            className="overflow-auto scrollbar-hidden relative size-full max-w-[90%] md:max-w-5xl mx-auto my-10 hidden lg:block"
            style={{
                color: 'rgb(255, 255, 255)',
                width: '971px',
                height: '447px',
                'box-shadow':
                    '22.35px 22.35px 25px 2px color-mix(in srgb, var(--t-shadow) 20%, transparent),             22.35px 22.35px 50px 5px color-mix(in srgb, var(--t-shadow) 25%, transparent),             22.35px 22.35px 100px 10px color-mix(in srgb, var(--t-shadow) 30%, transparent),             22.35px 22.35px 250px 30px color-mix(in srgb, var(--t-shadow) 40%, transparent)',
                'border-radius': '22px',
                '--t-shadow': 'rgba(0, 0, 0, 0.5)',
                '-webkit-transition':
                    'box-shadow 0.3s var(--spring-easing), border-radius 0.3s var(--spring-easing)',
                transition:
                    'box-shadow 0.3s var(--spring-easing), border-radius 0.3s var(--spring-easing)',
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 size-full"
                style={{
                    '-webkit-transition':
                        'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
                    transition:
                        'filter 0.3s var(--spring-easing), transform 0.3s var(--spring-easing)',
                }}
            >
                <div
                    className="size-full"
                    style={{
                        background: 'rgba(16, 4, 4, 0.84)',
                        '-webkit-transition':
                            'background 0.3s var(--spring-easing)',
                        transition: 'background 0.3s var(--spring-easing)',
                    }}
                />
            </div>
            <div
                className="relative flex size-full flex-col overflow-hidden"
                style={{
                    'border-color': 'rgba(143, 143, 143, 0.6)',
                    'border-style': 'double',
                    'border-radius': '22px',
                    '-webkit-transition':
                        'border-radius 0.3s var(--spring-easing)',
                    transition: 'border-radius 0.3s var(--spring-easing)',
                    'border-width': '3px',
                }}
            >
                <div className="h-[50px] w-full shrink-0 border-b border-b-transparent px-[18px]  flex items-center gap-[8px]">
                    <div className="flex items-center gap-[7px]">
                        <div
                            className="size-[13px] rounded-full "
                            style={{
                                'background-color': 'red',

                            }}
                        />
                        <div
                            className="size-[13px] rounded-full bg-amber-300"

                        />
                        <div
                            className="size-[13px] rounded-full"
                            style={{
                                'background-color': 'green',
                            }}
                        />
                    </div>
            
                </div>
                <div className="flex w-full flex-col gap-10 p-6">
                    <div className="relative z-0 flex h-[138px] gap-8 p-1.5">
                        <div className="aspect-square rounded-full border border-theme-border bg-theme-secondary">
                            <img
                                className="size-full rounded-full object-cover"
                                src="https://avatars.githubusercontent.com/u/116607327?s=128&v=4"
                            />
                        </div>
                        <div className="flex flex-1 justify-between font-medium">
                            <div className="flex flex-col gap-2">
                                <h1 className="line-clamp-1 text-ellipsis text-4xl font-semibold tracking-tight">
                                    gleb
                                </h1>
                                <span className="flex items-center gap-2 text-nowrap">
                                    <span>@valdemirum</span>
                                    <div className="size-1.5 rounded-full bg-current opacity-70" />
                                    <span className="flex items-center gap-1 text-nowrap">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-user-round"
                                        >
                                            <circle cx={12} cy={8} r={5} />
                                            <path d="M20 21a8 8 0 0 0-16 0" />
                                        </svg>
                                        214
                                        <span className="opacity-70">
                                            Followers
                                        </span>
                                    </span>
                                    <div className="size-1.5 rounded-full bg-current opacity-70" />
                                    <span className="inline-flex items-center gap-1.5 text-nowrap">
                                        509
                                        <span className="opacity-70">
                                            Following
                                        </span>
                                    </span>
                                </span>
                                <p className="line-clamp-2 max-w-sm text-wrap font-normal opacity-70">
                                    "Do or do not, there is no try." - Yoda{' '}
                                </p>
                            </div>
                            <div className="flex h-full shrink-0 flex-col items-end gap-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={56}
                                    height={56}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="mb-auto"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <p className="line-clamp-1 text-nowrap opacity-70">
                                    629 Commits
                                </p>
                                <p className="line-clamp-1 text-nowrap opacity-70">
                                    4 Years
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 overflow-auto scrollbar-hidden">
                        <div
                            className="space-y-1"
                            style={{
                                height: '163px',
                            }}
                        >
                            <div className="line-clamp-1 flex items-center gap-3 text-nowrap text-sm font-medium">
                                <h5 className="font-semibold">2025</h5>
                                <span className="opacity-70">135 Commits,</span>
                                <span className="opacity-70">19 Days,</span>
                                <span className="flex items-center gap-1 opacity-70">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-flame"
                                    >
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                                    </svg>{' '}
                                    4 Days
                                </span>
                            </div>
                            <CommitGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
