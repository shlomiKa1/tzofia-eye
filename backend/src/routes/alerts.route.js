import express from "express";

export default function createAlertsRoute(alertsCtrl) {
  const router = express.Router();

  router.get("/", alertsCtrl.getAll);
  router.get("/:id", alertsCtrl.getById);
  
  return router;
}
