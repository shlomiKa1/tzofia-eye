import bcrypt from "bcryptjs";
import { AppError } from "../utils/AppError.js";
import { generateToken } from "../utils/token.js";

export default function createAuthService(usersRepo) {
  async function register({ email, password, username, role, assignedArena }) {
    const passwordHash = await bcrypt.hash(password, 12);
    const id = await usersRepo.generateId();
    const user = {
      id,
      username,
      password: passwordHash,
      email,
      role,
      assignedArena,
    };

    const { error, status } = await usersRepo.create(user);
    if (status === 409) {
      throw new AppError(409, "there is already an user with that email");
    }

    if (error) {
      throw new AppError(status, error.message);
    }

    return status === 201 ? true : false;
  }

  async function login({ email, password }) {
    const { data } = await usersRepo.getByEmail(email);

    const foundedUser = data.length > 0 ? true : false;

    if (!foundedUser) {
      throw new AppError(401, "Email or password not correct");
    }
    
    const user = foundedUser ? data[0] : {};
    const isMatch = user && (await bcrypt.compare(password, user.password));

    if (!isMatch) {
      throw new AppError(401, "Email or password not correct");
    }

    const payload = { id: user.id, username: user.username, role: user.id };
    return generateToken(payload);
  }

  async function me({ id }) {
    const { data } = await usersRepo.getById(id);
    if (data.lenght === 0) {
      throw new AppError(401, "User not found");
    }

    const { password, ...user } = data;
    return user;
  }
  return { register, login, me };
}
