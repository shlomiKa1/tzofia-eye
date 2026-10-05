import { createAlert, updateAlert } from "../schema/alert.js";
import { AppError } from "../utils/AppError.js";

export default function createAlertsCtrl(alertsRepo) {
  async function getAll(req, res) {
    const { data, error, status } = await alertsRepo.getAll(req.query);

    if (error) {
      throw new AppError(status, error.message);
    }

    res.send({ success: true, data });
  }

  async function getById(req, res) {
    const { data, error, status } = await alertsRepo.getById(req.params.id);

    if (error) {
      throw new AppError(status, error.message);
    }

    if (data.length === 0) {
      throw new AppError(404, "Alert not found");
    }

    res.send({ success: true, data: data[0] });
  }

  return { getAll, getById };
}
