import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlurredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  parentClassname?: string;
}

export function CustomButton({
  children,
  onClick,
  className,
  parentClassname,
  ...props
}: BlurredButtonProps) {
  return (
    <div className={`transition-all duration-100  ${parentClassname}`}>
      <Button

        className={cn(
          'px-2 py-2 rounded-xl shadow-[2px_2px_0px_0px] hover:shadow-none shadow-zinc-300 hover:translate-y-[5px] hover:translate-x-[5px] backdrop-blur-md text-white bg-black hover:bg-zinc-600/20 active:bg-zinc-500/20 border-1 border-zinc-100/40 transition-all duration-300 cursor-pointer',
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
