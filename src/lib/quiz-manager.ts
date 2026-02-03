import type { QuizData, QuizState, QuizProgress, QuizResult } from './quiz-types';

/**
 * QuizManager - Manages quiz state and business logic
 * Separates business logic from UI rendering for better maintainability and testability
 */
export class QuizManager {
  private state: QuizState;
  private quizData: QuizData;

  /**
   * Initialize quiz manager with quiz data
   */
  constructor(quizData: QuizData) {
    this.quizData = quizData;
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      attempted: 0,
      selectedAnswer: null,
    };
  }

  /**
   * Get current question
   */
  getCurrentQuestion() {
    return this.quizData.questions[this.state.currentQuestionIndex];
  }

  /**
   * Get total number of questions
   */
  getTotalQuestions(): number {
    return this.quizData.questions.length;
  }

  /**
   * Select an answer and update score
   * @returns true if answer is correct, false otherwise
   */
  selectAnswer(answerIndex: number): boolean {
    if (this.state.selectedAnswer !== null) {
      return false; // Already answered
    }

    this.state.selectedAnswer = answerIndex;
    this.state.attempted++;

    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion) {
      return false; // Safety check
    }
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      this.state.score++;
    }

    return isCorrect;
  }

  /**
   * Move to next question
   * @returns true if there are more questions, false if quiz is complete
   */
  nextQuestion(): boolean {
    this.state.currentQuestionIndex++;
    this.state.selectedAnswer = null;
    return this.state.currentQuestionIndex < this.quizData.questions.length;
  }

  /**
   * Get current progress information
   */
  getProgress(): QuizProgress {
    return {
      currentQuestion: this.state.currentQuestionIndex + 1,
      totalQuestions: this.getTotalQuestions(),
      score: this.state.score,
      attempted: this.state.attempted,
      progressPercentage: ((this.state.currentQuestionIndex + 1) / this.getTotalQuestions()) * 100,
    };
  }

  /**
   * Get final quiz result
   */
  getResult(): QuizResult {
    const totalQuestions = this.getTotalQuestions();
    return {
      score: this.state.score,
      totalQuestions,
      percentage: Math.round((this.state.score / totalQuestions) * 100),
    };
  }

  /**
   * Check if an answer has been selected
   */
  isAnswered(): boolean {
    return this.state.selectedAnswer !== null;
  }

  /**
   * Get the selected answer index
   */
  getSelectedAnswer(): number | null {
    return this.state.selectedAnswer;
  }

  /**
   * Reset quiz to initial state
   */
  reset(): void {
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      attempted: 0,
      selectedAnswer: null,
    };
  }

  /**
   * Check if quiz is complete
   */
  isComplete(): boolean {
    return this.state.currentQuestionIndex >= this.quizData.questions.length;
  }
}
