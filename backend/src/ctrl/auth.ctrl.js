export default function createAuthCtrl(authService) {
  async function register(req, res) {
    await authService.register(req.body);

    return res
      .status(201)
      .send({ success: true, data: "User created successfully" });
  }

  async function login(req, res) {
    const token = await authService.login(req.body);
    res.send({ success: true, data: { token } });
  }

  return { register, login };
}
