/**
 * Mode bar for switching between Learn, Practice, and Exam modes
 */

import React from 'react';
import { useUIStore } from '@store/index';

const ModeBar: React.FC = () => {
  const { currentMode, setCurrentMode } = useUIStore();

  const modes = [
    { id: 'learn', label: '🎓 Learn', description: 'Full assistance' },
    { id: 'practice', label: '💪 Practice', description: 'Limited hints' },
    { id: 'exam', label: '✏️ Exam', description: 'No assistance' },
  ] as const;

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
      <div className="flex gap-4">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setCurrentMode(mode.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentMode === mode.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            title={mode.description}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeBar;
