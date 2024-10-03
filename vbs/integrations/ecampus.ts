import { parseResponse } from '../utils/ecampus'
import { InventoryInfoRequest, InventoryInfoResponse } from '../interfaces/ecampus/inventoryInfo'
import { CartInventoryInfoRequest, CartInventoryInfoResponse } from '../interfaces/ecampus/cartInventory'
import { CreateCustomerRequest, CreateCustomerResponse } from '../interfaces/ecampus/customer'
import { CreateOrderRequest, CreateOrderResponse } from '../interfaces/ecampus/order'
import { GetOrderStatusesRequest, GetOrderStatusesResponse } from '../interfaces/ecampus/orderStatus'
import { CreatePaymentMethodRequest, CreatePaymentMethodResponse } from '../interfaces/ecampus/paymentMethod'
import { CreateReturnRequest, CreateReturnResponse } from '../interfaces/ecampus/returnRequest'

export const getInventoryInfo = async (client: any, request: InventoryInfoRequest): Promise<InventoryInfoResponse | null> => {
	try {
		const result = await client.GetInventoryInfoAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error fetching inventory info:', error);
		return null;
	}
};


export const getCartInventoryInfo = async (client: any, request: CartInventoryInfoRequest): Promise<CartInventoryInfoResponse | null> => {
	try {
		const result = await client.GetCartInventoryInfoAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error fetching cart inventory info:', error);
		return null;
	}
};


export const createCustomer = async (client: any, request: CreateCustomerRequest): Promise<CreateCustomerResponse | null> => {
	try {
		const result = await client.CreateCustomerAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error creating customer:', error);
		return null;
	}
};


export const createPaymentMethod = async (client: any, request: CreatePaymentMethodRequest): Promise<CreatePaymentMethodResponse | null> => {
	try {
		const result = await client.CreatePaymentMethodAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error creating payment method:', error);
		return null;
	}
};

export const createOrder = async (client: any, request: CreateOrderRequest): Promise<CreateOrderResponse | null> => {
	try {
		const result = await client.CreateOrderAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error creating order:', error);
		return null;
	}
};


export const createReturn = async (client: any, request: CreateReturnRequest): Promise<CreateReturnResponse | null> => {
	try {
		const result = await client.CreateReturnAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error creating return:', error);
		return null;
	}
};

export const getOrderStatuses = async (client: any, request: GetOrderStatusesRequest): Promise<GetOrderStatusesResponse | null> => {
	try {
		const result = await client.GetOrderStatusesAsync(request);
		return parseResponse(result);
	} catch (error) {
		console.error('Error fetching order statuses:', error);
		return null;
	}
};
