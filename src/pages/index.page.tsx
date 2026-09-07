/**
 * Home/Dashboard page
 */

import React, { useEffect } from 'react';
import { useStudentStore } from '@store/index';
import Layout from '@components/Layout';
import DashboardCard from '@components/Dashboard/DashboardCard';
import ProgressWidget from '@components/Dashboard/ProgressWidget';
import { GRADE_XI_CURRICULUM, GRADE_XII_CURRICULUM } from '@types/curriculum';

const HomePage: React.FC = () => {
  const { student } = useStudentStore();

  // If no student logged in, show demo student
  const currentStudent = student || {
    id: 'demo-student',
    name: 'Demo Student',
    email: 'demo@example.com',
    grade: 'XI' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const curriculum = currentStudent.grade === 'XI' ? GRADE_XI_CURRICULUM : GRADE_XII_CURRICULUM;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, {currentStudent.name}!</h1>
          <p className="text-blue-100">
            Grade {currentStudent.grade} • AKU-EB Computer Science Curriculum
          </p>
        </div>

        {/* Main dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick stats */}
          <DashboardCard
            title="Syllabus Coverage"
            value="0%"
            subtitle="Topics completed"
            icon="📚"
          />
          <DashboardCard
            title="Overall Mastery"
            value="0%"
            subtitle="Across all concepts"
            icon="🎯"
          />
          <DashboardCard
            title="Exam Readiness"
            value="0%"
            subtitle="Based on performance"
            icon="✍️"
          />
        </div>

        {/* Curriculum sections */}
        <div>
          <h2 className="text-2xl font-bold mb-4">📖 {currentStudent.grade === 'XI' ? 'Grade XI' : 'Grade XII'} Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculum.map((topic) => (
              <div key={topic.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 flex-1">{topic.title}</h3>
                  <span className="text-2xl">📌</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">0% complete</div>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Start →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🔄 Recent Activity</h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center text-gray-500">
            <p>No learning activity yet. Start with a topic to begin your journey!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
