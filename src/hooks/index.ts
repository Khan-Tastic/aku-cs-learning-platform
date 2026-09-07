/**
 * Custom React hooks
 */

import { useState, useEffect, useCallback } from 'react';
import { useStudentStore, useUIStore } from '@store/index';

/**
 * Hook for fetching data with loading and error states
 */
export function useFetch<T>(
  url: string,
  options?: RequestInit
): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setData(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
}

/**
 * Hook for debounced values
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook for local storage
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

/**
 * Hook for tracking time spent
 */
export function useTimer(initialTime: number = 0) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    time,
    start: () => setIsRunning(true),
    pause: () => setIsRunning(false),
    reset: () => {
      setTime(initialTime);
      setIsRunning(false);
    },
  };
}

/**
 * Hook for tracking student progress
 */
export function useStudentProgress(lessonId: string) {
  const { progress, updateProgress } = useStudentStore();
  const currentProgress = progress.get(lessonId);

  return {
    progress: currentProgress,
    updateProgress,
  };
}

/**
 * Hook for current UI state
 */
export function useUIMode() {
  const { currentMode, currentLesson, setCurrentMode, setCurrentLesson } = useUIStore();

  return {
    mode: currentMode,
    lesson: currentLesson,
    setMode: setCurrentMode,
    setLesson: setCurrentLesson,
  };
}
