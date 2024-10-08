import { parseResponse } from "../utils/ecampus";
import {
  InventoryInfoRequest,
  InventoryInfoResponse,
} from "../interfaces/ecampus/inventoryInfo";
import {
  CartInventoryInfoRequest,
  CartInventoryInfoResponse,
} from "../interfaces/ecampus/cartInventory";
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
} from "../interfaces/ecampus/customer";
import {
  CreateOrderRequest,
  CreateOrderResponse,
} from "../interfaces/ecampus/order";
import {
  GetOrderStatusesRequest,
  GetOrderStatusesResponse,
} from "../interfaces/ecampus/orderStatus";
import {
  CreatePaymentMethodRequest,
  CreatePaymentMethodResponse,
} from "../interfaces/ecampus/paymentMethod";
import {
  CreateReturnRequest,
  CreateReturnResponse,
} from "../interfaces/ecampus/returnRequest";

export const getInventoryInfo = async (
  client: any,
  request: InventoryInfoRequest,
): Promise<InventoryInfoResponse | null> => {
  try {
    console.log("getInventoryInfo:", JSON.stringify(request));
    const result = await client.GetInventoryInfoAsync(request);
    if (!result) return null;
    const response = await parseResponse(result);
    if (!response) return null;
    console.log(
      response["soap:Envelope"]["soap:Body"][0]["GetInventoryInfoResponse"][0],
    );
    return {
      GetInventoryInfoResult:
        response["soap:Envelope"]["soap:Body"][0][
        "GetInventoryInfoResponse"
        ][0]["GetInventoryInfoResult"],
    };
  } catch (error) {
    console.error("Error fetching inventory info:", error);
    return null;
  }
};

export const getCartInventoryInfo = async (
  client: any,
  request: CartInventoryInfoRequest,
): Promise<CartInventoryInfoResponse | null> => {
  try {
    console.log("getCartInventoryInfo:", JSON.stringify(request));
    const result = await client.GetCartInventoryInfoAsync(request);
    if (!result) return null;
    const response = parseResponse(result);
    if (!response) return null;
    return {
      GetCartInventoryInfoResult:
        response["soap:Envelope"]["soap:Body"][0][
        "GetCartInventoryInfoResponse"
        ][0]["GetCartInventoryInfoResult"],
    };
  } catch (error) {
    console.error("Error fetching cart inventory info:", error);
    return null;
  }
};

export const createCustomer = async (
  client: any,
  request: CreateCustomerRequest,
): Promise<CreateCustomerResponse | null> => {
  try {
    console.log("createCustomer:", JSON.stringify(request));
    const result = await client.CreateCustomerAsync(request);
    if (!result) return null;
    const response = parseResponse(result);
    if (!response) return null;
    return response;
  } catch (error) {
    console.error("Error creating customer:", error);
    return null;
  }
};

export const createPaymentMethod = async (
  client: any,
  request: CreatePaymentMethodRequest,
): Promise<CreatePaymentMethodResponse | null> => {
  try {
    console.log("createPaymentMethod:", JSON.stringify(request));
    const result = await client.CreatePaymentMethodAsync(request);
    if (!result) return null;
    const response = parseResponse(result);
    if (!response) return null;
    return response;
  } catch (error) {
    console.error("Error creating payment method:", error);
    return null;
  }
};

export const createOrder = async (
  client: any,
  request: CreateOrderRequest,
): Promise<CreateOrderResponse | null> => {
  try {
    console.log("createOrder:", JSON.stringify(request));
    const result = await client.CreateOrderAsync(request);
    if (!result) return null;
    const response = parseResponse(result);
    if (!response) return null;
    return response;
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
};

export const createReturn = async (
  client: any,
  request: CreateReturnRequest,
): Promise<CreateReturnResponse | null> => {
  try {
    console.log("createReturn:", JSON.stringify(request));
    const result = await client.CreateReturnAsync(request);
    if (!result) return null;
    const response = parseResponse(result);
    if (!response) return null;
    const { ReturnID, ReturnLabelURL, Errors } =
      response["soap:Envelope"]["soap:Body"][0]["CreateReturnResponse"][0][
      "CreateReturnResult"
      ][0];
    return {
      CreateReturnResult: {
        ReturnID,
        ReturnLabelURL,
        Errors,
      },
    };
  } catch (error) {
    console.error("Error creating return:", error);
    return null;
  }
};

export const getOrderStatuses = async (
  client: any,
  request: GetOrderStatusesRequest,
): Promise<GetOrderStatusesResponse | null> => {
  try {
    console.log("getOrderStatuses:", JSON.stringify(request));
    const result = await client.GetOrderStatusesAsync(request);
    if (!result) return null;
    const response = await parseResponse(result);
    if (!response) return null;
    const { JSONStatuses: jsonStatuses, Errors } =
      response["soap:Envelope"]["soap:Body"][0]["GetOrderStatusesResponse"][0][
      "GetOrderStatusesResult"
      ][0];
    if (Errors && Errors.length > 0) {
      console.log("getOrderStatuses returned the following Errors:", Errors)
      return null
    }
    return {
      GetOrderStatusesResult: {
        JSONStatuses: JSON.parse(jsonStatuses[0]),
        Errors,
      },
    };
  } catch (error) {
    console.error("Error fetching order statuses:", error);
    return null;
  }
};
