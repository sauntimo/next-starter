export interface IApiResponseBase {
    success: boolean;
    message: string;
  }

export interface ISuccessResponse<T> extends IApiResponseBase {
    success: true;
    data: T;
  }

export interface IFailResponse extends IApiResponseBase {
    success: false;
  }

export type IApiResponse<T> = ISuccessResponse<T> | IFailResponse
