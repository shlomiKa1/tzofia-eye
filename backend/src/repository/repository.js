export default function repository(supabase) {
  async function getAll(filter = {}) {
    return await supabase.select("*").match(filter);
  }

  async function getById(id) {
    return await supabase.select("*").eq("id", id);
  }

  async function create(data) {
    return await supabase.insert(data).select("*");
  }

  async function update(id, data) {
    return await supabase.update(data).eq("id", id).select("*");
  }

  async function remove(id) {
    return await supabase.delete().eq("id", id).select("*");
  }

  async function generateId() {
    const { data } = await getAll();
    return data.length > 0 ? Math.max(...data.map((d) => d.id)) + 1 : 1;
  }

  return { getAll, getById, create, update, remove, generateId };
}
