import type { ReturnStatus } from "./returnStatus"

export interface RegisterUserRequest {
  email: string
  pass: string
  userName: string
}

export interface RegisterUserResponse extends ReturnStatus {}