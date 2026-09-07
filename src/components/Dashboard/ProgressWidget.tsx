/**
 * Progress widget component
 */

import React from 'react';

interface ProgressWidgetProps {
  title: string;
  progress: number; // 0-100
  color?: string;
}

const ProgressWidget: React.FC<ProgressWidgetProps> = ({
  title,
  progress,
  color = 'bg-blue-600',
}) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="text-sm font-bold text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressWidget;
