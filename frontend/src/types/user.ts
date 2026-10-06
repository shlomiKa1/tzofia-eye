export type Role = "admin" | "general_user" | "arena_user";

export type AssignedArena = "North" | "South" | "Center" | "All";

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: Role;
  assignedArena: AssignedArena;
}
