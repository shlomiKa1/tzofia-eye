import { supabase } from "../db/db.js";
import repository from "./repository.js";

export default function createAlertsRepo(supa = supabase.from("alerts")) {
  return repository(supa);
}
