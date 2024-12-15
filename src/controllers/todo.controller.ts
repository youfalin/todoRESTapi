import { Request, Response, NextFunction } from "express";
import { todoServive } from "../services/todo.service";
<<<<<<< HEAD
const jwt = require("jsonwebtoken");
=======
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
<<<<<<< HEAD
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todos = await todoServive.getAllTodos(decoded.id);
    res.status(200).json(todos);
=======
  try {
    const todos = await todoServive.getAllTodos();
    res.json(todos);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
  } catch (error) {
    next(error);
  }
};
export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
<<<<<<< HEAD
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todo = await todoServive.getTodoById(decoded.id, req.params.id);
=======
  try {
    const todo = await todoServive.getTodoById(req.params.id);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
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
<<<<<<< HEAD
  const token = req.cookies.authToken;
  const { title, description } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newTodo = await todoServive.createTodo(
      title,
      description,
      decoded.id
    );
=======
  const { title, description } = req.body;
  try {
    const newTodo = await todoServive.createTodo(title, description);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
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
<<<<<<< HEAD
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const updatedTodo = await todoServive.updateTodo(
      decoded.id,
=======
  try {
    const updatedTodo = await todoServive.updateTodo(
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
      req.params.id,
      title,
      description,
      finished
    );
<<<<<<< HEAD
    res.status(200).json(updatedTodo);
=======
    res.status(200).json(updateTodo);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
<<<<<<< HEAD
) => {  
  const token = req.cookies.authToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await todoServive.deleteTodo(decoded.id, req.params.id);
=======
) => {
  try {
    await todoServive.deleteTodo(req.params.id);
>>>>>>> 0601cc808efaca5f653d441532dc0c45ef205f74
    res.status(200).json({ message: "todo deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
