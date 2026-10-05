import { AppError } from "../utils/AppError.js";

export default function createAlertsCtrl(alertsRepo) {
  async function getAll(req, res) {
    const { data, error, status } = await alertsRepo.getAll(req.query);

    if (error) {
      throw new AppError(status, error.message);
    }

    res.send({ success: true, data });
  }

  return { getAll };
}
