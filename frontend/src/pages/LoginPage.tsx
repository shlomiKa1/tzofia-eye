import { useState, type FormEvent } from "react";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { getErrorMessage } from "../api/client";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useCheckAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password || password.length < 8) {
      setError("Email and password(+8) are require");
    }

    setLoading(true);
    try {
      await login({ email: email.trim(), password });
      navigate("/", { replace: true });
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

      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}
      <button disabled={loading}>{loading ? "Login..." : "Login"}</button>
    </form>
  );
};

export default LoginPage;
