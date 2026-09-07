/**
 * Practical Exam Simulator - Grade XII
 */

import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import PythonEditor from '@components/Lab/PythonEditor';
import SQLEditor from '@components/Lab/SQLEditor';
import OutputPanel from '@components/Lab/OutputPanel';
import TableViewer from '@components/Lab/TableViewer';

const GradeXIIPracticalPage: React.FC = () => {
  const [stage, setStage] = useState<1 | 2>(1);
  const [pythonCode, setPythonCode] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-6">
          <div>
            <h1 className="text-3xl font-bold">Grade XII Practical Examination</h1>
            <p className="text-green-100 mt-1">AKU-EB Computer Science</p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold font-mono ${
              timeRemaining < 600 ? 'text-red-400' : 'text-white'
            }`}>
              {formatTime(timeRemaining)}
            </div>
            <p className="text-green-100 text-sm mt-1">Time Remaining</p>
          </div>
        </div>

        {/* Stage tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {[
            { num: 1, label: 'Python Programming' },
            { num: 2, label: 'SQL Database' },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setStage(s.num as 1 | 2)}
              className={`px-6 py-3 font-semibold transition-colors ${
                stage === s.num
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Stage {s.num}: {s.label}
            </button>
          ))}
        </div>

        {/* Stage 1: Python */}
        {stage === 1 && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">🎯 Python Problem</h2>
              <p className="text-gray-800 mb-4">
                Write a Python program using functions and dictionaries:
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Create a dictionary of student rolls and marks</li>
                <li>Write a function to calculate average marks</li>
                <li>Display students with above-average marks</li>
                <li>Use proper formatting and comments</li>
              </ul>
              <div className="mt-4 bg-white border border-blue-200 rounded p-3 text-sm text-gray-600">
                <strong>Marks:</strong> 25 | <strong>Constructs:</strong> dictionaries, functions, loops
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PythonEditor value={pythonCode} onChange={setPythonCode} />
              <OutputPanel output="" />
            </div>

            <button
              onClick={() => setStage(2)}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Next: SQL Stage →
            </button>
          </div>
        )}

        {/* Stage 2: SQL */}
        {stage === 2 && (
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">🗄️ SQL Problem</h2>
              <p className="text-gray-800 mb-4">
                Write SQL queries for:
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>CREATE TABLE for Student records</li>
                <li>INSERT sample data</li>
                <li>SELECT with WHERE clause</li>
                <li>ORDER BY and aggregate functions</li>
              </ul>
              <div className="mt-4 bg-white border border-green-200 rounded p-3 text-sm text-gray-600">
                <strong>Marks:</strong> 25 | <strong>Topics:</strong> DDL, DML, DQL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SQLEditor value={sqlQuery} onChange={setSqlQuery} />
              <TableViewer results={[]} />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStage(1)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                ← Back to Python
              </button>
              <button
                onClick={() => setSubmitted(true)}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                🎯 Submit Examination
              </button>
            </div>
          </div>
        )}

        {/* Submission */}
        {submitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-green-600 mb-3">✅ Submitted</h3>
              <p className="text-gray-800 mb-4">
                Your practical examination has been submitted successfully.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GradeXIIPracticalPage;
