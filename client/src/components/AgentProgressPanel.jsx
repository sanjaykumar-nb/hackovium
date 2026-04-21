import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader } from 'lucide-react';
import '../styles/AgentProgressPanel.css';

const AgentProgressPanel = ({ progress }) => {
  const agents = [
    { id: 'career', name: 'Career Agent', color: '#00d4ff' },
    { id: 'finance', name: 'Finance Agent', color: '#10b981' },
    { id: 'lifestyle', name: 'Lifestyle Agent', color: '#ec4899' },
    { id: 'risk', name: 'Risk Agent', color: '#f59e0b' },
    { id: 'story', name: 'Story Agent', color: '#a855f7' },
    { id: 'recommendation', name: 'Recommendation Agent', color: '#06b6d4' },
  ];

  const getAgentStatus = (agentId) => {
    return progress[agentId] || 'pending';
  };

  return (
    <div className="agent-progress-overlay">
      <motion.div
        className="progress-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Multi-Agent Simulation Running</h2>

        <div className="agents-list">
          {agents.map((agent, index) => {
            const status = getAgentStatus(agent.id);
            return (
              <motion.div
                key={agent.id}
                className="agent-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="agent-info">
                  <span className="agent-name">{agent.name}</span>
                  {status === 'completed' && (
                    <span className="agent-status completed">
                      <CheckCircle2 size={18} /> Complete
                    </span>
                  )}
                  {status === 'analyzing' && (
                    <span className="agent-status analyzing">
                      <Loader size={18} /> Analyzing
                    </span>
                  )}
                  {status === 'pending' && (
                    <span className="agent-status pending">Pending</span>
                  )}
                </div>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    style={{ backgroundColor: agent.color }}
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        status === 'completed'
                          ? '100%'
                          : status === 'analyzing'
                          ? '50%'
                          : '0%',
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="progress-message">
          <p>Analyzing your future across multiple dimensions...</p>
          <p className="sub-text">This typically takes 30-60 seconds</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AgentProgressPanel;
