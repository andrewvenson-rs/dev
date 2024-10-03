import { Error } from './error'
import { ApiRequest } from './apiRequest'

export interface CreatePaymentMethodRequest extends ApiRequest {
	paymentMethod: PaymentMethod;
}

export interface PaymentMethod {
	EcampusCustomerID: number;
	CCNumber?: string;
	CardType?: string;
	CardholderName?: string;
	ExpirationYear?: string;
	ExpirationMonth?: string;
	CVV?: string;
	BillName?: string;
	BillAddress1?: string;
	BillAddress2?: string;
	BillCity?: string;
	BillState?: string;
	BillZip?: string;
	BillCountry?: string;
	BillPhone?: string;
}

export interface CreatePaymentMethodResponse {
	CreatePaymentMethodResult: CreatePaymentMethodResult;
}

export interface CreatePaymentMethodResult {
	Errors?: Error[];
	EcampusPaymentID: number;
}
