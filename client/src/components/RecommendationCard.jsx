import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import '../styles/RecommendationCard.css';

const RecommendationCard = ({ recommendation }) => {
  const isWinnerA = recommendation.winner === 'Option A';

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className={`recommendation-card ${isWinnerA ? 'winner-a' : 'winner-b'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Winner Badge */}
      <motion.div
        className="winner-badge"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
      >
        <CheckCircle2 size={32} />
        <span>Recommended</span>
      </motion.div>

      {/* Main Content */}
      <motion.div className="rec-content" variants={contentVariants}>
        <h3 className="rec-title">
          {recommendation.winner} is Your Best Path
        </h3>

        <div className="confidence-score">
          <span className="confidence-label">Confidence:</span>
          <span className="confidence-value">
            {Math.round(recommendation.confidence * 100)}%
          </span>
        </div>

        <p className="rec-reasoning">
          {recommendation.reasoning}
        </p>

        {/* Key Factors */}
        <div className="key-factors">
          <h4>Why This Choice Wins</h4>
          <ul>
            {recommendation.keyFactors?.map((factor, i) => (
              <li key={i}>
                <span className="factor-icon">→</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>

        {/* Tradeoffs */}
        <div className="tradeoffs">
          <h4>
            <AlertCircle size={16} />
            Tradeoffs & Considerations
          </h4>
          <p>{recommendation.tradeoffs}</p>
        </div>

        {/* Conditions */}
        <div className="conditions">
          <h4>When This Might Change</h4>
          <p>{recommendation.conditions}</p>
        </div>
      </motion.div>

      {/* Score Comparison */}
      <motion.div
        className="score-comparison"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="score-item">
          <span className="score-label">Option A</span>
          <div className="score-bar">
            <motion.div
              className="score-fill"
              initial={{ width: 0 }}
              animate={{ width: `${recommendation.finalScore.optionA}%` }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                background: isWinnerA ? '#00d4ff' : '#606060',
              }}
            />
          </div>
          <span className="score-text">{recommendation.finalScore.optionA} / 100</span>
        </div>

        <div className="score-item">
          <span className="score-label">Option B</span>
          <div className="score-bar">
            <motion.div
              className="score-fill"
              initial={{ width: 0 }}
              animate={{ width: `${recommendation.finalScore.optionB}%` }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                background: !isWinnerA ? '#ec4899' : '#606060',
              }}
            />
          </div>
          <span className="score-text">{recommendation.finalScore.optionB} / 100</span>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <div className="disclaimer">
        <p>
          💡 This recommendation is based on data analysis. Ultimately, only you can
          decide what matters most for your life.
        </p>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
