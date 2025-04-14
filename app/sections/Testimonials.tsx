'use client';

import { useState, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/app/data/testimonials';
import { memo } from 'react';

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showFirstSet, setShowFirstSet] = useState(true);

  const firstSet = testimonialsData.slice(0, 3);
  const secondSet = testimonialsData.slice(3, 6);

  const toggleTestimonials = () => {
    setShowFirstSet((prev) => !prev);
  };

  const expandedTestimonial = useMemo(
    () => (expandedIndex !== null ? testimonialsData[expandedIndex] : null),
    [expandedIndex]
  );

  return (
    <div className="flex flex-col items-center py-10 px-5 relative">
      <h2 className="text-3xl font-bold text-white mb-6">What People Say</h2>
      <div className="relative flex items-center justify-center w-full max-w-5xl overflow-hidden">
        {/* Left Arrow */}
        <motion.button
          className="absolute left-[-80px] p-3 text-white"
          onClick={toggleTestimonials}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft size={35} style={{ color: '#FF0068' }} />
        </motion.button>

        {/* Testimonials Container */}
        <div className="w-full overflow-hidden relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={showFirstSet ? 'firstSet' : 'secondSet'}
              className="flex gap-6 justify-center w-full"
              initial={{ x: showFirstSet ? '100%' : '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: showFirstSet ? '-100%' : '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {(showFirstSet ? firstSet : secondSet).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name + index}
                  className="relative flex flex-col p-6 text-white cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    width: '374px',
                    height: '256px',
                    padding: '24px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '12px',
                    borderRadius: '15px',
                    border: '1px solid #FFF',
                    background: 'linear-gradient(180deg, rgba(177, 177, 177, 0.20) 0%, rgba(127, 127, 127, 0.60) 100%)',
                    backdropFilter: 'blur(2px)',
                  }}
                  onClick={() => setExpandedIndex(index + (showFirstSet ? 0 : 3))}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mb-2" />
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <span className="text-sm text-red-400">{testimonial.role}</span>
                  <p className="text-sm text-gray-200 mt-1">{testimonial.quote}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <motion.button
          className="absolute right-[-80px] p-3 text-white"
          onClick={toggleTestimonials}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight size={35} style={{ color: '#FF0068' }} />
        </motion.button>
      </div>

      <AnimatePresence>
        {expandedTestimonial && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              className="relative flex flex-col items-center justify-center p-10 text-white rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                width: '600px',
                height: '400px',
                border: '1px solid #FFF',
                background: 'linear-gradient(180deg, rgba(177, 177, 177, 0.20) 0%, rgba(127, 127, 127, 0.60) 100%)',
                backdropFilter: 'blur(2px)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setExpandedIndex(null)}
              >
                <FaTimes size={24} style={{ color: '#FF0068' }} />
              </button>
              <img src={expandedTestimonial.image} alt={expandedTestimonial.name} className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-white">{expandedTestimonial.name}</h3>
              <span className="text-md text-red-400">{expandedTestimonial.role}</span>
              <p className="text-md text-gray-200 w-10/12 mt-4">{expandedTestimonial.quote}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(Testimonials);
