import { AxiosRequestConfig } from "axios";
import { axiosService } from "./axiosService";

export function createResourceModel<T extends unknown>(
  entityName: string,
  schema: any,
  storeCommunications: any
) {
  return {
    key: entityName,

    fetchById: async (id: string, params: any): Promise<T> => {
      const response = await axiosService.get<T>(`/${entityName}/${id}`, {
        params
      });
      return response.data;
    },

    fetchByIds: async (ids: string[], params: any): Promise<T[]> => {
      const response = await axiosService.get<{
        page: number;
        size: number;
        response: T[];
      }>(`/${entityName}/crudList`, {
        params: { ...params, _id: ids.join(",") }
      });
      return response.data.response;
    },

    fetchMany: async (params?: any, postFix?: string): Promise<T[]> => {
      const response = await axiosService.get<T[]>(`/${entityName}`, {
        params
      });
      return response.data;
    },

    create: async (config: AxiosRequestConfig): Promise<T> => {
      const response = await axiosService.request<T>({
        ...config,
        url: `/${entityName}`,
        method: "post"
      });
      return response.data;
    },

    edit: async (id: string, config: AxiosRequestConfig): Promise<T> => {
      const response = await axiosService.request<T>({
        ...config,
        url: `/${entityName}/${id}`,
        method: "put"
      });
      return response.data;
    },

    delete: async (id: string, config: AxiosRequestConfig): Promise<T> => {
      const response = await axiosService.request<T>({
        ...config,
        url: `/${entityName}/${id}`,
        method: "put"
      });
      return response.data;
    }
  };
}
