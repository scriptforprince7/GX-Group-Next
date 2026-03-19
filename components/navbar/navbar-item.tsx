'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  href: never;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: string;
};

export function NavbarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link
        href={href}
        className={cn(
          'flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200',
          (active || pathname?.includes(href)) && 'bg-transparent text-white',
          className
        )}
        target={target}
        suppressHydrationWarning
      >
        {children}
        <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-3 w-[600px] bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl z-50">
          <div className="p-8">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 text-base">Solutions</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Enterprise Solutions</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Network Management</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Cloud Infrastructure</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-base">Technology</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">AI-Powered Systems</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">5G Networks</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-base">Products</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">NETRA Platform</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">MayaOS Router</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Integration Tools</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-base">Blog</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Latest News</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white text-sm block py-1">Tech Insights</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
