import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Request, Response, NextFunction } from 'express';

export function validateRequest(classToValidate: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validationObj = plainToInstance(classToValidate, req.body);
    const errors = await validate(validationObj);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(error => error.constraints) });
    } else {
      next();
    }
  };
}