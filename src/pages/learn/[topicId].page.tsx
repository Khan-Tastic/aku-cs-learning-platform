/**
 * Lesson page
 */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import LessonContent from '@components/Lesson/LessonContent';
import QuestionPanel from '@components/Lesson/QuestionPanel';
import AITeacherPanel from '@components/Lesson/AITeacherPanel';

const LessonPage: React.FC = () => {
  const router = useRouter();
  const { topicId } = router.query;
  const [showAIPanel, setShowAIPanel] = useState(false);

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main lesson content - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          <LessonContent topicId={topicId as string} />
          <QuestionPanel topicId={topicId as string} />
        </div>

        {/* AI Teacher panel - 1 column */}
        <div className="lg:col-span-1">
          <AITeacherPanel
            isOpen={showAIPanel}
            onToggle={() => setShowAIPanel(!showAIPanel)}
            topicId={topicId as string}
          />
        </div>
      </div>
    </Layout>
  );
};

export default LessonPage;
