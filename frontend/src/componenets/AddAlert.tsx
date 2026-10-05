import { useState, type FormEvent } from "react";
import type { Arena, Priority } from "../types/alert";
import { alertApi } from "../api/alertApi";
import { ARENA, PRIORITY } from "../config";

const AddAlert = () => {
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [arena, setArena] = useState<Arena>("North");
  const [lon, setLon] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const alert = alertApi;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      description.trim().length === 0 ||
      displayName?.trim().length === 0 ||
      lat ||
      lon
    ) {
      setError("All fields are require!");
    }

    const form = {
      displayName: displayName.trim(),
      description: description.trim(),
      priority,
      arena,
      lon,
      lat,
    };

    setLoading(true);
    try {
      await alert.create(form);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Somthing went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Alert</h1>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display name"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <div className="select-option">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
        >
          {PRIORITY.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        <select
          value={arena}
          onChange={(e) => setArena(e.target.value as Arena)}
        >
          {ARENA.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="number"
          value={lon ?? 0}
          onChange={(e) => setLon(Number(e.target.value))}
          placeholder="lon"
        />

        <input
          type="number"
          value={Number(lat)}
          onChange={(e) => setLat(Number(e.target.value))}
          placeholder="lat"
        />
      </div>

      {error && <p role="alert">{error}</p>}
      <button disabled={loading}>{loading ? "Creating..." : "Create"}</button>
    </form>
  );
};

export default AddAlert;
