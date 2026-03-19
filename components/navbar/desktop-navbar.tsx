'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

import { NavbarItem } from './navbar-item';
import { Button } from '@/components/elements/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

type Props = {
  leftNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  rightNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  logo: any;
  locale: string;
};

export const DesktopNavbar = ({
  leftNavbarItems,
  rightNavbarItems,
  logo,
  locale,
}: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <motion.div
      className={cn(
        'w-full flex relative justify-between items-center px-4 py-3 rounded-md  transition duration-200 bg-transparent mx-auto'
      )}
      animate={{
        width: showBackground ? '80%' : '100%',
        background: showBackground ? 'var(--neutral-900)' : 'transparent',
      }}
      transition={{
        duration: 0.4,
      }}
      style={{ position: 'relative' }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 h-full w-full bg-neutral-900 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full"
          />
        )}
      </AnimatePresence>
      
      {/* Left side - Navigation items only */}
      <div className="flex items-center gap-1.5">
        {leftNavbarItems.map((item) => (
          <NavbarItem
            href={`/${locale}${item.URL}` as never}
            key={item.text}
            target={item.target}
          >
            {item.text}
          </NavbarItem>
        ))}
      </div>
      
      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo locale={locale} image={logo?.image} />
      </div>
      
      {/* Right side - Search bar + right navigation items */}
      <div className="flex space-x-2 items-center">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-32 lg:w-48 px-3 py-1.5 text-sm bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {rightNavbarItems.map((item, index) => (
          <Button
            key={item.text}
            variant={
              index === rightNavbarItems.length - 1 ? 'primary' : 'simple'
            }
            as={Link}
            href={`/${locale}${item.URL}`}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
