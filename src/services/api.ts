import axios, { AxiosInstance, AxiosResponse } from "axios";

export const httpClient: AxiosInstance = axios.create({
  baseURL: "https://sujeitoprogramador.com/r-api",
});

export const carregarFilmes = async (): Promise<any> => {
  const url: string = `/?api=filmes`;
  const response: AxiosResponse<any> = await httpClient.get<any>(url);
  return response.data;
};
