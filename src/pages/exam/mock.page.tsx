/**
 * Mock Exam Page
 */

import React, { useState } from 'react';
import Layout from '@components/Layout';
import { motion } from 'framer-motion';

const MockExamPage: React.FC = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<'XI' | 'XII' | null>(null);
  const [selectedType, setSelectedType] = useState<'topic' | 'practice' | 'full' | null>(null);

  const examOptions = [
    {
      type: 'topic' as const,
      label: '📚 Topic-wise Quiz',
      description: 'Test yourself on a single topic',
      duration: 30,
      questions: 10,
    },
    {
      type: 'practice' as const,
      label: '✍️ Practice Paper',
      description: 'Mixed questions from multiple topics',
      duration: 90,
      questions: 25,
    },
    {
      type: 'full' as const,
      label: '🎯 Full Mock Exam',
      description: 'Complete AKU-EB style examination',
      duration: 180,
      questions: 50,
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">📝 Mock Exams & Practice</h1>
          <p className="text-gray-600">
            Test your knowledge with AKU-EB style questions
          </p>
        </div>

        {/* Grade selection */}
        {!selectedGrade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(['XI', 'XII'] as const).map((grade) => (
              <div
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className="card cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">📖 Grade {grade}</h3>
                <p className="text-gray-600 mb-4">
                  {grade === 'XI'
                    ? 'Python basics, algorithms, logic'
                    : 'OOP, data structures, databases'}
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Select →
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Exam type selection */}
        {selectedGrade && !selectedType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <button
              onClick={() => setSelectedGrade(null)}
              className="text-blue-600 hover:text-blue-800 font-semibold mb-4"
            >
              ← Back to grade selection
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examOptions.map((option) => (
                <div
                  key={option.type}
                  onClick={() => setSelectedType(option.type)}
                  className="card cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-2">{option.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <p>⏱️ Duration: {option.duration} minutes</p>
                    <p>📋 Questions: {option.questions}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Start →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Exam started */}
        {selectedGrade && selectedType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-gray-200 p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Grade {selectedGrade} - {selectedType === 'topic' ? 'Topic Quiz' : selectedType === 'practice' ? 'Practice Paper' : 'Full Mock Exam'}
            </h2>
            <p className="text-gray-600 mb-6">
              Exam environment loading...
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedType(null);
                  setSelectedGrade(null);
                }}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
              >
                Back
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors">
                ▶️ Start Exam
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default MockExamPage;
