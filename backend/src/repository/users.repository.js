import { supabase } from "../db/db.js";
import repository from "./repository.js";

export default function createUsersRepo(supa = supabase.from("users")) {
  const base = repository(supa);

  async function findByEmail(email) {
    return await supa.select("*").eq("email", email);
  }

  return { ...base, findByEmail };
}
