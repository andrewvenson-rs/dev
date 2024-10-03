import { getSecret } from "./utils/aws";
import { createSoapClient } from "./utils/ecampus";
import { getOrderStatuses, getInventoryInfo } from "./integrations/ecampus";
import { GetOrderStatusesRequest } from "./interfaces/ecampus/orderStatus";
import { ApiRequest } from "./interfaces/ecampus/apiRequest";
import { InventoryInfoRequest } from "./interfaces/ecampus/inventoryInfo";
import { WSDL_URL } from "./constants/ecampus";

const _getOrderStatuses = async (
  request: GetOrderStatusesRequest
) => {
  const client = await createSoapClient(WSDL_URL);
  const orderStatuses = await getOrderStatuses(client, request);
  const result = orderStatuses?.GetOrderStatusesResult;

  if (result) {
    if (result.Errors?.[0]) {
      return null;
    }
    console.log(result.JSONStatuses, result.JSONStatuses?.length);
  }
};

const _getInventoryInfo = async (
  request: InventoryInfoRequest
) => {

  const client = await createSoapClient(WSDL_URL);
  const inventoryInfo = await getInventoryInfo(client, request);
  const results = inventoryInfo
  console.log(results)

  /*
  if (results) {
    results.forEach((result) => {
      console.log(result.ISBN, result.Condition);
    })
  }
  */
};

const main = async () => {
  const secret = await getSecret("ecampus");

  if (!secret) {
    return null;
  }

  const { API_USER, API_KEY, ENVIRONMENT, VERSION } = JSON.parse(secret);

  const apiRequestData: ApiRequest = {
    APIPassword: API_KEY,
    APIUsername: API_USER,
    APIEnvironment: ENVIRONMENT,
    Version: VERSION,
  };

  await _getOrderStatuses({ StartDate: "2024-08-15", EndDate: "2024-09-01", ...apiRequestData });
  //await _getInventoryInfo({ inventoryInfo: { ISBN: "9780985837952", Condition: "n", EdTechSchoolID: 1 }, ...apiRequestData });
};

main();
