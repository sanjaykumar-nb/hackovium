import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Heart, AlertTriangle } from 'lucide-react';
import '../styles/ComparisonCard.css';

const ComparisonCard = ({ title, subtitle, career, finance, lifestyle, risk, type }) => {
  const getOptionColor = () => (type === 'A' ? '#00d4ff' : '#ec4899');

  return (
    <motion.div
      className="comparison-card card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ borderColor: getOptionColor() }}
    >
      <div className="card-header">
        <h3 style={{ color: getOptionColor() }}>Option {type}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>

      <div className="metrics-grid">
        {/* Career Metric */}
        <motion.div className="metric">
          <div className="metric-header">
            <TrendingUp size={20} style={{ color: '#00d4ff' }} />
            <span className="metric-label">Career</span>
          </div>
          <div className="metric-value">{career.score}</div>
          <p className="metric-snippet">{career.summary.substring(0, 60)}...</p>
        </motion.div>

        {/* Finance Metric */}
        <motion.div className="metric">
          <div className="metric-header">
            <Award size={20} style={{ color: '#10b981' }} />
            <span className="metric-label">Financial</span>
          </div>
          <div className="metric-value">{finance.score}</div>
          <p className="metric-snippet">Year 5: ₹{(finance.yearly[4]?.salary / 100000).toFixed(1)}L</p>
        </motion.div>

        {/* Lifestyle Metric */}
        <motion.div className="metric">
          <div className="metric-header">
            <Heart size={20} style={{ color: '#ec4899' }} />
            <span className="metric-label">Lifestyle</span>
          </div>
          <div className="metric-value">{lifestyle.happiness}</div>
          <p className="metric-snippet">Stress: {lifestyle.stress}/100</p>
        </motion.div>

        {/* Risk Metric */}
        <motion.div className="metric">
          <div className="metric-header">
            <AlertTriangle size={20} style={{ color: '#f59e0b' }} />
            <span className="metric-label">Risk</span>
          </div>
          <div className="metric-value">{risk.riskScore}</div>
          <p className="metric-snippet">Volatility: {risk.volatility}%</p>
        </motion.div>
      </div>

      {/* Key Risk/Opportunity */}
      <div className="card-footer">
        <div className="risk-insight">
          <h4>Key Insight</h4>
          <p>{risk.summary}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
