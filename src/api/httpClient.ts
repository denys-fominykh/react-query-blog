import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

function createHttpClient() {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig,
): Promise<SuccessPayload> {
  const { headers } = config;
  const response: AxiosResponse<SuccessPayload> = await httpClient.request<SuccessPayload>({
    ...config,
    headers,
  });

  return response.data;
}
