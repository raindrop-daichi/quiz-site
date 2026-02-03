import { defineCollection, z } from 'astro:content';

const quizzesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    questions: z.array(
      z.object({
        question: z.string(),
        choices: z.array(z.string()).length(4),
        correctAnswer: z.number().min(0).max(3),
        explanation: z.string(),
      })
    ),
  }),
});

export const collections = {
  quizzes: quizzesCollection,
};
