import express from "express";
import { requiredRole, verifyAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { loginUser, user } from "../schema/user.js";

export default function createUsersRoute(authCtrl) {
  const router = express.Router();

  router.use(verifyAuth, requiredRole("admin"));

  router.get("/", authCtrl.allUsers);

  return router;
}
