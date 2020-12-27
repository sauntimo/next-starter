import {IFailResponse} from '../interfaces/api'

export {};

/**
   * helper fn for returning an error
   * @param message description of what went wrong
   */
export function failReturn(message: string): IFailResponse {
  return ({
    success: false,
    message,
  })
}
