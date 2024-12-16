import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateSchema =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body); // Validate request body against the schema
      next(); // Proceed to the next middleware/controller if validation succeeds
    } catch (error: any) {
      res.status(400).json({
        errors: error.errors.map((err: any) => ({
          path: err.path,
          message: err.message,
        })),
      });
    }
  };
