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
        referenceUrl: z.string().url().optional(),
      })
    ),
  }),
});

export const collections = {
  quizzes: quizzesCollection,
};
