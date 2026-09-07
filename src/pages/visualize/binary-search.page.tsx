/**
 * Visualizer for algorithms - Binary Search demo
 */

import React, { useState } from 'react';
import Layout from '@components/Layout';
import { motion } from 'framer-motion';

const BinarySearchVisualizerPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState(50);
  const [isSearching, setIsSearching] = useState(false);
  const [foundAt, setFoundAt] = useState<number | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  const data = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];

  const performBinarySearch = () => {
    setIsSearching(true);
    setSteps([]);
    setFoundAt(null);

    let left = 0;
    let right = data.length - 1;
    let stepNum = 0;

    const search = () => {
      if (left > right) {
        setSteps((prev) => [...prev, `❌ Value ${searchValue} not found`]);
        setIsSearching(false);
        return;
      }

      const mid = Math.floor((left + right) / 2);
      stepNum++;

      setSteps((prev) => [
        ...prev,
        `Step ${stepNum}: Check middle index ${mid} (value: ${data[mid]})`,
      ]);

      setTimeout(() => {
        if (data[mid] === searchValue) {
          setFoundAt(mid);
          setSteps((prev) => [...prev, `✅ Found at index ${mid}!`]);
          setIsSearching(false);
        } else if (data[mid] < searchValue) {
          setSteps((prev) => [...prev, `${searchValue} > ${data[mid]}, search right half`]);
          left = mid + 1;
          search();
        } else {
          setSteps((prev) => [...prev, `${searchValue} < ${data[mid]}, search left half`]);
          right = mid - 1;
          search();
        }
      }, 1500);
    };

    search();
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold mb-2">🔍 Binary Search Visualizer</h1>
          <p className="text-gray-600">
            Understand how binary search efficiently finds elements
          </p>
        </div>

        {/* Sorted array visualization */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">📊 Sorted Array</h2>
          <div className="flex gap-2 flex-wrap">
            {data.map((num, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: foundAt === idx ? 1.2 : 1,
                  backgroundColor: foundAt === idx ? '#10b981' : '#e5e7eb',
                }}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-sm ${
                  foundAt === idx ? 'text-white' : 'text-gray-800'
                } border-2 border-gray-300`}
              >
                {num}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Search controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-bold">🎯 Search for a Value</h2>
          <div className="flex gap-3">
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(Number(e.target.value))}
              min="10"
              max="80"
              disabled={isSearching}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={performBinarySearch}
              disabled={isSearching}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold transition-colors"
            >
              {isSearching ? '🔍 Searching...' : '🔍 Search'}
            </button>
          </div>
        </div>

        {/* Step-by-step trace */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">📋 Step-by-Step</h2>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {steps.length === 0 ? (
              <p className="text-gray-500 italic">Steps will appear here...</p>
            ) : (
              steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 border border-gray-200 rounded p-3 font-mono text-sm"
                >
                  {step}
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">💡 Why Binary Search?</h3>
          <p className="text-blue-800 text-sm mb-3">
            Binary search works only on sorted data because it eliminates half the remaining elements with each comparison:
          </p>
          <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
            <li>Linear search: 15 items = up to 15 comparisons</li>
            <li>Binary search: 15 items = maximum 4 comparisons</li>
            <li>1 million items: Linear needs 1M checks, Binary needs ~20</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BinarySearchVisualizerPage;
