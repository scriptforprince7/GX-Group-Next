'use client';

import React from 'react';
import { Container } from '@/components/container';

export function TestimonialsSection({ locale }: { locale: string }) {
  const testimonials = [
    {
      id: 1,
      quote: "LaunchPad transformed how we handle our digital infrastructure. The performance is incredible and the support team is amazing.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 2,
      quote: "We've tried many platforms, but LaunchPad stands out. The scalability and reliability are exactly what our growing business needed.",
      author: "Michael Chen",
      role: "Founder",
      company: "StartupHub",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 3,
      quote: "The best decision we made was switching to LaunchPad. Our deployment time went from hours to minutes. Absolutely game-changing!",
      author: "Emily Rodriguez",
      role: "VP Engineering",
      company: "Digital Innovations",
      avatar: "👩‍🔬",
      rating: 5
    },
    {
      id: 4,
      quote: "LaunchPad's analytics and monitoring tools have given us insights we never had before. It's like having a crystal ball for our infrastructure.",
      author: "David Kim",
      role: "DevOps Lead",
      company: "CloudSystems Inc",
      avatar: "👨‍🔧",
      rating: 5
    },
    {
      id: 5,
      quote: "The security features and compliance support made our legal team happy. Finally, a platform that checks all the boxes.",
      author: "Lisa Thompson",
      role: "Security Director",
      company: "FinanceFlow",
      avatar: "👩‍⚖️",
      rating: 5
    },
    {
      id: 6,
      quote: "From startup to enterprise, LaunchPad grew with us. The platform scales seamlessly and the cost predictability is fantastic.",
      author: "James Wilson",
      role: "CEO",
      company: "GrowthLabs",
      avatar: "👨‍✈️",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust LaunchPad for their critical business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
