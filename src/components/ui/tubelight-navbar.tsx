"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
  isDropdown?: boolean
  dropdownItems?: { name: string; url: string }[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onDropdownToggle?: (isOpen: boolean) => void
}

export function NavBar({ items, className, onDropdownToggle }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = items.find(item => {
      if (item.url === location.pathname) return true
      if (item.dropdownItems) {
        return item.dropdownItems.some(subItem => subItem.url === location.pathname)
      }
      return false
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name

        if (item.isDropdown && item.dropdownItems) {
          return (
            <div key={item.name} className="relative group">
              <button
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-hsl(var(--amalfi-teal))",
                  isActive && "text-hsl(var(--amalfi-teal))",
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-hsl(var(--amalfi-teal)/0.1) rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-hsl(var(--amalfi-teal)) rounded-t-full">
                      <div className="absolute w-12 h-6 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </button>
              
              {/* Dropdown menu */}
              <div className="absolute top-full mt-2 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                  {item.dropdownItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.url}
                      onClick={() => setActiveTab(item.name)}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-hsl(var(--amalfi-teal)) hover:bg-hsl(var(--amalfi-teal)/0.1) transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        return (
          <Link
            key={item.name}
            to={item.url}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
              "text-foreground/80 hover:text-hsl(var(--amalfi-teal))",
              isActive && "text-hsl(var(--amalfi-teal))",
            )}
          >
            {Icon ? (
              <>
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
              </>
            ) : (
              <span>{item.name}</span>
            )}
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-hsl(var(--amalfi-teal)/0.1) rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-hsl(var(--amalfi-teal)) rounded-t-full">
                  <div className="absolute w-12 h-6 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-hsl(var(--amalfi-teal)/0.3) rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
