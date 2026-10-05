export type ApiResponse<T> =
  | { success: boolean; data: T }
  | { success: false; message: string };
