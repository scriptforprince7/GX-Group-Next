'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CoreEnterpriseSection({ locale }: { locale: string }) {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div className="py-20 bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div 
            ref={leftRef}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out ${
              leftVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-blue-500/30">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="text-white text-xl font-bold">Enterprise Core</div>
                  <div className="text-blue-100 text-sm mt-2">Backhaul Solutions</div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right Content */}
          <div 
            ref={rightRef}
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-300 ${
              rightVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core &
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Enterprise
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Use tailor-made solution for planning backhaul equipment for in your network to maintain a robust infra.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Custom backhaul planning solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Robust infrastructure maintenance</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Enterprise-scale network optimization</span>
              </div>
            </div>
            <Button 
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Discover Solutions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
