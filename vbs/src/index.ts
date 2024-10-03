import { getSecret } from "./utils/aws";
import { createSoapClient } from "./utils/ecampus";
import { getOrderStatuses } from "./integrations/ecampus";
import { GetOrderStatusesRequest } from "./interfaces/ecampus/orderStatus";
import { WSDL_URL } from "./constants/ecampus";

const main = async () => {
  const secret = await getSecret("ecampus");

  if (!secret) {
    return null;
  }

  const { API_USER, API_KEY, ENVIRONMENT, VERSION } = JSON.parse(secret);

  const orderStatusRequest: GetOrderStatusesRequest = {
    StartDate: "2024-08-25",
    EndDate: "2024-09-01",
    APIPassword: API_KEY,
    APIUsername: API_USER,
    APIEnvironment: ENVIRONMENT,
    Version: VERSION,
  };

  const client = await createSoapClient(WSDL_URL);
  const orderStatuses = await getOrderStatuses(client, orderStatusRequest);
  const result = orderStatuses?.GetOrderStatusesResult;

  if (result) {
    if (result.Errors?.[0]) {
      return null
    }
    console.log(result.JSONStatuses, result.JSONStatuses?.length)
  };
}

main();
