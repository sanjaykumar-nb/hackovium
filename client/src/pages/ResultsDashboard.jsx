import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, ArrowLeft, ChevronDown } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Cell,
} from 'recharts';
import TimelineChart from '../components/TimelineChart';
import ComparisonCard from '../components/ComparisonCard';
import StoryMode from '../components/StoryMode';
import RecommendationCard from '../components/RecommendationCard';
import '../styles/ResultsDashboard.css';

const ResultsDashboard = ({ results, onModify }) => {
  const [expandedRisks, setExpandedRisks] = useState({});

  const toggleRisk = (option) => {
    setExpandedRisks(prev => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Prepare chart data
  const careerYearly = {
    optionA: results.career.optionA.yearly,
    optionB: results.career.optionB.yearly,
  };

  const financeYearly = {
    optionA: results.finance.optionA.yearly,
    optionB: results.finance.optionB.yearly,
  };

  // Prepare comparison data for radar chart
  const comparisonData = [
    {
      category: 'Career Growth',
      A: results.career.optionA.score,
      B: results.career.optionB.score,
    },
    {
      category: 'Financial',
      A: results.finance.optionA.score,
      B: results.finance.optionB.score,
    },
    {
      category: 'Lifestyle',
      A: results.lifestyle.optionA.happiness,
      B: results.lifestyle.optionB.happiness,
    },
    {
      category: 'Risk',
      A: 100 - results.risk.optionA.riskScore,
      B: 100 - results.risk.optionB.riskScore,
    },
    {
      category: 'Flexibility',
      A: results.lifestyle.optionA.flexibility,
      B: results.lifestyle.optionB.flexibility,
    },
  ];

  return (
    <div className="results-dashboard">
      {/* Header */}
      <motion.header
        className="results-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <button className="back-btn" onClick={onModify}>
                <ArrowLeft size={20} /> Modify
              </button>
              <h1>Future Simulation Results</h1>
              <p>{results.userProfile.name}'s Decision Analysis</p>
            </div>
            <div className="header-right">
              <button className="btn btn-secondary">
                <Download size={20} /> Export
              </button>
              <button className="btn btn-secondary">
                <Share2 size={20} /> Share
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="results-content container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
      >
        {/* Recommendation Section */}
        <motion.section
          className="section recommendation-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <RecommendationCard recommendation={results.recommendation} />
        </motion.section>

        {/* Comparison Overview */}
        <motion.section
          className="section comparison-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Detailed Comparison</h2>
          <div className="comparison-grid">
            <ComparisonCard
              title="Option A"
              subtitle={results.userProfile.optionA}
              career={results.career.optionA}
              finance={results.finance.optionA}
              lifestyle={results.lifestyle.optionA}
              risk={results.risk.optionA}
              type="A"
            />
            <ComparisonCard
              title="Option B"
              subtitle={results.userProfile.optionB}
              career={results.career.optionB}
              finance={results.finance.optionB}
              lifestyle={results.lifestyle.optionB}
              risk={results.risk.optionB}
              type="B"
            />
          </div>
        </motion.section>

        {/* Radar Chart Comparison */}
        <motion.section
          className="section radar-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Multi-Dimensional Comparison</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={comparisonData}>
                <PolarGrid stroke="rgba(0, 212, 255, 0.2)" />
                <PolarAngleAxis dataKey="category" tick={{ fill: '#b0b0b0', fontSize: 12 }} />
                <PolarRadiusAxis tick={{ fill: '#b0b0b0', fontSize: 12 }} />
                <Radar
                  name="Option A"
                  dataKey="A"
                  stroke="#00d4ff"
                  fill="#00d4ff"
                  fillOpacity={0.25}
                />
                <Radar
                  name="Option B"
                  dataKey="B"
                  stroke="#ec4899"
                  fill="#ec4899"
                  fillOpacity={0.25}
                />
                <Legend
                  wrapperStyle={{
                    color: '#b0b0b0',
                    paddingTop: '20px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* Career Growth Timeline */}
        <motion.section
          className="section timeline-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>5-Year Career Trajectory</h2>
          <TimelineChart data={careerYearly} type="career" />
        </motion.section>

        {/* Financial Projection */}
        <motion.section
          className="section financial-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Financial Projection (5 Years)</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={[
                  {
                    year: 1,
                    A: financeYearly.optionA[0].salary,
                    B: financeYearly.optionB[0].salary,
                  },
                  {
                    year: 2,
                    A: financeYearly.optionA[1].salary,
                    B: financeYearly.optionB[1].salary,
                  },
                  {
                    year: 3,
                    A: financeYearly.optionA[2].salary,
                    B: financeYearly.optionB[2].salary,
                  },
                  {
                    year: 4,
                    A: financeYearly.optionA[3].salary,
                    B: financeYearly.optionB[3].salary,
                  },
                  {
                    year: 5,
                    A: financeYearly.optionA[4].salary,
                    B: financeYearly.optionB[4].salary,
                  },
                ]}
              >
                <CartesianGrid stroke="rgba(0, 212, 255, 0.2)" />
                <XAxis dataKey="year" stroke="#b0b0b0" />
                <YAxis stroke="#b0b0b0" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(26, 26, 46, 0.9)',
                    border: '1px solid #00d4ff',
                    borderRadius: '8px',
                  }}
                  formatter={val => `₹${(val / 100000).toFixed(1)}L`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="A"
                  name="Option A"
                  stroke="#00d4ff"
                  strokeWidth={3}
                  dot={{ fill: '#00d4ff', r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="B"
                  name="Option B"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* Future Stories */}
        <motion.section
          className="section story-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Your Possible Futures</h2>
          <StoryMode
            optionAStory={results.story.optionAStory}
            optionBStory={results.story.optionBStory}
            optionA={results.userProfile.optionA}
            optionB={results.userProfile.optionB}
          />
        </motion.section>

        {/* Risk Analysis */}
        <motion.section
          className="section risk-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Risk & Uncertainty Analysis</h2>
          <div className="risk-grid">
            <div className="risk-card card">
              <h3>Option A: {results.userProfile.optionA}</h3>
              <div className="risk-score">
                <div className="risk-number">{results.risk.optionA.riskScore}</div>
                <div className="risk-label">Risk Score</div>
              </div>
              <p className="risk-description">{results.risk.optionA.summary}</p>

              <button
                className="expand-btn"
                onClick={() => toggleRisk('A')}
              >
                {expandedRisks.A ? 'Hide' : 'Show'} Details <ChevronDown size={16} />
              </button>

              {expandedRisks.A && (
                <motion.div
                  className="risk-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="risk-list">
                    <h4>Main Risks:</h4>
                    <ul>
                      {results.risk.optionA.mainRisks.map((risk, i) => (
                        <li key={i}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="risk-list">
                    <h4>Mitigation Strategies:</h4>
                    <ul>
                      {results.risk.optionA.mitigation.map((mit, i) => (
                        <li key={i}>• {mit}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="risk-card card">
              <h3>Option B: {results.userProfile.optionB}</h3>
              <div className="risk-score">
                <div className="risk-number">{results.risk.optionB.riskScore}</div>
                <div className="risk-label">Risk Score</div>
              </div>
              <p className="risk-description">{results.risk.optionB.summary}</p>

              <button
                className="expand-btn"
                onClick={() => toggleRisk('B')}
              >
                {expandedRisks.B ? 'Hide' : 'Show'} Details <ChevronDown size={16} />
              </button>

              {expandedRisks.B && (
                <motion.div
                  className="risk-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="risk-list">
                    <h4>Main Risks:</h4>
                    <ul>
                      {results.risk.optionB.mainRisks.map((risk, i) => (
                        <li key={i}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="risk-list">
                    <h4>Mitigation Strategies:</h4>
                    <ul>
                      {results.risk.optionB.mitigation.map((mit, i) => (
                        <li key={i}>• {mit}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.section
          className="section footer-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Ready to Make Your Decision?</h2>
            <p>You can modify parameters and run the simulation again anytime.</p>
            <button className="btn btn-primary" onClick={onModify}>
              Simulate Again with Different Parameters
            </button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ResultsDashboard;
