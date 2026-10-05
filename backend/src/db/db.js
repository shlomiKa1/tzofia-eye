import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PRIVATE_KEY, SUPABASE_URI } from "../config.js";

export const supabase = createClient(SUPABASE_URI, SUPABASE_PRIVATE_KEY);
