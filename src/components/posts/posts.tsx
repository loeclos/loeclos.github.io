'use client';

import { useEffect, useState } from 'react';
import GetPosts from '@/hooks/getPosts';
import { Post } from '@/components/posts/post';

type PostType = {
    guid: string;
    title: string;
    categories: string[];
}

type PostsType = {
    items?: PostType[];
};

export default function Posts() {
    const { request } = GetPosts();
    const [data, setData] = useState<PostsType>({});

    useEffect(() => {
        request()
            .then((data_) => {
                setData(data_);
            })
            .catch(() => { });
    }, [request]);

    return (

        <section
            id="posts"
            className="relative min-h-screen min-w-screen bg-black z-0"
        >
            <div className="flex flex-col gap-6 max-w-[90%] md:max-w-7xl mx-auto pt-10 py-12 px-3 lg:px-15 ">

                <div className="p-2 text-center">
                    <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"><h2 className="text-3xl font-semibold font-serif">blog</h2></div>
                    <p className="text-sm py-3 text-muted-foreground">I write sometimes.</p>
                </div>
                <div>
                    <div className="flex flex-col gap-3 mt-10">
                        {data?.items?.slice(0, 5).map((item) => (
                            <Post key={item.guid} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
