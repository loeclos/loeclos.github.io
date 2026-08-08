

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const MinimalCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-3xl transition-all cursor-pointer duration-200 hover:bg-amber-200/20 bg-neutral-800 p-1 no-underline shadow-sm ",
            className
        )}
        {...props}
    >
        {children}
    </div>
))
MinimalCard.displayName = "MinimalCard"

const MinimalCardImage = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string; priority?: boolean }
>(({ className, alt, src, priority, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative aspect-video w-full",
            className
        )}
        {...props}
    >
        <Image
            src={src}
            alt={alt}
            width={640}
            height={360}
            priority={priority}
            className=" rounded-2xl object-cover absolute h-full w-full inset-0 "
        />
    </div>
))
MinimalCardImage.displayName = "MinimalCardImage"

const MinimalCardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-lg mt-2 font-semibold leading-tight px-1", className)}
        {...props}
    />
))
MinimalCardTitle.displayName = "MinimalCardTitle"

const MinimalCardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-neutral-500 pb-2 px-1", className)}
        {...props}
    />
))
MinimalCardDescription.displayName = "MinimalCardDescription"

const MinimalCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
MinimalCardContent.displayName = "MinimalCardContent"

const MinimalCardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
MinimalCardFooter.displayName = "MinimalCardFooter"

export {
    MinimalCard,
    MinimalCardImage,
    MinimalCardTitle,
    MinimalCardDescription,
    MinimalCardContent,
    MinimalCardFooter,
}

