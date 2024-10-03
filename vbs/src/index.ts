import { createSoapClient } from './utils/ecampus'
import { getOrderStatuses } from './integrations/ecampus'
import { GetOrderStatusesRequest } from './interfaces/ecampus/orderStatus'
import { WSDL_URL } from './constants/ecampus'

const { EC_API_PASSWORD, EC_API_USERNAME, EC_API_ENV, EC_VERSION } = process.env

const main = async () => {
	const orderStatusRequest: GetOrderStatusesRequest = {
		StartDate: '2024-09-01',
		EndDate: '2024-09-10',
		APIPassword: EC_API_PASSWORD,
		APIUsername: EC_API_USERNAME,
		APIEnvironment: EC_API_ENV,
		Version: EC_VERSION
	}

	const client = await createSoapClient(WSDL_URL);
	const orderStatuses = await getOrderStatuses(client, orderStatusRequest);
	console.log(orderStatuses['soap:Envelope']['soap:Body'][0]['GetOrderStatusesResponse'][0]['GetOrderStatusesResult'][0]['Errors'][0]['Error']);
}

main();
