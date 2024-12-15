import prisma from "../config/prisma";
import { CustomError } from "../middleware/customError";

export const todoServive = {
<<<<<<< HEAD
  getAllTodos: async (userId: string) => {
    const todos = await prisma.todo.findMany({ where: { userId } });
    if (todos) {
      return todos;
    } else {
      return { message: "No todo yet!" };
    }
  },

  getTodoById: async (userId: string, id: string) => {
=======
  getAllTodos: async () => {
    const todos = await prisma.todo.findMany();
    if (todos) {
      return todos;
    }
  },

  getTodoById: async (id: string) => {
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }
<<<<<<< HEAD
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
=======

    return todo;
  },

  createTodo: async (title: string, description: string) => {
    return await prisma.todo.create({ data: { title, description } });
  },

  updateTodo: async (
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    id: string,
    title: string,
    description: string,
    finished: boolean
  ) => {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }
<<<<<<< HEAD
    if (todo?.userId !== userId) {
      throw new CustomError(404, "Todo not found!", null);
    }
=======

>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    return await prisma.todo.update({
      where: { id },
      data: { title, description, finished },
    });
  },
<<<<<<< HEAD
  deleteTodo: async (userId: string, id: string) => {
=======

  deleteTodo: async (id: string) => {
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new CustomError(404, "Todo not found!", null);
    }

<<<<<<< HEAD
    if (todo?.userId !== userId) {
      throw new CustomError(404, "Todo not found!", null);
    }

=======
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    await prisma.todo.delete({ where: { id } });
  },
};
