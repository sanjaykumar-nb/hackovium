import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SimulationForm from './pages/SimulationForm';
import ResultsDashboard from './pages/ResultsDashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // landing, form, results
  const [simulationResults, setSimulationResults] = useState(null);

  const handleStartSimulation = () => {
    setCurrentPage('form');
  };

  const handleFormSubmit = (results) => {
    setSimulationResults(results);
    setCurrentPage('results');
  };

  const handleBackToForm = () => {
    setCurrentPage('form');
  };

  return (
    <div className="App">
      {currentPage === 'landing' && (
        <LandingPage onStart={handleStartSimulation} />
      )}
      {currentPage === 'form' && (
        <SimulationForm onSubmit={handleFormSubmit} />
      )}
      {currentPage === 'results' && simulationResults && (
        <ResultsDashboard results={simulationResults} onModify={handleBackToForm} />
      )}
    </div>
  );
}

export default App;
