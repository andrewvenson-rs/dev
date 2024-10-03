import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

export const getSecret = async (
  secretName: string,
): Promise<string | undefined> => {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const response = await client.send(command);
    return response.SecretString;
  } catch (error) {
    console.error("Error retrieving secret:", error);
  }
  return undefined;
};
