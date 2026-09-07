/**
 * Variable Inspector Component - Shows variable values during execution
 */

import React from 'react';

interface VariableInspectorProps {
  variables: Record<string, any>;
}

const VariableInspector: React.FC<VariableInspectorProps> = ({ variables }) => {
  const entries = Object.entries(variables);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-mono text-sm p-4">
        <div className="font-bold">🔍 Variable Inspector</div>
        {entries.length === 0 ? (
          <div className="text-purple-100 text-xs mt-2 italic">No variables yet</div>
        ) : (
          <div className="mt-2 space-y-2">
            {entries.map(([name, value]) => (
              <div key={name} className="text-purple-100 flex justify-between gap-4">
                <span className="font-semibold text-purple-200">{name}</span>
                <span className="text-right font-mono">
                  {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VariableInspector;
