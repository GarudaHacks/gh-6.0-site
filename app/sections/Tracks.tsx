'use client';

import { useState, useMemo } from 'react';
import { FaSeedling, FaChevronDown, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { tracksData } from '@/app/data/data';
import { memo } from 'react';
import Container from '../components/Container';

const Tracks = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const expandedTrack = useMemo(() => (expandedIndex !== null ? tracksData[expandedIndex] : null), [expandedIndex]);

  return (
    <Container>
      <div className="flex flex-col items-center py-10 px-5 relative">
        <h2 className="text-3xl font-bold text-white mb-6">OUR TRACKS</h2>
        <div className="flex gap-6 justify-center relative">
          {tracksData.map((track, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-start justify-center p-6 text-white cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                borderRadius: '15px',
                border: '1px solid #FFF',
                background: 'linear-gradient(180deg, rgba(177, 177, 177, 0.20) 0%, rgba(127, 127, 127, 0.60) 100%)',
                backdropFilter: 'blur(2px)',
                width: '320px',
                height: '355px',
              }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{track.title}</h3>
              <p className="text-center text-sm max-w-xs mt-2 text-gray-200">{track.description}</p>
              {expandedIndex !== index && (
                <div className="w-full flex justify-center">
                  <FaChevronDown className="mt-4" size={20} style={{ color: '#FF0068' }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {expandedTrack && (
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
                  width: '1010px',
                  height: '550px',
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
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-white">{expandedTrack.title}</h3>
                <p className="text-left text-sm mt-4 text-gray-200 w-10/12">{expandedTrack.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default memo(Tracks);
