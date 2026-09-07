/**
 * Main lesson content component
 */

import React, { useState } from 'react';
import ConceptMicroscope from './ConceptMicroscope';
import WhyEngine from './WhyEngine';
import VisualizationPanel from './VisualizationPanel';

interface LessonContentProps {
  topicId: string;
}

const LessonContent: React.FC<LessonContentProps> = ({ topicId }) => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [showWhy, setShowWhy] = useState(false);

  // Demo lesson content - "Loops in Python"
  const demoLesson = {
    title: 'Understanding Loops in Python',
    hook: {
      question: 'Imagine I ask you to print the numbers from 1 to 100. Would you manually write 100 print() statements?',
      thinking: "Let's think about this...",
    },
    intuition: {
      title: 'The Loop Pattern',
      content: 'A loop is like a repeating action. Just like you repeat brushing each tooth when cleaning your teeth, a loop repeats a block of code multiple times.',
      analogy: 'Think of it like a playlist. Instead of putting every song on a separate page, you have one list that plays each song in order, over and over.',
    },
    visualization: {
      type: 'animation',
      description: 'Watch how a loop executes',
    },
  };

  return (
    <div className="space-y-6">
      {/* Hook section */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">🎯 Problem First</h2>
        <p className="text-lg text-gray-800 mb-4">{demoLesson.hook.question}</p>
        <p className="text-sm text-gray-600 italic">{demoLesson.hook.thinking}</p>
      </div>

      {/* Intuition section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-4">💡 Intuition</h2>
        <p className="text-lg text-gray-700 mb-4">{demoLesson.intuition.content}</p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="font-semibold text-green-900 mb-2">🎵 Analogy:</p>
          <p className="text-green-800">{demoLesson.intuition.analogy}</p>
        </div>
      </div>

      {/* Why engine */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <button
          onClick={() => setShowWhy(!showWhy)}
          className="w-full text-left font-semibold text-lg mb-4 flex items-center justify-between hover:text-blue-600 transition-colors"
        >
          <span>❓ Why Do We Need Loops?</span>
          <span>{showWhy ? '▼' : '▶'}</span>
        </button>
        {showWhy && <WhyEngine concept="loops" />}
      </div>

      {/* Visualization section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-4">🎨 Visualization</h2>
        <VisualizationPanel code="for i in range(5):\n    print(i)" />
      </div>

      {/* Code section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-4">💻 Python Code</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-blue-400">for</div>
            <div>
              <span className="text-blue-400">for</span> i <span className="text-blue-400">in</span> <span className="text-yellow-400">range</span>(<span className="text-green-400">5</span>):
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">print</span>(i)
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-semibold mb-2">Output:</p>
            <div className="bg-gray-100 rounded p-2 font-mono text-gray-800">
              0<br />1<br />2<br />3<br />4
            </div>
          </div>
        </div>
      </div>

      {/* Concept microscope */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-4">🔬 Concept Microscope</h2>
        <p className="text-gray-600 mb-4">Click on any term to understand it deeper:</p>
        <div className="flex flex-wrap gap-2">
          {['for', 'range()', 'in', 'i'].map((term) => (
            <button
              key={term}
              onClick={() => setSelectedConcept(term)}
              className={`px-4 py-2 rounded-lg font-mono font-semibold transition-colors ${
                selectedConcept === term
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {term}
            </button>
          ))}
        </div>
        {selectedConcept && <ConceptMicroscope concept={selectedConcept} />}
      </div>
    </div>
  );
};

export default LessonContent;
