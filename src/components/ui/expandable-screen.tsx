"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

// Context
interface ExpandableScreenContextValue {
    isExpanded: boolean
    expand: () => void
    collapse: () => void
    layoutId: string
    triggerRadius: string
    contentRadius: string
    animationDuration: number
}

const ExpandableScreenContext =
    createContext<ExpandableScreenContextValue | null>(null)

function useExpandableScreen() {
    const context = useContext(ExpandableScreenContext)
    if (!context) {
        throw new Error(
            "useExpandableScreen must be used within an ExpandableScreen"
        )
    }
    return context
}

// Root Component
interface ExpandableScreenProps {
    children: ReactNode
    defaultExpanded?: boolean
    onExpandChange?: (expanded: boolean) => void
    layoutId?: string
    triggerRadius?: string
    contentRadius?: string
    animationDuration?: number
    lockScroll?: boolean
}

export function ExpandableScreen({
    children,
    defaultExpanded = false,
    onExpandChange,
    layoutId = "expandable-card",
    triggerRadius = "100px",
    contentRadius = "24px",
    animationDuration = 0.3,
    lockScroll = true,
}: ExpandableScreenProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    const expand = () => {
        setIsExpanded(true)
        onExpandChange?.(true)
    }

    const collapse = () => {
        setIsExpanded(false)
        onExpandChange?.(false)
    }

    useEffect(() => {
        if (lockScroll) {
            if (isExpanded) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "unset"
            }
        }
    }, [isExpanded, lockScroll])

    return (
        <ExpandableScreenContext.Provider
            value={{
                isExpanded,
                expand,
                collapse,
                layoutId,
                triggerRadius,
                contentRadius,
                animationDuration,
            }}
        >
            {children}
        </ExpandableScreenContext.Provider>
    )
}

// Trigger Component
interface ExpandableScreenTriggerProps {
    children: ReactNode
    className?: string
}

export function ExpandableScreenTrigger({
    children,
    className = "",
}: ExpandableScreenTriggerProps) {
    const { isExpanded, expand } = useExpandableScreen()

    return (
        <AnimatePresence initial={false}>
            {!isExpanded && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={expand}
                    className={`relative inline-block cursor-pointer ${className}`}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Content Component
interface ExpandableScreenContentProps {
    children: ReactNode
    className?: string
    showCloseButton?: boolean
    closeButtonClassName?: string
}

export function ExpandableScreenContent({
    children,
    className = "",
    showCloseButton = true,
    closeButtonClassName = "",
}: ExpandableScreenContentProps) {
    const { isExpanded, collapse, contentRadius, animationDuration } =
        useExpandableScreen()

    return (
        <AnimatePresence initial={false}>
            {isExpanded && (
                <div className="fixed bg-black/20 inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
                    {/* Centered panel with scale+fade */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: animationDuration, ease: "easeOut" }}
                        style={{
                            borderRadius: contentRadius,
                        }}
                        className={`relative flex h-full w-full lg:max-w-3xl overflow-y-auto transform-gpu will-change-transform ${className}`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="relative z-20 w-full"
                        >
                            {children}
                        </motion.div>

                        {showCloseButton && (
                            <motion.button
                                onClick={collapse}
                                className={`absolute right-6 top-6 z-30 flex h-10 w-10 items-center justify-center transition-colors rounded-full ${closeButtonClassName ||
                                    "text-white bg-transparent hover:bg-white/10"
                                    }`}
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

// Background Component (optional)
interface ExpandableScreenBackgroundProps {
    trigger?: ReactNode
    content?: ReactNode
    className?: string
}

export function ExpandableScreenBackground({
    trigger,
    content,
    className = "",
}: ExpandableScreenBackgroundProps) {
    const { isExpanded } = useExpandableScreen()

    if (isExpanded && content) {
        return <div className={className}>{content}</div>
    }

    if (!isExpanded && trigger) {
        return <div className={className}>{trigger}</div>
    }

    return null
}

export { useExpandableScreen }
