import {
    Card,
    CardHeader,
    CardFooter,
} from '@/components/ui/card';
import { BlurredButton } from '@/components/ui/blurred-button';

export default function SearchError() {
    return (
        <Card className="py-12 flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-amber-950/25 backdrop-blur-3xl border-amber-950">
            <CardHeader className=" h-full text-xl md:text-4xl font-bold">
                <div className="py-10 flex justify-center text-center bg-amber-900/40 rounded-3xl rounded-b-md min-h-96">Nothing found!</div>
            </CardHeader>
            <CardFooter className=''>
                <BlurredButton className="text-sm md:text-md font-mono rounded-t-md rounded-b-3xl w-full bg-amber-700/10 hover:bg-amber-600/20 active:bg-amber-500/20">
                   ???
                </BlurredButton>
            </CardFooter>
        </Card>
    );
}
