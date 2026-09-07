/**
 * Utility functions for common operations
 */

import { CognitiveLevel, LearningLevel } from '@types/index';

/**
 * Map cognitive levels to their hierarchy order
 */
export const cognitiveHierarchy: Record<CognitiveLevel, number> = {
  Remember: 1,
  Understand: 2,
  Apply: 3,
  Analyse: 4,
  Evaluate: 5,
  Create: 6,
};

/**
 * Get next cognitive level
 */
export function getNextCognitiveLevel(current: CognitiveLevel): CognitiveLevel | null {
  const levels: CognitiveLevel[] = ['Remember', 'Understand', 'Apply', 'Analyse', 'Evaluate', 'Create'];
  const currentIndex = levels.indexOf(current);
  return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
}

/**
 * Calculate overall mastery score from multiple dimensions
 */
export function calculateOverallMastery(dimensions: Record<string, number>): number {
  const values = Object.values(dimensions);
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/**
 * Identify weak areas from mastery data
 */
export function identifyWeakAreas(masteryDimensions: Record<string, number>, threshold: number = 0.5): string[] {
  return Object.entries(masteryDimensions)
    .filter(([_, value]) => value < threshold)
    .map(([key, _]) => key);
}

/**
 * Format time from minutes to readable string
 */
export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

/**
 * Determine if a concept is a prerequisite for another
 */
export function hasPrerequisites(conceptId: string, prerequisites: string[]): boolean {
  return prerequisites.length > 0;
}

/**
 * Generate a unique ID
 */
export function generateId(prefix: string = ''): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`;
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
}

/**
 * Check if student is ready for exam based on mastery
 */
export function isExamReady(masteryScores: Record<string, number>, requiredLevel: number = 0.7): boolean {
  const scores = Object.values(masteryScores);
  if (scores.length === 0) return false;
  const average = scores.reduce((a, b) => a + b, 0) / scores.length;
  return average >= requiredLevel;
}

/**
 * Color coding for difficulty levels
 */
export function getDifficultyColor(difficulty: 1 | 2 | 3 | 4 | 5): string {
  const colors: Record<1 | 2 | 3 | 4 | 5, string> = {
    1: 'text-green-600 bg-green-50',
    2: 'text-blue-600 bg-blue-50',
    3: 'text-yellow-600 bg-yellow-50',
    4: 'text-orange-600 bg-orange-50',
    5: 'text-red-600 bg-red-50',
  };
  return colors[difficulty];
}

/**
 * Get mastery level badge
 */
export function getMasteryBadge(mastery: number): { label: string; color: string } {
  if (mastery >= 0.9) return { label: 'Expert', color: 'bg-green-600' };
  if (mastery >= 0.7) return { label: 'Proficient', color: 'bg-blue-600' };
  if (mastery >= 0.5) return { label: 'Developing', color: 'bg-yellow-600' };
  if (mastery >= 0.3) return { label: 'Emerging', color: 'bg-orange-600' };
  return { label: 'Novice', color: 'bg-red-600' };
}

/**
 * Validate Python code syntax (basic check)
 */
export function validatePythonSyntax(code: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for common syntax errors
  if (code.includes(':') && !code.includes('\n') && !code.match(/:[\s]*$/)) {
    errors.push('Colon found but no indented block');
  }
  
  const indentPattern = /^[ \t]*[^ \t]/gm;
  const indents = (code.match(indentPattern) || []).map(line => line.match(/^[ \t]*/)?.[0].length || 0);
  
  for (let i = 1; i < indents.length; i++) {
    if (indents[i] > indents[i - 1] + 4) {
      errors.push('Inconsistent indentation detected');
      break;
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Calculate question difficulty based on cognitive level
 */
export function calculateQuestionDifficulty(cognitiveLevel: CognitiveLevel): 1 | 2 | 3 | 4 | 5 {
  const difficultyMap: Record<CognitiveLevel, 1 | 2 | 3 | 4 | 5> = {
    Remember: 1,
    Understand: 2,
    Apply: 3,
    Analyse: 4,
    Evaluate: 5,
    Create: 5,
  };
  return difficultyMap[cognitiveLevel];
}
