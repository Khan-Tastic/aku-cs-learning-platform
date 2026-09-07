/**
 * Output Panel Component
 */

import React from 'react';
import { motion } from 'framer-motion';

interface OutputPanelProps {
  output: string;
  error?: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ output, error }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 text-gray-100 font-mono text-sm p-4 h-64 overflow-y-auto flex flex-col">
        {error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400"
          >
            <div className="text-red-300 font-bold mb-2">❌ Error:</div>
            <div>{error}</div>
          </motion.div>
        ) : output ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 whitespace-pre-wrap break-words"
          >
            {output}
          </motion.div>
        ) : (
          <div className="text-gray-500 italic">Output will appear here...</div>
        )}
      </div>
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 text-xs text-gray-600">
        📊 Output
      </div>
    </div>
  );
};

export default OutputPanel;
