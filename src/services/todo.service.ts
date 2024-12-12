import prisma from "../config/prisma";
import { CustomError } from "../middleware/customError";

export const todoServive = {
  getAllTodos: async () => {
    const todos = await prisma.todo.findMany();
    if (todos) {
      return todos;
    }
  },

  getTodoById: async (id: string) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }

    return todo;
  },

  createTodo: async (title: string, description: string) => {
    return await prisma.todo.create({ data: { title, description } });
  },

  updateTodo: async (
    id: string,
    title: string,
    description: string,
    finished: boolean
  ) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }

    return await prisma.todo.update({
      where: { id },
      data: { title, description, finished },
    });
  },

  deleteTodo: async (id: string) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }

    await prisma.todo.delete({ where: { id } });
  },
};
