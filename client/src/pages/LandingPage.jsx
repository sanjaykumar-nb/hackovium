import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, TrendingUp } from 'lucide-react';
import '../styles/LandingPage.css';

const LandingPage = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="landing-page">
      {/* Background Elements */}
      <div className="background-gradient"></div>
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <motion.div className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Zap size={32} className="logo-icon" />
              <span>FUTURE YOU AI</span>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="hero-content">
            <motion.h1 variants={itemVariants} className="hero-title">
              Simulate Your Future
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Stop guessing about major life decisions. Let AI agents analyze your paths,
              compare outcomes, and show you vivid simulations of possible futures.
            </motion.p>

            <motion.button
              variants={itemVariants}
              onClick={onStart}
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Simulation <ArrowRight size={24} />
            </motion.button>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Brain size={28} />
                </div>
                <h3>Multi-Agent Analysis</h3>
                <p>8 AI experts analyze career, finance, lifestyle, and risk simultaneously</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <TrendingUp size={28} />
                </div>
                <h3>5-Year Timeline</h3>
                <p>See year-by-year progression, milestones, and growth projections</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={28} />
                </div>
                <h3>Vivid Narratives</h3>
                <p>Read compelling future stories that bring possibilities to life</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div className="hero-visual" variants={itemVariants}>
            <div className="visualization">
              <div className="agent-preview">
                <div className="agent-item">
                  <div className="agent-dot"></div>
                  <span>Career</span>
                </div>
                <div className="agent-item">
                  <div className="agent-dot"></div>
                  <span>Finance</span>
                </div>
                <div className="agent-item">
                  <div className="agent-dot"></div>
                  <span>Lifestyle</span>
                </div>
              </div>
              <div className="chart-preview">
                <div className="chart-bar bar-1"></div>
                <div className="chart-bar bar-2"></div>
                <div className="chart-bar bar-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="how-it-works"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="steps-grid">
            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <h3>Define Your Choice</h3>
              <p>Tell us about yourself and the two life paths you're comparing.</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <h3>Agents Analyze</h3>
              <p>8 specialized AI agents examine career, finances, lifestyle, and risks.</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>View Your Future</h3>
              <p>See timelines, financial projections, and vivid narratives of both paths.</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <h3>Make Your Decision</h3>
              <p>Get a data-driven recommendation and adjust parameters as needed.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.button
            onClick={onStart}
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Simulation <ArrowRight size={24} />
          </motion.button>
          <p className="cta-text">Free. Instant. Transformative.</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Future You AI. Powered by advanced multi-agent AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
