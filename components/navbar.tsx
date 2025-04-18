"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const productItems = [];

const divisionItems = [
  { title: "Taima", href: "/divisions/taima" },
  { title: "Rinda", href: "/divisions/rinda" },
  { title: "Pure Harvest", href: "/divisions/pure-harvest" },
];

export default function Navbar() {
  const [isClient, setIsClient] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    handleLinkClick();
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="border-b bg-white dark:bg-gray-950 sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          {isClient && (
            <img
              src="/img/westfood.png"
              alt="WESTFOOD Company Logo"
              className="h-10 w-auto"
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-green-600 transition-colors">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 hover:text-green-600 transition-colors"
              >
                About Us
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-4 py-2 hover:text-green-600 transition-colors"
              >
                Portfolio
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-green-600 transition-colors">
                  Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Divisions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {divisionItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/careers" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-green-600 transition-colors">
                  Careers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 hover:text-green-600 transition-colors">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu and Theme Toggle */}
        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                {/* <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader> */}
                <nav className="flex flex-col gap-4">
                  <Link 
                    href="/" 
                    className="text-xl font-bold text-green-600 dark:text-green-400 mb-4"
                    onClick={handleLinkClick}
                  >
                  <img
              src="/img/westfood.png"
              alt="WESTFOOD Company Logo"
              className="h-10 w-auto"
            />
                  </Link>
                  <Link 
                    href="/" 
                    className="block py-2 hover:text-green-600"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block py-2 hover:text-green-600 text-left"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="block py-2 hover:text-green-600 text-left"
                  >
                    Portfolio
                  </button>
                  <Link
                    href="/products"
                    className="block py-2 hover:text-green-600"
                    onClick={handleLinkClick}
                  >
                    Products
                  </Link>
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full py-2 hover:text-green-600">
                      <span>Divisions</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-2">
                      {divisionItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1 hover:text-green-600"
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  <Link 
                    href="/careers" 
                    className="block py-2 hover:text-green-600"
                    onClick={handleLinkClick}
                  >
                    Careers
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block py-2 hover:text-green-600"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";