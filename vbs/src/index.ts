import { createSoapClient } from './utils/ecampus'
import { getOrderStatuses } from './integrations/ecampus'
import { GetOrderStatusesRequest } from './interfaces/ecampus/orderStatus'
import { WSDL_URL } from './constants/ecampus'

const main = async () => {
	const orderStatusRequest: GetOrderStatusesRequest = {
		StartDate: '2024-09-01',
		EndDate: '2024-09-10',
	}

	const client = await createSoapClient(WSDL_URL);
	const orderStatuses = await getOrderStatuses(client, orderStatusRequest);
	console.log(orderStatuses);
}

main();
