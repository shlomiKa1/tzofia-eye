import { useState, type FormEvent } from "react";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { getErrorMessage } from "../api/client";
import { useNavigate } from "react-router-dom";
import type { AssignedArena, Role } from "../types/user";

const ROLE = ["admin", "general_user", "arena_user"];
const ASSIGNED_ARENA = ["North", "South", "Center", "All"];

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [assignedArena, setAssignedArena] = useState<AssignedArena | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useCheckAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !email.trim() ||
      !password ||
      password.length < 8 ||
      !username.trim() ||
      !role ||
      !assignedArena
    ) {
      setError(
        "Email, password(+8), username, role and assigned arena are require",
      );
    }

    setLoading(true);
    try {
      await register({
        email: email.trim(),
        password,
        username: username.trim(),
        role: role as Role,
        assignedArena: assignedArena as AssignedArena,
      });
      navigate("/users", { replace: true });
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter yor email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter yor password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter user name"
      />

      <div className="select-option">
        <select
          value={role ?? ""}
          onChange={(e) => setRole(e.target.value as Role)}
        >
          <option value="" disabled>
            Role
          </option>
          {ROLE.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <select
          value={assignedArena ?? ""}
          onChange={(e) => setAssignedArena(e.target.value as AssignedArena)}
        >
          <option value="" disabled>
            Assigned arena
          </option>
          {ASSIGNED_ARENA.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}

      <button disabled={loading}>
        {loading ? "Craeting user..." : "Create user"}
      </button>
    </form>
  );
};

export default RegisterPage;
