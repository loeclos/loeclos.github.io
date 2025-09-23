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
        <Button

            className={cn(
                'px-4 py-6 rounded-2xl backdrop-blur-md text-white bg-zinc-700/10 hover:bg-zinc-600/20 active:bg-zinc-500/20 border-1 border-zinc-950/20 transition-colors duration-300 cursor-pointer',
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
}