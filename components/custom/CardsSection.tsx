'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';

export function CardsSection({ locale }: { locale: string }) {
  const cards = [
    {
      id: 1,
      title: "Advanced Analytics",
      description: "Powerful analytics dashboard for real-time insights and data-driven decisions",
      backgroundColor: "from-red-500 to-pink-600",
      buttonText: "Explore Analytics",
      buttonUrl: "/analytics",
      featuredText: "Real-time Data",
      featuredSubtitle: "Track everything",
      icon: "📊"
    },
    {
      id: 2,
      title: "Cloud Storage",
      description: "Secure cloud storage with unlimited scalability and automatic backups",
      backgroundColor: "from-green-500 to-emerald-600",
      buttonText: "Get Started",
      buttonUrl: "/storage",
      featuredText: "Unlimited Space",
      featuredSubtitle: "Store anything",
      icon: "☁️"
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with your team members using our advanced tools",
      backgroundColor: "from-purple-500 to-indigo-600",
      buttonText: "Try Now",
      buttonUrl: "/collaboration",
      featuredText: "Work Together",
      featuredSubtitle: "Better results",
      icon: "👥"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock customer support for peace of mind and quick assistance",
      backgroundColor: "from-orange-500 to-red-600",
      buttonText: "Contact Us",
      buttonUrl: "/support",
      featuredText: "Always Here",
      featuredSubtitle: "Help anytime",
      icon: "🎯"
    }
  ];

  return (
    <div className="py-20 bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your growth and streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 hover:transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(135deg, ${card.backgroundColor.split(' ').join(', ')})`
              }}
            >
              {/* Card Content */}
              <div className="relative h-full bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Featured Badge */}
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    <span className="text-xs font-bold text-white">{card.featuredText}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{card.featuredSubtitle}</p>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold transition-all duration-300"
                >
                  {card.buttonText}
                </Button>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Explore All Features
          </Button>
        </div>
      </Container>
    </div>
  );
}
