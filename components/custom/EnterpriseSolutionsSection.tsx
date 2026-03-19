'use client';

import React from 'react';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function EnterpriseSolutionsSection({ 
  locale, 
  videoSource 
}: { 
  locale: string; 
  videoSource?: string; 
}) {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation<HTMLDivElement>();
  const { ref: card4Ref, isVisible: card4Visible } = useScrollAnimation<HTMLDivElement>();
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Debug logging
  React.useEffect(() => {
    console.log('EnterpriseSolutionsSection mounted');
    console.log('Video source:', videoSource);
    console.log('Video source type:', typeof videoSource);
    console.log('Is Pexels URL:', videoSource?.includes('pexels.com'));
    
    // Try to manually play video after component mounts
    if (videoRef.current && videoSource) {
      setTimeout(() => {
        console.log('Attempting to play video manually');
        videoRef.current?.play().then(() => {
          console.log('Video play() succeeded');
        }).catch((error) => {
          console.error('Video play() failed:', error);
        });
      }, 1000);
    }
  }, [videoSource]);

  const solutions = [
    {
      id: 1,
      title: "Education",
      description: "Transform learning environments with smart infrastructure",
      backgroundImage: `url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?_gl=1*1jj8tgk*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjEwOTYkajQ5JGwwJGgw')`,
      overlayColor: "from-orange-600/30 to-orange-800/30"
    },
    {
      id: 2,
      title: "Hospitality",
      description: "Enhance guest experiences with connected solutions",
      backgroundImage: `url('https://images.pexels.com/photos/3770107/pexels-photo-3770107.jpeg?_gl=1*16sdpkq*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjExNTQkajU5JGwwJGgw')`,
      overlayColor: "from-orange-600/30 to-orange-800/30"
    },
    {
      id: 3,
      title: "Real Estate",
      description: "Modernize properties with intelligent systems",
      backgroundImage: `url('https://images.pexels.com/photos/225693/pexels-photo-225693.jpeg?_gl=1*19t3oni*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjExOTQkajE5JGwwJGgw')`,
      overlayColor: "from-orange-600/30 to-orange-800/30"
    },
    {
      id: 4,
      title: "Utility",
      description: "Optimize utility management with smart networks",
      backgroundImage: `url('https://images.pexels.com/photos/5309574/pexels-photo-5309574.jpeg?_gl=1*1y4tud*_ga*MTU5NjA1MTI5Ny4xNzczOTA2ODcz*_ga_8JE65Q40S6*czE3NzM5MjA4OTMkbzMkZzEkdDE3NzM5MjA5ODAkajYwJGwwJGgw')`,
      overlayColor: "from-orange-600/30 to-orange-800/30"
    }
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
  const cardVisibilities = [card1Visible, card2Visible, card3Visible, card4Visible];

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Actual Video Element */}
          {videoSource && (
            <>
              {/* Check if it's a Pexels URL */}
              {videoSource.includes('pexels.com') ? (
                <iframe
                  className="absolute inset-0 w-full h-full opacity-50"
                  src={`https://player.vimeo.com/video/3129957?autoplay=1&loop=1&muted=1&background=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                />
              ) : (
                <>
                  {console.log('Rendering video element with source:', videoSource)}
                  <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      videoLoaded ? 'opacity-70' : 'opacity-50'
                    }`}
                    style={{ zIndex: 1 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    onError={(e) => {
                      console.error('Video error:', e);
                      console.error('Video source:', videoSource);
                      console.error('Error code:', (e.target as HTMLVideoElement).error?.code);
                      console.error('Error message:', (e.target as HTMLVideoElement).error?.message);
                    }}
                    onLoadStart={() => {
                      console.log('Video loading started:', videoSource);
                      setVideoLoaded(false);
                    }}
                    onLoadedMetadata={(e) => {
                      console.log('Video metadata loaded:', videoSource);
                      const video = e.target as HTMLVideoElement;
                      console.log('Video duration:', video.duration);
                      console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
                    }}
                    onCanPlay={() => {
                      console.log('Video can play:', videoSource);
                      setVideoLoaded(true);
                    }}
                    onLoadedData={() => {
                      console.log('Video data loaded:', videoSource);
                      setVideoLoaded(true);
                    }}
                    onPlay={() => {
                      console.log('Video started playing:', videoSource);
                    }}
                    onVolumeChange={() => {
                      console.log('Video volume changed:', videoSource);
                    }}
                  >
                    <source src={videoSource} type="video/mp4" />
                    {videoSource?.includes('.mp4') && <source src={videoSource.replace('.mp4', '.webm')} type="video/webm" />}
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
            </>
          )}
          {/* Animated Globe/Nodes Visualization */}
          <div className="relative w-full h-full" style={{ zIndex: 2 }}>
            {/* Central Globe */}
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
              <div className="relative w-full h-full">
                {/* Globe Circle */}
                <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border-2 border-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-8 border border-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Node Points */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(45deg)' }}>
                  <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="2" className="animate-pulse" />
                  <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </svg>
              </div>
            </div>
            
            {/* Floating Network Nodes */}
            <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute bottom-20 left-20 w-24 h-24 opacity-25">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
                <div className="absolute inset-4 border border-pink-400/30 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute top-1/3 right-1/3 w-20 h-20 opacity-20">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border border-green-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Particle Effects */}
            <div className="absolute top-10 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '6s' }}></div>
          </div>
        </div>
        
        {/* Overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/95 via-gray-50/90 to-gray-50/95"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Large Image with Overlay */}
          <div 
            ref={leftRef}
            className={`relative transition-all duration-1000 ease-out ${
              leftVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div className="aspect-[4/5] relative bg-gray-800">
                <img 
                  src="https://gxgroup.s3.ap-south-1.amazonaws.com/images/product-category/c6dfc04322528c205e210eba4bf5ba20.jpg" 
                  alt="Intelligent Network Solutions"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Intelligent Network Solutions
                  </h2>
                  <Button 
                    variant="primary"
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2">▶</span>
                    Watch video
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content and Cards */}
          <div 
            ref={rightRef}
            className={`transition-all duration-1000 ease-out delay-300 ${
              rightVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Header Content */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise solutions reimagined with
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ml-2">
                  Advanced portfolio
                </span>
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Discover our comprehensive suite of enterprise solutions designed to transform your business infrastructure and drive digital innovation.
              </p>
              <Button 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Discover
              </Button>
            </div>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  ref={cardRefs[index]}
                  className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group h-48 ${
                    cardVisibilities[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: cardVisibilities[index] ? `${600 + index * 100}ms` : '0ms',
                    backgroundImage: solution.backgroundImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.overlayColor} group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {solution.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-white/90 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
