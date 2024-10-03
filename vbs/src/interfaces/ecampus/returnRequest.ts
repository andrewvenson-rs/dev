import { Error } from "./error";
import { ApiRequest } from "./apiRequest";

export interface CreateReturnRequest extends ApiRequest {
  ReturnItems: ReturnItem[];
}

export interface ReturnItem {
  EcampusOrderItemID: number;
  Quantity: number;
}

export interface CreateReturnResponse {
  CreateReturnResult: CreateReturnResult;
}

export interface CreateReturnResult {
  Errors?: Error[];
  ReturnID?: string;
  ReturnLabelURL?: string;
}
