import express from "express";
import { requiredRole, verifyAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { loginUser, user } from "../schema/user.js";

export default function createAuthRoute(authCtrl) {
  const router = express.Router();

  router.post(
    "/register",
    verifyAuth,
    requiredRole("admin"),
    validate(user),
    authCtrl.register,
  );
  router.post("/login", validate(loginUser, "body"), authCtrl.login);
  router.get("/me", verifyAuth, authCtrl.me);
  router.post("/logout", (_req, res) => {
    res.clearCookie("token");
    res.send({ success: true, data: "User logout successfully" });
  });

  return router;
}
