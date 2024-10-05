import { getSecret } from "./utils/aws";
import { createSoapClient } from "./utils/ecampus";
import { getOrderStatuses, getInventoryInfo } from "./integrations/ecampus";
import { GetOrderStatusesRequest } from "./interfaces/ecampus/orderStatus";
import { ApiRequest } from "./interfaces/ecampus/apiRequest";
import { InventoryInfoRequest } from "./interfaces/ecampus/inventoryInfo";
import { WSDL_URL } from "./constants/ecampus";

const _getOrderStatuses = async (request: GetOrderStatusesRequest) => {
  const client = await createSoapClient(WSDL_URL);
  const orderStatuses = await getOrderStatuses(client, request);
  const result: any = orderStatuses?.GetOrderStatusesResult;
  if (!result || result.Errors?.[0]) return null;
  console.log(
    "orders with tracking numbers",
    result.JSONStatuses.filter(
      ({ OrderItem: { TrackingNumber } }) => typeof TrackingNumber === "string",
    ),
  );
};

const _getInventoryInfo = async (request: InventoryInfoRequest) => {
  const client = await createSoapClient(WSDL_URL);
  const inventoryInfo = await getInventoryInfo(client, request);
  const results = inventoryInfo;
  if (!results) return null;
  console.log(results);
  console.log(results?.GetInventoryInfoResult?.[0]?.Errors?.[0]?.["Error"]);
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

  await _getOrderStatuses({
    StartDate: "2024-08-15",
    EndDate: "2024-09-01",
    ...apiRequestData,
  });

  await _getInventoryInfo({
    inventoryInfo: {
      ISBN: "9780471099550",
      Condition: "N",
      EdTechSchoolID: 6665,
    },
    ...apiRequestData,
  });
};

main();
