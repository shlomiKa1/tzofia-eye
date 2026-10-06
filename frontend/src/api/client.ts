import axios, { AxiosError } from "axios";
import { SERVER_URL } from "../config";

export const api = axios.create({ baseURL: SERVER_URL, withCredentials: true });

export function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError<AxiosError>(err)) {
    if (!err?.response) {
      return "Failed at server";
    }
    return err.message;
  }
  return "Somthing went wrong";
}
