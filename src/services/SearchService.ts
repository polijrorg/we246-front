import api from './api';
import { AxiosResponse } from 'axios';
import IService from '@interfaces/Service';

export default class SearchService {
  static async findAllCategory(): Promise<IService[] | null> {
    const response = await api.get<IService[] | null>(
      `/serviceCategory/getAll`
    );
    return response.data || null;
  }

  static async findCategoryByName(name: string): Promise<IService | null> {
    try {
      const response: AxiosResponse<IService | null> = await api.post(
        `/serviceCategory/get`,
        {
          name: name,
        }
      );
      return response.data || null;
    } catch (error) {
      console.error('Erro ao buscar categoria por nome:', error);
      return null;
    }
  }
}
