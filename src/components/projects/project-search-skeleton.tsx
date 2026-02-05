import {
    Card,
    CardHeader,
    CardFooter,
} from '@/components/ui/card';
import { BlurredButton } from '@/components/ui/blurred-button';

export default function ProjectsSkeleton() {
    return (
        <Card className="w-full py-10 px-4 lg:px-12 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] animate-pulse">
            <CardHeader className="w-full text-4xl font-bold">
                <div className="w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl rounded-b-md min-h-72" />
            </CardHeader>
            <CardFooter className="w-full">
                <BlurredButton className="w-full text-sm md:text-md font-mono rounded-t-md rounded-b-3xl bg-blue-400/10 hover:bg-blue-400/20 active:bg-blue-400/30 text-blue-200 shadow-lg backdrop-blur-md">
                    Loading projects...
                </BlurredButton>
            </CardFooter>
        </Card>
    );
}
