import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlurredButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    parentClassname?: string;
}

export function BlurredButton({
    children,
    onClick,
    className,
    parentClassname,
    ...props
}: BlurredButtonProps) {
    return (
        <div className={`transition-all duration-100 hover:border-l-4 hover:border-r-4 active:border-l-4 active:border-r-4 border-white ${parentClassname}`}>
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
