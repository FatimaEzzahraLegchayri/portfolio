'use client'

import { Button } from "@/components/ui/button"

interface ScrollButtonProps {
  targetId: string
  children: React.ReactNode
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ScrollButton({ targetId, children, variant = "default", size = "lg", className }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

