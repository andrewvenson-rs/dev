const soap = require("soap");

import { parseStringPromise } from "xml2js";

export const createSoapClient = async (wsdlUrl: string): Promise<any> => {
  return soap.createClientAsync(wsdlUrl);
};

export const parseResponse = async (response: any) => {
  try {
    return await parseStringPromise(response[1]);
  } catch (error) {
    console.error("Error parsing SOAP response:", error);
    return null;
  }
};
