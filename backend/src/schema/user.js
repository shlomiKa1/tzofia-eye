import z from "zod";

export const role = z.enum(["arena_user", "general_user", "admin"]);
export const assignedArena = z.enum(["North", "South", "Center", "All"]);

export const user = z.object({
  username: z.string().trim().min(1, "User name is require"),
  password: z.string().min(8, "Password must include at least 8 characters"),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  role,
  assignedArena,
});

export const loginUser = z.object({
  password: z.string().min(8, "Password must include at least 8 characters"),
  email: z.string().trim().toLowerCase().pipe(z.email()),
});
