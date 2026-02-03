/**
 * Type definitions for quiz application
 */

/**
 * Represents a single quiz question with choices and answer
 */
export interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
}

/**
 * Represents quiz data structure
 */
export interface QuizData {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

/**
 * Represents the state of the quiz
 */
export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  attempted: number;
  selectedAnswer: number | null;
}

/**
 * Progress information for UI display
 */
export interface QuizProgress {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  attempted: number;
  progressPercentage: number;
}

/**
 * Result information when quiz is completed
 */
export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
}
