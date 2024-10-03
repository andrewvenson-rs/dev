import { Error } from './error'
import { ApiRequest } from './apiRequest'

export interface CreateOrderRequest extends ApiRequest {
	order: Order;
}

export interface Order {
	PartnerOrderId?: string;
	SchoolID: number;
	EcampusCustomerID: number;
	EcampusPaymentID: number;
	OrderItems?: OrderItem[];
	TotalPrice: number;
	ShipName?: string;
	ShipAddress1?: string;
	ShipAddress2?: string;
	ShipCity?: string;
	ShipState?: string;
	ShipZip?: string;
	ShipCountry?: string;
	ShipPhone?: string;
	ShippingMethodID: number;
}

export interface OrderItem {
	PartnerOrderItemId?: string;
	ISBN?: string;
	Price: number;
	Shipping: number;
	Tax: number;
	Quantity: number;
	Condition?: string;
}

export interface CreateOrderResponse {
	CreateOrderResult: CreateOrderResult;
}

export interface CreateOrderResult {
	Errors?: Error[];
	EcampusOrderId: number;
	Status: number;
	GrandTotal: number;
}

