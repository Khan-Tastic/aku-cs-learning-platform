/**
 * API service layer
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface RequestOptions extends RequestInit {
  data?: unknown;
}

/**
 * Generic API request handler
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { data, ...config } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...config,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * GET request
 */
export async function getRequest<T>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'GET' });
}

/**
 * POST request
 */
export async function postRequest<T>(endpoint: string, data: unknown): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'POST', data });
}

/**
 * PUT request
 */
export async function putRequest<T>(endpoint: string, data: unknown): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'PUT', data });
}

/**
 * DELETE request
 */
export async function deleteRequest<T>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'DELETE' });
}

/**
 * Lesson API endpoints
 */
export const lessonAPI = {
  getLesson: (id: string) => getRequest(`/lessons/${id}`),
  getLessonContent: (id: string) => getRequest(`/lessons/${id}/content`),
  updateProgress: (lessonId: string, data: unknown) =>
    putRequest(`/lessons/${lessonId}/progress`, data),
};

/**
 * Question API endpoints
 */
export const questionAPI = {
  getQuestion: (id: string) => getRequest(`/questions/${id}`),
  getQuestionsForLesson: (lessonId: string) => getRequest(`/lessons/${lessonId}/questions`),
  submitAnswer: (questionId: string, data: unknown) =>
    postRequest(`/questions/${questionId}/submit`, data),
  getHint: (questionId: string, level: number) =>
    getRequest(`/questions/${questionId}/hint/${level}`),
};

/**
 * Exam API endpoints
 */
export const examAPI = {
  getExam: (id: string) => getRequest(`/exams/${id}`),
  startExam: (examId: string) => postRequest(`/exams/${examId}/start`, {}),
  submitExam: (attemptId: string, data: unknown) =>
    putRequest(`/exams/attempts/${attemptId}/submit`, data),
  getAttempt: (attemptId: string) => getRequest(`/exams/attempts/${attemptId}`),
};

/**
 * Student API endpoints
 */
export const studentAPI = {
  getProfile: (id: string) => getRequest(`/students/${id}`),
  updateProfile: (id: string, data: unknown) => putRequest(`/students/${id}`, data),
  getMastery: (id: string) => getRequest(`/students/${id}/mastery`),
  getProgress: (id: string) => getRequest(`/students/${id}/progress`),
};

/**
 * AI Teacher API endpoints
 */
export const aiTeacherAPI = {
  getExplanation: (conceptId: string, data: unknown) =>
    postRequest(`/ai/explain/${conceptId}`, data),
  getHint: (questionId: string, hintLevel: number) =>
    postRequest(`/ai/hint`, { questionId, hintLevel }),
  evaluateAnswer: (data: unknown) => postRequest(`/ai/evaluate`, data),
  generateQuestion: (topicId: string, data: unknown) =>
    postRequest(`/ai/generate-question/${topicId}`, data),
  detectMisconception: (data: unknown) => postRequest(`/ai/detect-misconception`, data),
};
