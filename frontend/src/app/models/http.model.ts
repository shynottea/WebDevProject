import { InjectionToken } from "@angular/core";

export const APP_USER_AGENT: InjectionToken<string> = new InjectionToken<string>('no-value');
export const HOST_ID: InjectionToken<string> = new InjectionToken<string>('');

export interface BaseResponse<T = any> {
  status: string,
  data?: T,
  errors?: Errors[],
}

export interface Errors {
  code: string,
  message: string,
}
