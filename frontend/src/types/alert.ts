export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Arena = "North" | "South" | "Center";
export type Status = "Active" | "Handled";
export interface Alert {
  displayName: string | null;
  description: string;
  priority: Priority;
  arena: Arena;
  lon: number | null;
  lat: number | null;
}

export interface AlertResponse {
  id: number;
  displayName: string | null;
  description: string;
  priority: Priority;
  arena: Arena;
  status: Status;
  lon: number;
  lat: number;
  createdAt: string;
}
