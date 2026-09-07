/**
 * Why Engine Component - Explains why a concept is needed
 */

import React from 'react';

interface WhyEngineProps {
  concept: string;
}

const WhyEngine: React.FC<WhyEngineProps> = ({ concept }) => {
  const whyContent: Record<string, any> = {
    loops: {
      problem: 'Without loops, you would need to repeat the same code over and over. For 100 items, you would write the same code 100 times.',
      limitation: 'Manually repeating code is:
        • Tedious and error-prone
        • Difficult to maintain
        • Not scalable
        • Makes code hard to read',
      solution: 'Loops automatically repeat code without manual duplication.',
      when: 'Use loops when you need to repeat an action multiple times or process collections of data.',
      whenNot: 'Don\'t use loops for single operations or when you know the exact number and can write it out quickly.',
    },
    functions: {
      problem: 'Without functions, large programs become one giant block of code, making it hard to understand, test, and reuse.',
      limitation: 'Code duplication and maintenance nightmares',
      solution: 'Functions let you organize code into reusable blocks.',
      when: 'Use functions to organize code, avoid duplication, and make programs modular.',
      whenNot: 'A function for a single line of code usually isn\'t necessary.',
    },
  };

  const content = whyContent[concept] || { problem: 'Loading...' };

  return (
    <div className="space-y-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div>
        <h4 className="font-semibold text-yellow-900 mb-2">🚫 The Problem Without It</h4>
        <p className="text-yellow-800 text-sm">{content.problem}</p>
      </div>

      <div>
        <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Limitations</h4>
        <p className="text-yellow-800 text-sm whitespace-pre-line">{content.limitation}</p>
      </div>

      <div>
        <h4 className="font-semibold text-yellow-900 mb-2">✅ The Solution</h4>
        <p className="text-yellow-800 text-sm">{content.solution}</p>
      </div>

      <div>
        <h4 className="font-semibold text-yellow-900 mb-2">📌 When to Use</h4>
        <p className="text-yellow-800 text-sm">{content.when}</p>
      </div>

      <div>
        <h4 className="font-semibold text-yellow-900 mb-2">⛔ When NOT to Use</h4>
        <p className="text-yellow-800 text-sm">{content.whenNot}</p>
      </div>
    </div>
  );
};

export default WhyEngine;
