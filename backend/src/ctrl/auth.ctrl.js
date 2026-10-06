export default function createAuthCtrl(authService) {
  async function register(req, res) {
    await authService.register(req.body);

    return res
      .status(201)
      .send({ success: true, data: "User created successfully" });
  }

  async function login(req, res) {
    const token = await authService.login(req.body);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.send({ success: true, data: { token } });
  }

  async function me(req, res) {
    const user = await authService.me(req.user?.id);
    res.send({ success: true, data: user });
  }

  return { register, login, me };
}
