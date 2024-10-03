import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export const getSecret = async (
  secretName: string,
): Promise<string | undefined> => {
  try {
    const client = new SecretsManagerClient({
      region: "us-east-1",
    });
    const command = new GetSecretValueCommand({
      SecretId: `${process.env.environmentName}/${secretName}`,
    });
    if (!command) return undefined;
    const response = await client.send(command);
    if (!response) return undefined;
    return response?.SecretString || undefined;
  } catch (error) {
    console.error("Error retrieving secret:", error);
  }
  return undefined;
};
