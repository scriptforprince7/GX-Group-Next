'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';

export function PricingSection({ locale }: { locale: string }) {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 Projects",
        "10 GB Storage",
        "Basic Analytics",
        "Email Support",
        "API Access"
      ],
      featured: false,
      buttonText: "Start Free"
    },
    {
      name: "Professional",
      price: "$29",
      period: "month", 
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Integrations",
        "Team Collaboration"
      ],
      featured: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Pro",
        "Unlimited Storage",
        "White-label Options",
        "Dedicated Support",
        "Custom Features",
        "SLA Guarantee",
        "On-premise Deployment"
      ],
      featured: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="py-20 bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.featured
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400'
                  : 'bg-gray-900 border border-gray-700 hover:border-cyan-500'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-white'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-white'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-lg ${plan.featured ? 'text-cyan-100' : 'text-gray-400'}`}>
                    /{plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`mb-8 ${plan.featured ? 'text-cyan-100' : 'text-gray-300'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                      plan.featured ? 'bg-white/20' : 'bg-cyan-500/20'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        plan.featured ? 'bg-white' : 'bg-cyan-400'
                      }`}></div>
                    </div>
                    <span className={`text-sm ${plan.featured ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button 
                variant={plan.featured ? "primary" : "outline"}
                size="lg"
                className={`w-full ${
                  plan.featured
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                } font-semibold transition-all duration-300`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom solution? <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Contact our sales team</span>
          </p>
        </div>
      </Container>
    </div>
  );
}
