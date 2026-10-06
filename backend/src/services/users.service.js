import { AppError } from "../utils/AppError";

export default function createUsersService(usersRepo) {
  async function allUsers() {
    const { data, error, status } = await usersRepo.getAll();

    if (error) {
      throw new AppError(status, error);
    }

    return data;
  }

  async function updateUser(id, newUser) {
    const { data, error, status } = await usersRepo.update(id, newUser);

    if (error) {
      throw new AppError(status, error.message);
    }
    return data;
  }

  
  return { allUsers, updateUser };
}
