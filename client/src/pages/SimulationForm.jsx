import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import axios from 'axios';
import AgentProgressPanel from '../components/AgentProgressPanel';
import '../styles/SimulationForm.css';

const SimulationForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [agentProgress, setAgentProgress] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    age: 25,
    currentSituation: '',
    optionA: '',
    optionB: '',
    goals: '',
    riskTolerance: 5,
    timeHorizon: 5,
    stressSensitivity: 5,
    financialPriority: 'medium',
    careerPriority: 'medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handlePriorityChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.currentSituation || !formData.optionA || !formData.optionB) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setAgentProgress({
      career: 'analyzing',
      finance: 'analyzing',
      lifestyle: 'analyzing',
      risk: 'analyzing',
    });

    try {
      // Call the backend /simulate endpoint
      const response = await axios.post('http://localhost:5000/api/simulate', {
        name: formData.name,
        age: formData.age,
        currentSituation: formData.currentSituation,
        optionA: formData.optionA,
        optionB: formData.optionB,
        goals: formData.goals,
        riskTolerance: formData.riskTolerance,
        timeHorizon: formData.timeHorizon,
        stressSensitivity: formData.stressSensitivity,
        financialPriority: formData.financialPriority,
        careerPriority: formData.careerPriority,
      });

      // Update progress - agents completed
      setAgentProgress({
        career: 'completed',
        finance: 'completed',
        lifestyle: 'completed',
        risk: 'completed',
        story: 'completed',
        recommendation: 'completed',
      });

      // Give a moment for the UI to show completion
      setTimeout(() => {
        onSubmit(response.data);
      }, 1000);
    } catch (error) {
      console.error('Simulation error:', error);
      alert('Error running simulation. Please check the server is running.');
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="simulation-form-page">
      {loading && <AgentProgressPanel progress={agentProgress} />}

      <motion.div
        className={`form-container ${loading ? 'loading' : ''}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="form-header">
          {!loading && (
            <button className="back-btn" onClick={() => window.location.href = '/'}>
              <ArrowLeft size={24} /> Back
            </button>
          )}
          <h1>Simulation Setup</h1>
          {!loading && (
            <p className="form-progress">Step {step} of 3</p>
          )}
        </div>

        {!loading && (
          <div className="form-content">
            {step === 1 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2>About You</h2>

                <div className="form-group">
                  <label>Name or Nickname *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="What should we call you?"
                  />
                </div>

                <div className="form-group">
                  <label>Current Age</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      name="age"
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={e => handleInputChange(e)}
                      className="slider"
                    />
                    <span className="slider-value">{formData.age} years</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Situation *</label>
                  <textarea
                    name="currentSituation"
                    value={formData.currentSituation}
                    onChange={handleInputChange}
                    placeholder="e.g., Software engineer with 3 years experience, working at a startup..."
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label>Goals & Priorities</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="e.g., Want to learn new skills, build wealth, maintain work-life balance..."
                    rows="3"
                  />
                </div>

                <div className="form-actions">
                  <button className="btn btn-secondary" onClick={() => window.location.href = '/'}>
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2>Your Decision</h2>

                <div className="form-group">
                  <label>Option A *</label>
                  <input
                    type="text"
                    name="optionA"
                    value={formData.optionA}
                    onChange={handleInputChange}
                    placeholder="e.g., Join a FAANG company with high salary"
                  />
                </div>

                <div className="form-group">
                  <label>Option B *</label>
                  <input
                    type="text"
                    name="optionB"
                    value={formData.optionB}
                    onChange={handleInputChange}
                    placeholder="e.g., Start my own tech startup"
                  />
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2>Preferences & Priorities</h2>

                <div className="form-group">
                  <label>Risk Tolerance</label>
                  <div className="slider-container">
                    <span className="slider-label">Conservative</span>
                    <input
                      type="range"
                      name="riskTolerance"
                      min="1"
                      max="10"
                      value={formData.riskTolerance}
                      onChange={e => handleSliderChange('riskTolerance', e.target.value)}
                      className="slider"
                    />
                    <span className="slider-label">Aggressive</span>
                  </div>
                  <p className="slider-value">Level: {formData.riskTolerance}/10</p>
                </div>

                <div className="form-group">
                  <label>Stress Sensitivity</label>
                  <div className="slider-container">
                    <span className="slider-label">Not Sensitive</span>
                    <input
                      type="range"
                      name="stressSensitivity"
                      min="1"
                      max="10"
                      value={formData.stressSensitivity}
                      onChange={e => handleSliderChange('stressSensitivity', e.target.value)}
                      className="slider"
                    />
                    <span className="slider-label">Very Sensitive</span>
                  </div>
                  <p className="slider-value">Level: {formData.stressSensitivity}/10</p>
                </div>

                <div className="form-group">
                  <label>Priority: Career Growth</label>
                  <div className="priority-buttons">
                    {['low', 'medium', 'high'].map(val => (
                      <button
                        key={val}
                        className={`priority-btn ${formData.careerPriority === val ? 'active' : ''}`}
                        onClick={() => handlePriorityChange('careerPriority', val)}
                      >
                        {val.charAt(0).toUpperCase() + val.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Priority: Financial Security</label>
                  <div className="priority-buttons">
                    {['low', 'medium', 'high'].map(val => (
                      <button
                        key={val}
                        className={`priority-btn ${formData.financialPriority === val ? 'active' : ''}`}
                        onClick={() => handlePriorityChange('financialPriority', val)}
                      >
                        {val.charAt(0).toUpperCase() + val.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    <Send size={20} /> Simulate Future
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SimulationForm;
