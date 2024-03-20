import api from './api';
import { AxiosResponse } from 'axios';

interface IServiceResponse {
  name: string;
  image: string;
  description: string;
  standard_price: number;
  price: number;
}

export default class SearchService {
  static async getServiceData(
    serviceName: string
  ): Promise<IServiceResponse | string> {
    try {
      const response: AxiosResponse<IServiceResponse> = await api.get(
        `/serviceCategory/getAll}`
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error('Failed to fetch service data');
      }
    } catch (error) {
      console.error('Error fetching service data:', error);
      return 'Error fetching service data';
    }
  }
}
