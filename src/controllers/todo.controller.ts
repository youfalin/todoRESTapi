import { Request, Response, NextFunction } from "express";
import { todoServive } from "../services/todo.service";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoServive.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await todoServive.getTodoById(req.params.id);
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;
  try {
    const newTodo = await todoServive.createTodo(title, description);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};
export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, finished } = req.body;
  try {
    const updatedTodo = await todoServive.updateTodo(
      req.params.id,
      title,
      description,
      finished
    );
    res.status(200).json(updateTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await todoServive.deleteTodo(req.params.id);
    res.status(200).json({ message: "todo deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
