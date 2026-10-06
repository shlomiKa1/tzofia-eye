import { AppError } from "../utils/AppError.js";

export function validate(schema) {
  return function (req, _res, next) {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      throw new AppError(400, parsed.error.issues);
    }

    req.body = parsed.data;
    next();
  };
}
