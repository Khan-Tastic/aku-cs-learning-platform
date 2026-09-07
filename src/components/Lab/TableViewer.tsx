/**
 * Table Viewer Component - Display SQL query results
 */

import React from 'react';

interface TableViewerProps {
  results: any[];
  columns?: string[];
}

const TableViewer: React.FC<TableViewerProps> = ({ results, columns }) => {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        <p className="text-lg font-semibold mb-2">📋 Results</p>
        <p className="text-sm">Execute a query to see results here</p>
      </div>
    );
  }

  const cols = columns || Object.keys(results[0]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              {cols.map((col) => (
                <th key={col} className="px-4 py-3 text-left font-semibold text-gray-800">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                {cols.map((col) => (
                  <td key={col} className="px-4 py-3 text-gray-700">
                    {typeof row[col] === 'object' ? JSON.stringify(row[col]) : String(row[col])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 text-xs text-gray-600">
        📊 {results.length} row{results.length !== 1 ? 's' : ''} returned
      </div>
    </div>
  );
};

export default TableViewer;
