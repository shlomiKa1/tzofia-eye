import express from "express";

export default function createAlertsRoute(alertsCtrl) {
  const router = express.Router();

  router.get("/", alertsCtrl.getAll);

  return router;
}
