/**
 * Python Editor and Lab page
 */

import React, { useState } from 'react';
import Layout from '@components/Layout';
import PythonEditor from '@components/Lab/PythonEditor';
import OutputPanel from '@components/Lab/OutputPanel';
import TraceTable from '@components/Lab/TraceTable';
import VariableInspector from '@components/Lab/VariableInspector';

const PythonLabPage: React.FC = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [variables, setVariables] = useState<Record<string, any>>({});

  const handleRun = async () => {
    setIsRunning(true);
    try {
      // Placeholder - will integrate Pyodide later
      setOutput('Code execution will run here');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">🐍 Python Programming Lab</h1>
          <p className="text-gray-600">Write, run, and visualize your Python code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <PythonEditor value={code} onChange={setCode} />
            </div>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isRunning ? '⏳ Running...' : '▶️ Run Code'}
            </button>
          </div>

          {/* Output and visualization */}
          <div className="space-y-4">
            <OutputPanel output={output} />
            <VariableInspector variables={variables} />
          </div>
        </div>

        {/* Trace table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">📊 Execution Trace</h2>
          <TraceTable code={code} />
        </div>
      </div>
    </Layout>
  );
};

export default PythonLabPage;
