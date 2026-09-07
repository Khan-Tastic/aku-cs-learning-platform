/**
 * Core type definitions for the learning platform
 */

// Student and user types
export interface Student {
  id: string;
  name: string;
  email: string;
  grade: 'XI' | 'XII';
  createdAt: Date;
  updatedAt: Date;
}

// Curriculum types
export type Grade = 'XI' | 'XII';
export type CognitiveLevel = 'Remember' | 'Understand' | 'Apply' | 'Analyse' | 'Evaluate' | 'Create';
export type LearningLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface SLO {
  id: string;
  code: string;
  text: string;
  cognitiveLevel: CognitiveLevel;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  order: number;
  grade: Grade;
}

export interface SubTopic {
  id: string;
  topicId: string;
  title: string;
  description: string;
  order: number;
  slos: SLO[];
  prerequisites: string[];
}

export interface Lesson {
  id: string;
  subTopicId: string;
  title: string;
  description: string;
  learningLevel: LearningLevel;
  duration: number; // minutes
  content: LessonContent;
  quiz: Question[];
  practicalTask?: PracticalTask;
}

export interface LessonContent {
  hook: ContentBlock; // Problem-first
  intuition: ContentBlock[]; // Analogies and stories
  visualization: Visualization[];
  formal: ContentBlock; // Definition and terminology
  implementation: CodeExample[];
  reflection: ContentBlock;
}

export interface ContentBlock {
  type: 'text' | 'image' | 'video' | 'interactive';
  content: string;
  metadata?: Record<string, unknown>;
}

export interface Visualization {
  id: string;
  type: 'animation' | 'interactive' | 'diagram' | 'simulator';
  title: string;
  description: string;
  component: string; // React component name
  params?: Record<string, unknown>;
}

export interface CodeExample {
  language: 'python' | 'sql' | 'pseudocode';
  title: string;
  code: string;
  explanation: string;
  runnable: boolean;
}

// Question types
export type QuestionType = 'multiple-choice' | 'short-answer' | 'code' | 'trace' | 'debug' | 'design' | 'essay';
export type CommandWord = 'Define' | 'Describe' | 'Explain' | 'Identify' | 'Differentiate' | 'Analyse' | 'Examine' | 'Evaluate' | 'Justify' | 'Design';

export interface Question {
  id: string;
  lessonId: string;
  type: QuestionType;
  commandWord: CommandWord;
  marks: number;
  cognitiveLevel: CognitiveLevel;
  difficulty: 1 | 2 | 3 | 4 | 5;
  question: string;
  context?: string;
  options?: string[]; // For multiple choice
  correctAnswer: string | string[];
  explanation: string;
  hints: string[];
  tags: string[];
}

// Practical task types
export interface PracticalTask {
  id: string;
  grade: Grade;
  title: string;
  description: string;
  requirements: string[];
  timeLimit: number; // minutes
  stages: PracticalStage[];
  rubric: RubricCriteria[];
}

export interface PracticalStage {
  number: number;
  title: string;
  description: string;
  taskType: 'python' | 'sql' | 'algorithm' | 'flowchart' | 'analysis';
  instructions: string;
  template?: string;
  testCases?: TestCase[];
}

export interface TestCase {
  input: string | Record<string, unknown>;
  expectedOutput: string;
  description: string;
}

export interface RubricCriteria {
  name: string;
  description: string;
  points: number;
  indicators: string[];
}

// Student progress and mastery
export interface LessonProgress {
  studentId: string;
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  completedAt?: Date;
  timeSpent: number; // minutes
  interactionsCount: number;
}

export interface Mastery {
  studentId: string;
  conceptId: string;
  understanding: number; // 0-1
  coding: number; // 0-1
  debugging: number; // 0-1
  prediction: number; // 0-1
  problem_solving: number; // 0-1
  exam_performance: number; // 0-1
  overall: number; // 0-1
  lastUpdated: Date;
}

export interface StudentKnowledgeModel {
  studentId: string;
  skills: Record<string, SkillProfile>;
  weaknesses: string[];
  misconceptions: Misconception[];
  nextRecommendation: string;
}

export interface SkillProfile {
  name: string;
  level: number; // 0-100
  practiceCount: number;
  lastPracticed: Date;
  confidenceLevel: number; // 0-1
}

export interface Misconception {
  id: string;
  studentId: string;
  concept: string;
  misconception: string;
  correction: string;
  frequency: number;
  lastEncountered: Date;
}

// Exam and assessment
export interface Exam {
  id: string;
  title: string;
  grade: Grade;
  type: 'mock' | 'practice' | 'topic' | 'full-paper';
  duration: number; // minutes
  totalMarks: number;
  questions: Question[];
  sections?: ExamSection[];
  createdAt: Date;
}

export interface ExamSection {
  number: number;
  title: string;
  description?: string;
  marks: number;
  questionIds: string[];
}

export interface ExamAttempt {
  id: string;
  studentId: string;
  examId: string;
  startedAt: Date;
  completedAt?: Date;
  answers: Map<string, StudentAnswer>;
  score: number;
  totalMarks: number;
  feedback: ExamFeedback;
}

export interface StudentAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  marksObtained: number;
  timeSpent: number; // seconds
  hintsUsed: number;
}

export interface ExamFeedback {
  overallScore: number;
  sectionScores: Record<string, number>;
  strengthAreas: string[];
  weaknessAreas: string[];
  recommendations: string[];
  conceptPerformance: Record<string, number>;
  cognitiveSkillPerformance: Record<CognitiveLevel, number>;
}

// Confidence tracking
export interface ConfidenceTrack {
  studentId: string;
  questionId: string;
  confidence: 1 | 2 | 3 | 4 | 5; // 1 = no confidence, 5 = very confident
  isCorrect: boolean;
  calibration: number; // Confidence accuracy
}

// AI Teacher context
export interface TeacherContext {
  studentId: string;
  currentLessonId?: string;
  currentTopicId?: string;
  recentErrors: string[];
  masteredConcepts: string[];
  strugglingConcepts: string[];
  hintsRequested: number;
  mode: 'learning' | 'practice' | 'exam';
}

export interface HintResponse {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  content: string;
  type: 'direction' | 'concept' | 'question' | 'visual' | 'example' | 'partial-code' | 'full-code';
}

// Analytics events
export type AnalyticsEventType =
  | 'lesson_opened'
  | 'why_clicked'
  | 'prediction_submitted'
  | 'code_run'
  | 'error_encountered'
  | 'hint_requested'
  | 'question_answered'
  | 'question_correct'
  | 'question_incorrect'
  | 'debug_success'
  | 'exam_started'
  | 'exam_submitted';

export interface AnalyticsEvent {
  studentId: string;
  type: AnalyticsEventType;
  timestamp: Date;
  context: Record<string, unknown>;
}
