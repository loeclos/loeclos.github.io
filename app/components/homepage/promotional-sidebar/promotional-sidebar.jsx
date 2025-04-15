import { Card, CardFooter } from '@/ui/card';
import Button from '@/ui/button';


export default function PromotionalSidebar() {
    return (
        <div className='mx-auto pt-45 md:pt-32 pr-2 lg:px-4'>
            <Card className="py-12 px-4 flex flex-col justify-center backdrop-blur-2xl rounded-xl">
                <h1 className="text-2xl font-bold mb-2">Blog Posts</h1>
                <p className="text-xs mb-8">
                    My name is gleb and I'm a Frontend | Flask Backend | Machine
                    Learning developer
                </p>
            </Card>
        </div>
    );
}
