import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming a 'cn' utility from shadcn/ui
import Image from 'next/image';

//==- Shadcn UI Utility (for merging classes) -==//
// You can get this from the shadcn/ui documentation.
// Usually located in `lib/utils.ts`
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

const cardVariants = cva(
  "relative grid h-full w-full transform-gpu overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-in-out group",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface ImageCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** The URL for the background image of the card. */
  imageUrl: string;
  /** The category or region text displayed above the main title. */
  category: string;
  /** The main title of the destination. */
  title: string;
}

const ImageCard = React.forwardRef<
  HTMLDivElement,
  ImageCardProps
>(
  (
    {
      className,
      imageUrl,
      category,
      title,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ className }))}
        {...props}
      >
        {/* Background Image with Hover Animation */}
        <Image
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = `https://placehold.co/600x800/2d3748/ffffff?text=Image+Not+Found`;
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />



        {/* Text Content with Hover Animation */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-200">
            - {category} -
          </p>
          <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    );
  }
);
ImageCard.displayName = "ImageCard";

export { ImageCard };
