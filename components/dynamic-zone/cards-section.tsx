import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { cn } from '@/lib/utils';

interface Card {
  id: number;
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  featuredText?: string;
  featuredSubtitle?: string;
}

interface Props {
  id: number;
  __component: string;
  title?: string;
  subtitle?: string;
  cards: Card[];
  locale: string;
}

const CardsSection: React.FC<Props> = ({ title, subtitle, cards, locale }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <CardComponent key={card.id} card={card} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardComponent: React.FC<{ card: Card; locale: string }> = ({ card, locale }) => {
  // Determine card styling based on available data
  const hasImage = card.backgroundImage;
  const hasColor = card.backgroundColor;
  const isFeatured = card.featuredText && !card.description;

  return (
    <div
      className={cn(
        'relative rounded-2xl overflow-hidden min-h-[300px] group cursor-pointer transition-all duration-300 hover:scale-105',
        hasColor && 'p-8 flex flex-col justify-between',
        isFeatured && 'flex items-center justify-center text-center'
      )}
      style={{
        backgroundImage: hasImage ? `url(${card.backgroundImage})` : undefined,
        backgroundColor: hasColor ? card.backgroundColor : '#1f2937',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for image cards */}
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      )}

      {/* Card Content */}
      <div className={cn('relative z-10', hasImage && 'p-8 h-full flex flex-col justify-between')}>
        {isFeatured ? (
          // Featured card style (like "1,000,000 units deployed")
          <div>
            {card.featuredText && (
              <div className="text-white">
                <span className="text-3xl sm:text-4xl font-bold block">
                  {card.featuredText.split(' ')[0]}
                </span>
                <span className="text-lg sm:text-xl opacity-80">
                  {card.featuredText.split(' ').slice(1).join(' ')}
                </span>
              </div>
            )}
            {card.featuredSubtitle && (
              <p className="text-gray-300 text-sm mt-2">{card.featuredSubtitle}</p>
            )}
          </div>
        ) : (
          // Regular card style
          <>
            <div>
              {card.title && (
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {card.title}
                </h3>
              )}
              {card.description && (
                <p className="text-gray-200 text-sm leading-relaxed">
                  {card.description}
                </p>
              )}
            </div>
            
            {/* Button */}
            {card.hasButton && (
              <div className="mt-6">
                <button
                  onClick={() => {
                    if (card.buttonUrl) {
                      window.open(card.buttonUrl, '_blank');
                    }
                  }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={card.buttonText || 'Learn more'}
                >
                  <IoIosArrowForward className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { CardsSection };
