/**
 * AI Teacher Panel Component
 */

import React, { useState } from 'react';

interface AITeacherPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  topicId: string;
}

const AITeacherPanel: React.FC<AITeacherPanelProps> = ({
  isOpen,
  onToggle,
  topicId,
}) => {
  const [messages, setMessages] = useState<Array<{ role: 'student' | 'teacher'; content: string }>>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add student message
    setMessages((prev) => [...prev, { role: 'student', content: input }]);

    // Simulate teacher response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'teacher',
          content: 'Great question! Let me help you understand this better. Before I explain, can you tell me what you already know about loops?',
        },
      ]);
    }, 500);

    setInput('');
  };

  return (
    <div className="sticky top-0 h-screen flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 cursor-pointer" onClick={onToggle}>
        <h3 className="font-bold flex items-center gap-2">
          🤖 AI Teacher
          <span className="text-sm font-normal ml-auto">{isOpen ? '−' : '+'}</span>
        </h3>
        <p className="text-xs text-blue-100 mt-1">Patient • Encouraging • Here to Help</p>
      </div>

      {isOpen && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col justify-center text-center text-gray-500">
                <p className="text-lg font-semibold mb-2">👋 Hi there!</p>
                <p className="text-xs">Ask me anything about loops, or let's work through a problem together.</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 text-sm ${
                      msg.role === 'student'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-gray-50">
            <div className="flex gap-2 mb-2">
              <button className="text-xs px-2 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 font-medium">
                💡 Explain
              </button>
              <button className="text-xs px-2 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 font-medium">
                🎨 Show
              </button>
              <button className="text-xs px-2 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50 font-medium">
                🎯 Challenge
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AITeacherPanel;
