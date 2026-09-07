/**
 * SQL Database Lab page
 */

import React, { useState } from 'react';
import Layout from '@components/Layout';
import SQLEditor from '@components/Lab/SQLEditor';
import TableViewer from '@components/Lab/TableViewer';
import QueryBuilder from '@components/Lab/QueryBuilder';

const SQLLabPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [tables, setTables] = useState<Record<string, any[]>>({});

  const handleExecuteQuery = async () => {
    try {
      // Placeholder - will integrate with database later
      console.log('Executing query:', query);
    } catch (error) {
      console.error('Query error:', error);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">🗄️ SQL Database Lab</h1>
          <p className="text-gray-600">Create tables, insert data, and write queries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Query editor */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <SQLEditor value={query} onChange={setQuery} />
            </div>
            <button
              onClick={handleExecuteQuery}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              ▶️ Execute Query
            </button>
          </div>

          {/* Results */}
          <div>
            <TableViewer results={results} />
          </div>
        </div>

        {/* Query builder */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">🔨 Visual Query Builder</h2>
          <QueryBuilder onBuild={setQuery} />
        </div>
      </div>
    </Layout>
  );
};

export default SQLLabPage;
