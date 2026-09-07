/**
 * Trace Table Component - Shows step-by-step execution
 */

import React, { useState } from 'react';

interface TraceStep {
  step: number;
  line: number;
  variables: Record<string, any>;
  output?: string;
}

interface TraceTableProps {
  code: string;
}

const TraceTable: React.FC<TraceTableProps> = ({ code }) => {
  // Demo trace for loop example
  const demoTrace: TraceStep[] = [
    { step: 1, line: 1, variables: { 'i': 'uninitialized' } },
    { step: 2, line: 2, variables: { 'i': 0 }, output: '0' },
    { step: 3, line: 1, variables: { 'i': 1 } },
    { step: 4, line: 2, variables: { 'i': 1 }, output: '1' },
    { step: 5, line: 1, variables: { 'i': 2 } },
    { step: 6, line: 2, variables: { 'i': 2 }, output: '2' },
  ];

  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-sm">
        Follow the execution step by step. Click a row to see what happened at each step.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-700 px-4 py-2 text-left">Step</th>
              <th className="border border-gray-700 px-4 py-2 text-left">Line</th>
              <th className="border border-gray-700 px-4 py-2 text-left">Variable (i)</th>
              <th className="border border-gray-700 px-4 py-2 text-left">Output</th>
            </tr>
          </thead>
          <tbody>
            {demoTrace.map((trace) => (
              <tr
                key={trace.step}
                onClick={() => setSelectedStep(trace.step)}
                className={`cursor-pointer transition-colors ${
                  selectedStep === trace.step
                    ? 'bg-blue-200'
                    : 'hover:bg-gray-100 border-b border-gray-200'
                }`}
              >
                <td className="border border-gray-200 px-4 py-2 font-mono font-bold text-blue-600">
                  {trace.step}
                </td>
                <td className="border border-gray-200 px-4 py-2 font-mono">{trace.line}</td>
                <td className="border border-gray-200 px-4 py-2 font-mono">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    {trace.variables.i}
                  </span>
                </td>
                <td className="border border-gray-200 px-4 py-2 font-mono">
                  {trace.output && <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{trace.output}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStep !== null && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">📍 Step {selectedStep} Details</h4>
          <p className="text-blue-800 text-sm">
            At this step, the variable <code className="bg-blue-100 px-2 rounded font-mono">i</code> has the value{' '}
            <code className="bg-blue-100 px-2 rounded font-mono">{demoTrace[selectedStep - 1]?.variables.i}</code>
          </p>
        </div>
      )}
    </div>
  );
};

export default TraceTable;
