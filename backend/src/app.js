import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import createAlertsRoute from "./routes/alerts.route.js";

export function createApp({ alertsCtrl }) {
  const app = express();

  app.use(express.json());

  app.use("/api/alerts", createAlertsRoute(alertsCtrl));
  
  app.use((_req, res) => {
    res.status(404).send({ success: false, message: "Route not found" });
  });

  app.use(errorHandler);
  return app;
}
