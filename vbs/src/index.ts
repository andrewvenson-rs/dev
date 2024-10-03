import { getSecret } from "./utils/aws";
import { createSoapClient } from "./utils/ecampus";
import { getOrderStatuses } from "./integrations/ecampus";
import { GetOrderStatusesRequest } from "./interfaces/ecampus/orderStatus";
import { WSDL_URL } from "./constants/ecampus";

const main = async () => {
  const secret = await getSecret("redshelf/local/ecampus");
  const { API_USER, API_KEY, ENVIRONMENT } = JSON.parse(secret);
  const orderStatusRequest: GetOrderStatusesRequest = {
    StartDate: "2024-08-25",
    EndDate: "2024-09-01",
    APIPassword: API_KEY,
    APIUsername: API_USER,
    APIEnvironment: ENVIRONMENT,
    Version: "1.1",
  };

  const client = await createSoapClient(WSDL_URL);
  const orderStatuses = await getOrderStatuses(client, orderStatusRequest);
  console.log(
    JSON.parse(
      orderStatuses["soap:Envelope"]["soap:Body"][0][
        "GetOrderStatusesResponse"
      ][0]["GetOrderStatusesResult"][0]["JSONStatuses"][0],
    ),
  );
};

main();
