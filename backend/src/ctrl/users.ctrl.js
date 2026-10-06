export default function createUsersCtrl(usersService) {
  async function allUsers(req, res) {
    const data = await usersService.allUsers();
    res.send({ success: true, data });
  }

  return { allUsers };
}
