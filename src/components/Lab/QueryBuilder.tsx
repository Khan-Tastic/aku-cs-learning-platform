/**
 * Visual Query Builder Component
 */

import React, { useState } from 'react';

interface QueryBuilderProps {
  onBuild: (query: string) => void;
}

const QueryBuilder: React.FC<QueryBuilderProps> = ({ onBuild }) => {
  const [selectFields, setSelectFields] = useState<string[]>(['*']);
  const [fromTable, setFromTable] = useState('Student');
  const [whereCondition, setWhereCondition] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [orderDir, setOrderDir] = useState('ASC');

  const handleBuild = () => {
    let query = `SELECT ${selectFields.join(', ')} FROM ${fromTable}`;
    if (whereCondition) query += ` WHERE ${whereCondition}`;
    if (orderBy) query += ` ORDER BY ${orderBy} ${orderDir}`;
    onBuild(query + ';');
  };

  return (
    <div className="space-y-4">
      {/* SELECT clause */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">SELECT Columns:</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Column names (comma-separated)"
            value={selectFields.join(', ')}
            onChange={(e) => setSelectFields(e.target.value.split(',').map((f) => f.trim()))}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSelectFields(['*'])}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium transition-colors"
          >
            All (*)
          </button>
        </div>
      </div>

      {/* FROM clause */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">FROM Table:</label>
        <select
          value={fromTable}
          onChange={(e) => setFromTable(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Student</option>
          <option>Teacher</option>
          <option>Course</option>
          <option>Grades</option>
        </select>
      </div>

      {/* WHERE clause */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">WHERE Condition:</label>
        <input
          type="text"
          placeholder="e.g., Marks > 80"
          value={whereCondition}
          onChange={(e) => setWhereCondition(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ORDER BY clause */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">ORDER BY:</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Column name"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={orderDir}
            onChange={(e) => setOrderDir(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>ASC</option>
            <option>DESC</option>
          </select>
        </div>
      </div>

      {/* Generated Query */}
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
        <p className="text-gray-400 mb-2">Generated Query:</p>
        <p>
          SELECT {selectFields.join(', ')} FROM {fromTable}
          {whereCondition && <> WHERE {whereCondition}</>}
          {orderBy && <> ORDER BY {orderBy} {orderDir}</>}
        </p>
      </div>

      {/* Build button */}
      <button
        onClick={handleBuild}
        className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors"
      >
        📝 Build Query
      </button>
    </div>
  );
};

export default QueryBuilder;
