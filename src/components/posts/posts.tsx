'use client';
import { useEffect, useState } from 'react';
import GetPosts from '@/hooks/getPosts';
import { Post } from '@/components/posts/post';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
            .catch(() => {});
    }, [request]);

    return (

        <section
            id="posts"
            className="relative min-h-screen min-w-screen font-mono bg-black z-0"
        >
            <div className="relative h-fit min-h-screen w-full">
                <div className=" max-w-[90%] md:max-w-7xl mx-auto pt-10">
                    <Card className="py-12 lg:px-15 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-transparent backdrop-blur-3xl border-none">
                        <CardHeader className="w-full text-4xl font-mono text-center">
                            Blog
                        </CardHeader>

                        <CardContent className="text-md px-2 ">
                            <div className="flex flex-col gap-3 mt-10">
                                {data?.items?.slice(0, 5).map((item) => (
                                    <Post key={item.guid} {...item} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
