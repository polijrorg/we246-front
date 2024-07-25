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

interface User {
  id: string;
  name: string;
  cpf_cnpj: string; // Assuming this is a Brazilian identification number
  phone: string;
  password: string; // Please note that storing passwords in plain text is not secure
  addressId: string;
  account_type: string;
  created_at: string; // Assuming this is a date and time in ISO 8601 format
  updated_at: string; // Assuming this is a date and time in ISO 8601 format
  address: Address; // This is a nested interface
}

interface Address {
  id: string;
  street: string;
  number: string;
  complement: string; // Optional property for apartment number etc.
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  created_at: string; // Assuming this is a date and time in ISO 8601 format
  updated_at: string; // Assuming this is a date and time in ISO 8601 format
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
        '/users/register',
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

  static async getById(id: string): Promise<User | string> {
    try {
      const response: AxiosResponse<User> = await api.post(
        `/users/${id}`,
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
