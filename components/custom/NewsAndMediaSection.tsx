'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function NewsAndMediaSection({ locale }: { locale: string }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation<HTMLDivElement>();

  const articles = [
    {
      id: 1,
      date: "March 2024",
      title: "AI-Powered Wi-Fi 7 Solutions Unveiled with Qualcomm at MWC Barcelona",
      description: "MWC Barcelona witnessed the introduction of AI-powered Wi-Fi 7 gateway solutions, powered by Qualcomm's advanced chipset platform and engineered in India to deliver intelligent, high-performance connectivity for global broadband networks.",
      category: "Technology / Innovation",
      image: "https://gxgroup.s3.ap-south-1.amazonaws.com/images/news/a0591f0c5138dec9e51effc1f4ecb1f8.jpeg"
    },
    {
      id: 2,
      date: "March 2024",
      title: "Next-Gen AI-Powered Connectivity Showcased at MWC Barcelona 2026",
      description: "Next-generation broadband technologies were showcased at MWC Barcelona 2026, featuring AI-enabled Wi-Fi 6 and Wi-Fi 7 solutions designed to deliver faster and more intelligent connectivity.",
      category: "Technology / Connectivity",
      image: "https://gxgroup.s3.ap-south-1.amazonaws.com/images/news/ac7d84d3954d21918d748a691026e60e.jpg"
    },
    {
      id: 3,
      date: "March 2024",
      title: "Strategic Partnership with Calculus to Expand Presence in Latin America",
      description: "A new collaboration with Calculus aims to explore emerging opportunities and strengthen presence across telecom, broadband, enterprise, and data center markets in Latin America.",
      category: "Partnership / Expansion",
      image: "https://gxgroup.s3.ap-south-1.amazonaws.com/images/news/e857c18a029c972933671969d997f5dc.jpg"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <div>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 text-sm">/</span>
              <span className="text-gray-700 text-sm font-medium ml-1">News & Media</span>
              <span className="text-gray-500 text-sm ml-1">/</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Latest News & Media Updates
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl">
              Stay informed with our latest announcements, partnerships, and technology innovations
            </p>
          </div>
          <Button 
            variant="outline"
            size="sm"
            className="mt-4 md:mt-0 border-orange-300 text-orange-600 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
          >
            View all articles
          </Button>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const refs = [card1Ref, card2Ref, card3Ref];
            const visibilities = [card1Visible, card2Visible, card3Visible];
            const delays = ['0ms', '200ms', '400ms'];
            
            return (
              <article
                key={article.id}
                ref={refs[index]}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group ${
                  visibilities[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: visibilities[index] ? delays[index] : '0ms' }}
              >
                {/* Article Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="text-sm text-gray-500 mb-3">
                    {article.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Category and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>/</span>
                      <span className="ml-1">{article.category}</span>
                      <span className="ml-1">/</span>
                    </div>
                    <button className="text-orange-600 font-semibold text-sm uppercase tracking-wide hover:text-orange-700 transition-colors duration-300 flex items-center group">
                      Read more
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-12 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay informed with our newsletter
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights, trends, and updates delivered directly to your inbox. Join our community of industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
              />
              <Button 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
