import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import createAlertsRoute from "./routes/alerts.route.js";
import { VITE_ORIGIN } from "./config.js";
import { logger } from "./middleware/logger.js";
import createAuthRoute from "./routes/auth.route.js";

export function createApp({ alertsCtrl, authCtrl }) {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: VITE_ORIGIN, credentials: true }));
  app.use(cookieParser());

  app.use(logger);

  app.use("/api/alerts", createAlertsRoute(alertsCtrl));
  app.use("/api/auth", createAuthRoute(authCtrl));
  app.use((_req, res) => {
    res.status(404).send({ success: false, message: "Route not found" });
  });

  app.use(errorHandler);
  return app;
}
