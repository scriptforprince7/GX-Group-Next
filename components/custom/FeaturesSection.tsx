'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';

export function FeaturesSection({ locale }: { locale: string }) {
  const features = [
    {
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure that delivers content at warp speed.",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Scalable Solutions",
      description: "Grow without limits. Our platform scales seamlessly with your business needs from startup to enterprise.",
      icon: "📈",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee. Your data is protected with enterprise-grade encryption.",
      icon: "🔒",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support to ensure your business runs smoothly without any interruptions.",
      icon: "🎯",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows. Get started in minutes, not hours.",
      icon: "🔗",
      color: "from-indigo-400 to-blue-500"
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights with powerful analytics dashboards that help you make data-driven decisions.",
      icon: "📊",
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Modern Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to launch, manage, and scale your digital presence in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust LaunchPad for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
