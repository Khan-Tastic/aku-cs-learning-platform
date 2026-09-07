/**
 * Concept Microscope - Detailed exploration of individual terms
 */

import React from 'react';

interface ConceptMicroscopeProps {
  concept: string;
}

const ConceptMicroscope: React.FC<ConceptMicroscopeProps> = ({ concept }) => {
  const concepts: Record<string, any> = {
    for: {
      definition: 'A keyword that starts a for loop - used when you know how many times to repeat.',
      syntax: 'for variable in sequence:',
      example: 'for i in range(5): # Repeats 5 times',
      note: 'The indented code block runs once for each item.',
    },
    'range()': {
      definition: 'A function that generates a sequence of numbers.',
      syntax: 'range(start, stop, step)',
      example: 'range(5) # Generates 0, 1, 2, 3, 4',
      note: 'range(5) starts at 0 and stops before 5 (0-4).',
    },
    in: {
      definition: 'A keyword that means "from this collection".',
      syntax: 'for item in collection:',
      example: 'for number in [1, 2, 3]:',
      note: 'It connects the variable to the sequence.',
    },
    i: {
      definition: 'The loop variable - holds the current value in each iteration.',
      syntax: 'for i in range():',
      example: 'i = 0, then 1, then 2, etc.',
      note: 'You can use any variable name (i, num, item, etc.).',
    },
  };

  const content = concepts[concept];

  if (!content) return null;

  return (
    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
      <div>
        <h5 className="font-semibold text-blue-900">📖 Definition</h5>
        <p className="text-blue-800 text-sm">{content.definition}</p>
      </div>

      <div>
        <h5 className="font-semibold text-blue-900">🔧 Syntax</h5>
        <p className="text-blue-800 text-sm font-mono bg-white p-2 rounded border border-blue-300">
          {content.syntax}
        </p>
      </div>

      <div>
        <h5 className="font-semibold text-blue-900">💡 Example</h5>
        <p className="text-blue-800 text-sm font-mono bg-white p-2 rounded border border-blue-300">
          {content.example}
        </p>
      </div>

      <div>
        <h5 className="font-semibold text-blue-900">⭐ Important</h5>
        <p className="text-blue-800 text-sm">{content.note}</p>
      </div>
    </div>
  );
};

export default ConceptMicroscope;
