import { Errors } from "./error";
import { ApiRequest } from "./apiRequest";

export interface GetOrderStatusesRequest extends ApiRequest {
  StartDate: string;
  EndDate: string;
}

export interface GetOrderStatusesResponse {
  GetOrderStatusesResult: OrderStatusesResult;
}

export interface OrderStatusesResult extends Errors {
  JSONStatuses?: string;
}
