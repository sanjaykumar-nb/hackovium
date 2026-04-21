import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import '../styles/StoryMode.css';

const StoryMode = ({ optionAStory, optionBStory, optionA, optionB }) => {
  const [activeStory, setActiveStory] = useState('A');

  const storyVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="story-mode"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="story-tabs">
        <button
          className={`story-tab ${activeStory === 'A' ? 'active' : ''}`}
          onClick={() => setActiveStory('A')}
        >
          <Book size={18} />
          <span>Option A: {optionA}</span>
        </button>
        <button
          className={`story-tab ${activeStory === 'B' ? 'active' : ''}`}
          onClick={() => setActiveStory('B')}
        >
          <Book size={18} />
          <span>Option B: {optionB}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeStory === 'A' && (
          <motion.div
            key="story-a"
            className="story-content"
            variants={storyVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="story-text">
              {optionAStory}
            </div>
          </motion.div>
        )}

        {activeStory === 'B' && (
          <motion.div
            key="story-b"
            className="story-content"
            variants={storyVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="story-text">
              {optionBStory}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StoryMode;
