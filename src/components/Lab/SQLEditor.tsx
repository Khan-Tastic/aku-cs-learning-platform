/**
 * SQL Editor Component
 */

import React from 'react';

interface SQLEditorProps {
  value: string;
  onChange: (code: string) => void;
  readOnly?: boolean;
}

const SQLEditor: React.FC<SQLEditorProps> = ({
  value,
  onChange,
  readOnly = false,
}) => {
  return (
    <div className="flex h-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* SQL Syntax highlighting would go here */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        className="w-full bg-gray-900 text-gray-100 font-mono text-sm p-4 focus:outline-none resize-none"
        spellCheck="false"
        placeholder="-- Write your SQL query here"
        style={{
          fontFamily: 'Fira Code, Courier New, monospace',
          lineHeight: '1.5',
        }}
      />
    </div>
  );
};

export default SQLEditor;
