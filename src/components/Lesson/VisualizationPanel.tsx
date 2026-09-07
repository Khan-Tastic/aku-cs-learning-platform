/**
 * Visualization Panel - Shows code execution animation
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VisualizationPanelProps {
  code: string;
}

const VisualizationPanel: React.FC<VisualizationPanelProps> = ({ code }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);

  // Demo animation steps
  const steps = [
    { line: 0, description: 'i = 0' },
    { line: 1, description: 'print(0)' },
    { line: 0, description: 'i = 1' },
    { line: 1, description: 'print(1)' },
    { line: 0, description: 'i = 2' },
    { line: 1, description: 'print(2)' },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setStep(currentStep);
      }
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-semibold transition-colors"
        >
          ▶ Play
        </button>
        <button
          onClick={() => setStep(0)}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold transition-colors"
        >
          ⟲ Reset
        </button>
      </div>

      {/* Code with highlight */}
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
        <div className={step === 0 ? 'bg-blue-900 rounded' : ''}>
          i = 0
        </div>
        <div className={step === 1 ? 'bg-blue-900 rounded' : ''} style={{ paddingLeft: '1rem' }}>
          print(i)
        </div>
      </div>

      {/* Output simulation */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Output:</h4>
        <div className="bg-black text-green-400 rounded-lg p-4 font-mono text-sm h-40 overflow-y-auto">
          {[0, 1, 2].slice(0, Math.floor((step + 1) / 2)).map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Step counter */}
      <div className="text-sm text-gray-600">
        Step {step + 1} of {steps.length}
      </div>
    </div>
  );
};

export default VisualizationPanel;
