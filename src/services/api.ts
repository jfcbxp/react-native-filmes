import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Filme } from "../models/Filme";

export const httpClient: AxiosInstance = axios.create({
  baseURL: "https://sujeitoprogramador.com/r-api",
});

export const carregarFilmes = async (): Promise<Filme[]> => {
  const url: string = `/?api=filmes`;
  const response: AxiosResponse<Filme[]> = await httpClient.get<Filme[]>(url);
  return response.data;
};
