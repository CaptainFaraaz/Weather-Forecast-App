import React from 'react';
import './UnitToggle.css';

const UnitToggle = ({ currentUnit, onToggle }) => {
  return (
    <div className="unit-toggle">
      <button 
        className={`toggle-btn ${currentUnit === 'metric' ? 'active' : ''}`}
        onClick={() => onToggle('metric')}
      >
        °C
      </button>
      <button 
        className={`toggle-btn ${currentUnit === 'imperial' ? 'active' : ''}`}
        onClick={() => onToggle('imperial')}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
