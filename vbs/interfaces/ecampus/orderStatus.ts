import { Error } from './error'

export interface GetOrderStatusesRequest {
	StartDate: string;
	EndDate: string;
}

export interface GetOrderStatusesResponse {
	GetOrderStatusesResult: OrderStatusesResult;
}

export interface OrderStatusesResult {
	Errors?: Error[];
	JSONStatuses?: string;
}
