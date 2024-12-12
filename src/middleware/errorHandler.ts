// error-handler.ts
import { Request, Response, NextFunction } from 'express';
import { CustomError } from './customError';

export const errorHandler = (
  err: Error | CustomError, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      message: err.message,
      data: err.data
    });
  } else {
    console.error(err.stack);
    res.status(500).json({
      message: 'An error occurred on the server.',
      data: null
    });
  }
  // If you want to pass the error to the next middleware (though typically not needed for the last error handler)
  // next(err);
};