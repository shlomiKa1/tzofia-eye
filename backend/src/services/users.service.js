import { AppError } from "../utils/AppError.js";

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

    if (data.length === 0) {
      throw new AppError(404, "User not found");
    }
    return data;
  }

  async function remove(id) {
    const { data, error, status } = await usersRepo.remove(id);

    if (error) {
      throw new AppError(status, error.message);
    }

    if (data.length === 0) {
      throw new AppError(404, "User not found");
    }

    return data;
  }
  return { allUsers, updateUser, remove };
}
