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

interface ICreateRequest {
  name: string;
  email: string;
  cpf_cnpj: string;
  phone: string;
  address: string;
  password: string;
  accountType: string;
}

interface ICreateResponse {
  id: string;
  name: string;
  cpf_cnpj: string;
  phone: string;
  address: string;
  accountType: string;
  created_at: string;
  updated_at: string;
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

  static async create(data: ICreateRequest): Promise<ICreateResponse | string> {
    try {
      const response: AxiosResponse<ICreateResponse> = await api.post(
        '/pendingProvider/register',
        data
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error('There was a problem with the registration');
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário', error);
      return 'Erro ao registrar o usuário';
    }
  }
}
