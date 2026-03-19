'use client';

import React from 'react';
import { Container } from '@/components/container';

export function HowItWorksSection({ locale }: { locale: string }) {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds. No credit card required for the free trial.",
      icon: "🚀"
    },
    {
      number: "02", 
      title: "Configure",
      description: "Set up your workspace with our intuitive setup wizard. Customize everything to match your needs.",
      icon: "⚙️"
    },
    {
      number: "03",
      title: "Launch",
      description: "Go live with confidence. Our platform ensures smooth deployment and optimal performance.",
      icon: "🎯"
    },
    {
      number: "04",
      title: "Scale",
      description: "Grow without limits. Our infrastructure scales automatically with your success.",
      icon: "📈"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in minutes. Our streamlined process takes you from signup to success in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-gray-800 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="text-4xl mb-6 relative z-10">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that trust LaunchPad for their digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
