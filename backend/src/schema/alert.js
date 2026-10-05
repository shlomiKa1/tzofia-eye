import z from "zod";

export const priority = z.enum(["Low", "Medium", "High", "Critical"]);

export const arena = z.enum(["North", "South", "Center"]);

export const status = z.enum(["Active", "Handled"]);

export const createAlert = z.object({
  displayName: z.string().optional(),
  description: z.string().trim().min(1, "Description is required"),
  priority,
  arena,
  lon: z.number().min(-90).max(90),
  lat: z.number().min(-180).max(180),
});

export const updateAlert = createAlert.partial().extend({
  status: status.optional(),
});
