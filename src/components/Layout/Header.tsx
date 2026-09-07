/**
 * Header component with navigation and user info
 */

import React from 'react';
import { useUIStore } from '@store/index';
import { useStudentStore } from '@store/index';

const Header: React.FC = () => {
  const { toggleSidebar, toggleDarkMode } = useUIStore();
  const { student } = useStudentStore();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Toggle sidebar"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-primary">AKU-EB CS Learning Platform</h1>
      </div>

      <div className="flex items-center gap-4">
        {student && (
          <div className="text-sm text-gray-600">
            <p className="font-medium">{student.name}</p>
            <p className="text-xs text-gray-500">Grade {student.grade}</p>
          </div>
        )}

        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Toggle dark mode"
        >
          🌙
        </button>
      </div>
    </header>
  );
};

export default Header;
