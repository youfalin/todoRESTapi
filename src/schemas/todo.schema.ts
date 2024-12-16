import { z } from 'zod';

export const todoSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  description: z.string().max(500, "Description cannot exceed 500 characters"),
});

export type TodoInput = z.infer<typeof todoSchema>;
