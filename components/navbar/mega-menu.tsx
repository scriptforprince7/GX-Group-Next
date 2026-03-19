'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'next-view-transitions';

type MegaMenuProps = {
  items: {
    URL: string;
    text: string;
    target?: string;
  }[];
  isOpen: boolean;
  locale: string;
};

export function MegaMenu({ items, isOpen, locale }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-full left-0 right-0 w-screen bg-neutral-900 border border-neutral-800 shadow-2xl z-50"
          onMouseEnter={(e) => {
            // Keep menu open when hovering over it
            e.currentTarget.style.display = 'block';
          }}
        >
          <div className="w-full px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.text}
                    className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors"
                  >
                    <Link
                      href={`/${locale}${item.URL}`}
                      className="block"
                    >
                      <h3 className="text-white font-medium mb-2 text-lg">{item.text}</h3>
                      <p className="text-gray-400 text-sm">Explore {item.text.toLowerCase()}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
