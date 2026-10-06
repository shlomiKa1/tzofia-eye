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

  async function create(req, res) {
    const parsed = createAlert.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError(400, parsed.error.issues[0].message);
    }

    const alerts = (await alertsRepo.getAll()).data;
    const id = alerts.length > 0 ? Math.max(...alerts.map((a) => a.id)) + 1 : 1;

    const alert = { id, ...parsed.data, status: "Active" };
    const { data, error, status } = await alertsRepo.create(alert);

    if (error) {
      throw new AppError(status, error.message);
    }

    res.status(201).send({ success: true, data });
  }

  async function update(req, res) {
    const parsed = updateAlert.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError(400, parsed.error.issues[0].path);
    }

    const { data, error, status } = await alertsRepo.update(
      req.params.id,
      parsed.data,
    );

    if (error) throw new AppError(status, error.message);

    res.send({ success: true, data });
  }

  async function remove(req, res) {
    const id = req.params.id;
    const { data, error } = await alertsRepo.remove(id);
    if (error) {
      throw new AppError(400, error.message);
    }

    if (data.length === 0) throw new AppError(404, "Alert not found");

    res.send({ success: true, data: data[0] });
  }

  return { getAll, getById, create, update, remove };
}
