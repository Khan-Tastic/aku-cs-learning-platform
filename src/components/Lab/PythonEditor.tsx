/**
 * Python Code Editor Component
 */

import React, { useState } from 'react';

interface PythonEditorProps {
  value: string;
  onChange: (code: string) => void;
  readOnly?: boolean;
}

const PythonEditor: React.FC<PythonEditorProps> = ({
  value,
  onChange,
  readOnly = false,
}) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  React.useEffect(() => {
    const lines = value.split('\n').length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [value]);

  return (
    <div className="flex h-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Line numbers */}
      <div className="bg-gray-800 text-gray-500 text-right px-4 py-4 font-mono text-sm select-none border-r border-gray-700">
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>

      {/* Editor */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        className="flex-1 bg-gray-900 text-gray-100 font-mono text-sm p-4 focus:outline-none resize-none"
        spellCheck="false"
        placeholder="# Write your Python code here"
        style={{
          fontFamily: 'Fira Code, Courier New, monospace',
          lineHeight: '1.5',
        }}
      />
    </div>
  );
};

export default PythonEditor;
