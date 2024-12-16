import prisma from "../config/prisma";
import { CustomError } from "../middleware/customError";

export const todoServive = {
  getAllTodos: async (userId: string) => {
    const todos = await prisma.todo.findMany({ where: { userId } });
    if (todos) {
      return todos;
    } else {
      return { message: "No todo yet!" };
    }
  },

  getTodoById: async (userId: string, id: string) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }
    // check if todo belongs to this user
    if (todo?.userId !== userId) {
      throw new CustomError(404, "Todo not found!", null);
    }
    return todo;
  },

  createTodo: async (title: string, description: string, userId: string) => {
    return await prisma.todo.create({ data: { title, description, userId } });
  },

  updateTodo: async (
    userId: string,
    id: string,
    title: string,
    description: string,
    finished: boolean
  ) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }
    if (todo?.userId !== userId) {
      throw new CustomError(404, "Todo not found!", null);
    }
    return await prisma.todo.update({
      where: { id },
      data: { title, description, finished },
    });
  },
  deleteTodo: async (userId: string, id: string) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }

    if (todo?.userId !== userId) {
      throw new CustomError(404, "Todo not found!", null);
    }

    await prisma.todo.delete({ where: { id } });
  },
};
