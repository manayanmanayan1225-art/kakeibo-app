import type { ReturnStatus } from "./returnStatus"

export interface LoginRequest {
  email: string
  pass: string
}

export interface LoginResponse extends ReturnStatus {
  userId?: string
}
