import { Error } from './error'
import { ApiRequest } from './apiRequest'

export interface CreateCustomerRequest extends ApiRequest {
	customer: Customer;
}

export interface Customer {
	EmailAddress?: string;
	CustomerName?: string;
	AlternateEmail?: string;
}

export interface CreateCustomerResponse {
	CreateCustomerResult: CreateCustomerResult;
}

export interface CreateCustomerResult {
	Errors?: Error[];
	EcampusCustomerID: number;
	EcampusCustomerExists: boolean;
	EmailAddress?: string;
}
