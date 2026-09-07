/**
 * Question Panel Component
 */

import React, { useState } from 'react';

interface QuestionPanelProps {
  topicId: string;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({ topicId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  // Demo question
  const question = {
    id: 'q1',
    text: 'What will this code print?',
    marks: 2,
    options: [
      '0 1 2 3 4',
      '1 2 3 4 5',
      '5',
      'An error',
    ],
    correct: 0,
  };

  const hints = [
    'Think about how range() works.',
    'range(5) starts at 0, not 1.',
    'range(5) generates: 0, 1, 2, 3, 4',
    'Each number is printed on a new line.',
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold">📝 Check Your Understanding</h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
          {question.marks} marks
        </span>
      </div>

      <p className="text-lg text-gray-800 mb-4">{question.text}</p>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
              disabled={submitted}
              className="w-4 h-4"
            />
            <span
              className={`flex-1 p-3 rounded-lg transition-colors ${
                submitted && index === question.correct
                  ? 'bg-green-100 text-green-900 border border-green-300'
                  : submitted && selectedAnswer === index && !isCorrect
                  ? 'bg-red-100 text-red-900 border border-red-300'
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
              }`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>

      {submitted && (
        <div
          className={`rounded-lg p-4 mb-4 ${
            isCorrect
              ? 'bg-green-50 border border-green-200 text-green-900'
              : 'bg-red-50 border border-red-200 text-red-900'
          }`}
        >
          {isCorrect ? (
            <p className="font-semibold">✅ Correct! Well done!</p>
          ) : (
            <p className="font-semibold">❌ Not quite. Try again!</p>
          )}
        </div>
      )}

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 font-semibold transition-colors"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedAnswer(null);
              setSubmitted(false);
              setShowHints(false);
            }}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold transition-colors"
          >
            Try Again
          </button>
        )}

        <button
          onClick={() => setShowHints(!showHints)}
          className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold transition-colors"
        >
          💡 Need Help?
        </button>
      </div>

      {showHints && (
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-900 mb-2">Hints:</h4>
          {hints.slice(0, hintLevel + 1).map((hint, i) => (
            <p key={i} className="text-yellow-800 text-sm mb-2">
              💭 {hint}
            </p>
          ))}
          {hintLevel < hints.length - 1 && (
            <button
              onClick={() => setHintLevel(hintLevel + 1)}
              className="text-sm text-yellow-700 hover:text-yellow-900 font-semibold mt-2"
            >
              Show more hint →
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;
