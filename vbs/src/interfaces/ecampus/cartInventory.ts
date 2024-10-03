import { Error } from "./error";
import { ApiRequest } from "./apiRequest";

export interface CartInventoryInfoRequest extends ApiRequest {
  cartInventoryInfo?: CartInventoryInfo;
}

export interface CartInventoryInfo {
  CartItems?: ArrayOfCartItem;
  ShippingMethodID: number;
  ShipToName?: string;
  ShipAddressLine1?: string;
  ShipAddressLine2?: string;
  ShipCity?: string;
  ShipState?: string;
  ShipZip?: string;
  ShipCountry?: string;
  EdTechSchoolID: number;
}

export interface ArrayOfCartItem {
  CartItem?: CartItem[];
}

export interface CartItem {
  ISBN?: string;
  Condition?: string;
  Quantity: number;
  Price: number;
}

export interface CartInventoryInfoResponse {
  GetCartInventoryInfoResult: CartInventoryInfoResult[];
}

export interface CartInventoryInfoResult {
  Errors?: Error[];
  ISBN?: string;
  Condition?: string;
  Quantity: number;
  AvailabilityID?: string;
  AvailabilityDesc?: string;
  Price: number;
  MSRP: number;
  Shipping: number;
  Tax: number;
}
