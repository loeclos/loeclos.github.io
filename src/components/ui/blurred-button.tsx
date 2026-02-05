import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlurredButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function BlurredButton({
    children,
    onClick,
    className,
    ...props
}: BlurredButtonProps) {
    return (
        <div className='transition-all duration-100 hover:border-l-4 hover:border-r-4 hover:border-b-0 hover:border-r-0 border-white'>
            <Button

                className={cn(
                    'px-4 py-6 rounded-none backdrop-blur-md text-white bg-black hover:bg-zinc-600/20 active:bg-zinc-500/20 border-2 border-dotted border-zinc-100/20 transition-colors duration-300 cursor-pointer',
                    className
                )}
                onClick={onClick}
                {...props}
            >
                {children}
            </Button>
        </div>
    );
}
