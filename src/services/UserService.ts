import api from './api';
import { AxiosResponse } from 'axios';

interface ILoginRequest {
  cpf_cnpj: string;
  password: string;
}

interface IUserResponse {
  user: {
    id: string;
    name: string;
    cpf_cnpj: string;
    phone: string;
    password: string;
    address: string;
    account_type: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
}

export default class UserService {
  static async login(data: ILoginRequest): Promise<IUserResponse | string> {
    try {
      const response: AxiosResponse<IUserResponse> = await api.post(
        '/sessions/login',
        data
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error('Incorrect email/password combination');
      }
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
      return 'Erro ao efetuar login';
    }
  }
}
