import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import createAlertsRoute from "./routes/alerts.route.js";
import { VITE_ORIGIN } from "./config.js";
import { logger } from "./middleware/logger.js";

export function createApp({ alertsCtrl }) {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: VITE_ORIGIN, credentials: true }));

  app.use(logger);

  app.use("/api/alerts", createAlertsRoute(alertsCtrl));
  app.use((_req, res) => {
    res.status(404).send({ success: false, message: "Route not found" });
  });

  app.use(errorHandler);
  return app;
}
