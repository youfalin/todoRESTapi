import { Request, Response, NextFunction } from "express";
import { todoServive } from "../services/todo.service";
const jwt = require("jsonwebtoken");

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todos = await todoServive.getAllTodos(decoded.id);
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};
export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todo = await todoServive.getTodoById(decoded.id, req.params.id);
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
  const token = req.cookies.authToken;
  const { title, description } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newTodo = await todoServive.createTodo(
      title,
      description,
      decoded.id
    );
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
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const updatedTodo = await todoServive.updateTodo(
      decoded.id,
      req.params.id,
      title,
      description,
      finished
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {  
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await todoServive.deleteTodo(decoded.id, req.params.id);
    res.status(200).json({ message: "todo deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
