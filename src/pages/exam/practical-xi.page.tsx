/**
 * Practical Exam Simulator - Grade XI
 */

import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import PythonEditor from '@components/Lab/PythonEditor';
import OutputPanel from '@components/Lab/OutputPanel';

const GradeXIPracticalPage: React.FC = () => {
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 hours in minutes
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Timer
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

  const handleRun = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput('Code executed successfully');
      setIsRunning(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with timer */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <div>
            <h1 className="text-3xl font-bold">Grade XI Practical Examination</h1>
            <p className="text-blue-100 mt-1">AKU-EB Computer Science</p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold font-mono ${
              timeRemaining < 600 ? 'text-red-400' : 'text-white'
            }`}>
              {formatTime(timeRemaining)}
            </div>
            <p className="text-blue-100 text-sm mt-1">Time Remaining</p>
          </div>
        </div>

        {/* Stage tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {[
            { num: 1, label: 'Python Programming' },
            { num: 2, label: 'Output Verification' },
            { num: 3, label: 'Algorithm & Flowchart' },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setStage(s.num as 1 | 2 | 3)}
              className={`px-6 py-3 font-semibold transition-colors ${
                stage === s.num
                  ? 'border-b-2 border-blue-600 text-blue-600'
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
              <h2 className="text-xl font-bold mb-3">🎯 Problem Statement</h2>
              <p className="text-gray-800 mb-4">
                Write a Python program that:
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Takes input of numbers from the user until -1 is entered</li>
                <li>Skips multiples of 3 (use continue)</li>
                <li>Counts how many numbers were printed</li>
                <li>Displays the count at the end</li>
              </ul>
              <div className="mt-4 bg-white border border-blue-200 rounded p-3 text-sm text-gray-600">
                <strong>Marks:</strong> 20 | <strong>Time Limit:</strong> 60 minutes | <strong>Constructs:</strong> for/while, continue, input, print
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <PythonEditor value={code} onChange={setCode} />
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                >
                  {isRunning ? '⏳ Running...' : '▶️ Run Code'}
                </button>
              </div>
              <OutputPanel output={output} />
            </div>

            <button
              onClick={() => setStage(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Next: Verify Output →
            </button>
          </div>
        )}

        {/* Stage 2: Output Verification */}
        {stage === 2 && (
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">✅ Output Verification</h2>
              <p className="text-gray-800 mb-4">
                Verify your output for the given test cases:
              </p>
              <div className="space-y-3">
                <div className="bg-white border border-green-200 rounded p-3">
                  <p className="font-mono text-sm text-gray-600">
                    <strong>Test 1:</strong> Input: 1, 2, 3, 4, 5, -1
                  </p>
                  <p className="font-mono text-sm text-green-700 mt-1">
                    Expected: Numbers printed: 1, 2, 4, 5 (Count: 4)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStage(1)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                ← Back to Code
              </button>
              <button
                onClick={() => setStage(3)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Next: Algorithm & Flowchart →
              </button>
            </div>
          </div>
        )}

        {/* Stage 3: Algorithm & Flowchart */}
        {stage === 3 && (
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">📊 Algorithm & Flowchart</h2>
              <p className="text-gray-800 mb-4">
                Describe the algorithm and draw a flowchart for your solution.
              </p>
              <textarea
                placeholder="Write your algorithm here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm h-48"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStage(2)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                🎯 Submit Examination
              </button>
            </div>
          </div>
        )}

        {/* Submission confirmation */}
        {submitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-green-600 mb-3">✅ Submission Successful</h3>
              <p className="text-gray-800 mb-4">
                Your examination has been submitted. Your work will be evaluated by the examiner.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GradeXIPracticalPage;
