import React from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type NavigationItem = {
  name: string;
  href: string;
}

interface NavigationDropdownProps {
  name: string;
  items: NavigationItem[];
  className?: string;
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ 
  name, 
  items, 
  className 
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "text-xl lg:text-2xl font-bold text-white transition-colors focus:outline-none",
            className
          )}>
            {name}
            {/* <ChevronDown className="inline lg:h-8 lg:w-8 w-4 h-4 ml-1" /> */}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none shadow-none p-10 pt-2 z-50 pb-20 min-w-[18rem] w-fit mt-8 text-left">
            {items.map(item => (
              <NavigationMenuLink asChild key={item.name}>
                <Link
                  href={item.href}
                  className="block text-3xl text-white hover:text-gray-300 hover:underline py-1"
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationDropdown
