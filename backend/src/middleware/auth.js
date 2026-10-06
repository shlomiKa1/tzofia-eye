import { AppError } from "../utils/AppError.js";
import { verifyToken } from "../utils/token.js";

export function verifyAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return next(new AppError(401, "Token is missing"));
  }

  try {
    const { ati, exp, ...user } = verifyToken(token);
    req.user = user;
  } catch (err) {
    return next(new AppError(401, "Token is expired"));
  }
  next();
}

export function requiredRole(...roles) {
  return function (req, res, next) {
    if (!roles.includes(req.user?.role)) {
      return next(new AppError(403, "You are not allowed"));
    }
  };
}
