/**
 * Sidebar component for curriculum navigation
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useUIStore } from '@store/index';
import { GRADE_XI_CURRICULUM, GRADE_XII_CURRICULUM } from '@types/curriculum';

const Sidebar: React.FC = () => {
  const { sidebarOpen, currentLesson } = useUIStore();
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  if (!sidebarOpen) return null;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <h2 className="text-lg font-bold text-dark">Curriculum</h2>
      </div>

      <nav className="p-4 space-y-2">
        {/* Grade XI */}
        <div className="mb-6">
          <button
            onClick={() => toggleTopic('grade-xi')}
            className="w-full text-left px-3 py-2 rounded-lg font-semibold text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
          >
            📚 Grade XI
          </button>
          {expandedTopics.has('grade-xi') && (
            <div className="ml-2 mt-2 space-y-1 border-l-2 border-blue-200 pl-2">
              {GRADE_XI_CURRICULUM.map((topic) => (
                <TopicItem
                  key={topic.id}
                  topic={topic}
                  isExpanded={expandedTopics.has(topic.id)}
                  onToggle={() => toggleTopic(topic.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Grade XII */}
        <div>
          <button
            onClick={() => toggleTopic('grade-xii')}
            className="w-full text-left px-3 py-2 rounded-lg font-semibold text-sm bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
          >
            📚 Grade XII
          </button>
          {expandedTopics.has('grade-xii') && (
            <div className="ml-2 mt-2 space-y-1 border-l-2 border-green-200 pl-2">
              {GRADE_XII_CURRICULUM.map((topic) => (
                <TopicItem
                  key={topic.id}
                  topic={topic}
                  isExpanded={expandedTopics.has(topic.id)}
                  onToggle={() => toggleTopic(topic.id)}
                />
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

interface TopicItemProps {
  topic: any;
  isExpanded: boolean;
  onToggle: () => void;
}

const TopicItem: React.FC<TopicItemProps> = ({ topic, isExpanded, onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
      >
        <span>{isExpanded ? '▼' : '▶'}</span>
        {topic.title}
      </button>
      {isExpanded && (
        <div className="ml-4 mt-1 space-y-1">
          <Link href={`/learn/${topic.id}`}>
            <a className="block px-3 py-1 rounded text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-800">
              📖 Overview
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
