'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function SoftwareAsAServiceSection({ locale }: { locale: string }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <span className="text-orange-500 text-sm font-medium tracking-wider uppercase">/</span>
            <span className="text-orange-400 text-sm font-medium ml-2 tracking-wider uppercase">Solutions</span>
            <span className="text-orange-500 text-sm font-medium ml-2 tracking-wider uppercase">/</span>
          </div>
          
          {/* Main Heading with Half Orange Half White */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 relative leading-tight tracking-wide">
              <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
                Software as a Service
              </span>
            </h2>
            
            {/* Decorative Elements */}
            <div className="absolute -top-3 -left-6 w-8 h-8 bg-gradient-to-br from-orange-500/15 to-orange-600/15 rounded-full blur-lg"></div>
            <div className="absolute -bottom-3 -right-6 w-8 h-8 bg-gradient-to-br from-orange-600/15 to-orange-500/15 rounded-full blur-lg"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Software that redefines your network on next level
          </p>
          
          {/* Enhanced Decorative Line */}
          <div className="mt-10 flex justify-center items-center space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500/50"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-500/50"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* NETRA Card */}
          <div 
            ref={card1Ref}
            className={`relative rounded-3xl overflow-hidden h-96 cursor-pointer group transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 ${
              card1Visible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: card1Visible ? '0ms' : '0ms',
              backgroundImage: `url('https://images.pexels.com/photos/5326748/pexels-photo-5326748.jpeg?_gl=1*16mg32z*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjIwODIkajM0JGwwJGgw')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Orange Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Side Accent Lines */}
            <div className="absolute left-0 top-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-1 h-20 bg-gradient-to-b from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-end">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-2">
                NETRA : Network Management System
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Plan. Envision. Evolve.
              </p>
              
              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* Integration Capabilities Card */}
          <div 
            ref={card2Ref}
            className={`relative rounded-3xl overflow-hidden h-96 cursor-pointer group transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 ${
              card2Visible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: card2Visible ? '100ms' : '0ms',
              backgroundImage: `url('https://images.pexels.com/photos/6099232/pexels-photo-6099232.jpeg?_gl=1*1ukll28*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjIxMjlkajU5JGwwJGgw')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Orange Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Side Accent Lines */}
            <div className="absolute left-0 top-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-1 h-20 bg-gradient-to-b from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-end">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-2">
                Integration Capabilities
                <span className="block text-lg font-normal text-gray-300 mt-1">
                  For Your Business
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Seamless planning & integration
              </p>
              
              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* MayaOS Card */}
          <div 
            ref={card3Ref}
            className={`relative rounded-3xl overflow-hidden h-96 cursor-pointer group transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 ${
              card3Visible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: card3Visible ? '200ms' : '0ms',
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_K8tKyOy1HisYY8DpQV2ORt0DzVEAdl8-UA&s')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Orange Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Side Accent Lines */}
            <div className="absolute left-0 top-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-1 h-20 bg-gradient-to-b from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-end">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-2">
                MayaOS : Powered By OpenWRT
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Connectivity redefined with tech.
              </p>
              
              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
