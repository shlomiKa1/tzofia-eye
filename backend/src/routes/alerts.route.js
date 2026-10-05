import express from "express";

export default function createAlertsRoute(alertsCtrl) {
  const router = express.Router();

  router.get("/", alertsCtrl.getAll);
  router.get("/:id", alertsCtrl.getById);
  router.post("/", alertsCtrl.create);
  router.put("/:id", alertsCtrl.update);

  return router;
}
