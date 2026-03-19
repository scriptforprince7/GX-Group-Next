'use client';

import React, { useState } from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';

export function ContactSection({ locale }: { locale: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="py-20 bg-black">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business today. Contact our team for a personalized demo and see how LaunchPad can help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Email</div>
                      <div className="text-cyan-400">hello@launchpad.com</div>
                      <div className="text-gray-400 text-sm">We'll respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Live Chat</div>
                      <div className="text-cyan-400">Available 24/7</div>
                      <div className="text-gray-400 text-sm">Get instant help from our team</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Phone</div>
                      <div className="text-cyan-400">+1 (555) 123-4567</div>
                      <div className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                <h4 className="text-xl font-bold text-white mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-750 rounded-lg text-white hover:text-cyan-400 transition-all duration-300 border border-gray-600 hover:border-cyan-500">
                    📅 Schedule a Demo
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-750 rounded-lg text-white hover:text-cyan-400 transition-all duration-300 border border-gray-600 hover:border-cyan-500">
                    🚀 Start Free Trial
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-750 rounded-lg text-white hover:text-cyan-400 transition-all duration-300 border border-gray-600 hover:border-cyan-500">
                    📚 View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
