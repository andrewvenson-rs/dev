import { Error } from './error'
import { ApiRequest } from './apiRequest'

export interface InventoryInfoRequest extends ApiRequest {
	inventoryInfo?: InventoryInfo;
}

export interface InventoryInfo {
	ISBN: string;
	Condition: string;
	EdTechSchoolID: number;
}

export interface InventoryInfoResponse {
	GetInventoryInfoResult: InventoryInfoResult[];
}

export interface InventoryInfoResult {
	Errors?: Error[];
	ISBN?: string;
	Condition?: string;
	Quantity: number;
	AvailabilityID?: string;
	AvailabilityDesc?: string;
	Price: number;
	RentalTerm?: string;
	RentalDays: number;
	RentalReturnDate?: string;
	MSRP: number;
	Title?: string;
	Author?: string;
	MediaType?: string;
	NonReturnable?: string;
}
