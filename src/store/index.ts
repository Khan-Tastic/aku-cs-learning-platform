/**
 * State management store using Zustand
 */

import create from 'zustand';
import { Student, LessonProgress, Mastery, StudentKnowledgeModel, ConfidenceTrack } from '@types/index';

interface StudentState {
  student: Student | null;
  progress: Map<string, LessonProgress>;
  mastery: Map<string, Mastery>;
  knowledgeModel: StudentKnowledgeModel | null;
  confidenceTracks: ConfidenceTrack[];
  
  setStudent: (student: Student) => void;
  updateProgress: (lessonId: string, progress: LessonProgress) => void;
  updateMastery: (conceptId: string, mastery: Mastery) => void;
  updateKnowledgeModel: (model: StudentKnowledgeModel) => void;
  addConfidenceTrack: (track: ConfidenceTrack) => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  student: null,
  progress: new Map(),
  mastery: new Map(),
  knowledgeModel: null,
  confidenceTracks: [],
  
  setStudent: (student: Student) => set({ student }),
  
  updateProgress: (lessonId: string, progress: LessonProgress) =>
    set((state) => {
      const newProgress = new Map(state.progress);
      newProgress.set(lessonId, progress);
      return { progress: newProgress };
    }),
  
  updateMastery: (conceptId: string, mastery: Mastery) =>
    set((state) => {
      const newMastery = new Map(state.mastery);
      newMastery.set(conceptId, mastery);
      return { mastery: newMastery };
    }),
  
  updateKnowledgeModel: (model: StudentKnowledgeModel) =>
    set({ knowledgeModel: model }),
  
  addConfidenceTrack: (track: ConfidenceTrack) =>
    set((state) => ({
      confidenceTracks: [...state.confidenceTracks, track],
    })),
}));

interface UIState {
  sidebarOpen: boolean;
  currentLesson: string | null;
  currentMode: 'learn' | 'practice' | 'exam';
  darkMode: boolean;
  
  toggleSidebar: () => void;
  setCurrentLesson: (lessonId: string | null) => void;
  setCurrentMode: (mode: 'learn' | 'practice' | 'exam') => void;
  toggleDarkMode: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  currentLesson: null,
  currentMode: 'learn',
  darkMode: false,
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setCurrentLesson: (lessonId) => set({ currentLesson: lessonId }),
  setCurrentMode: (mode) => set({ currentMode: mode }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
