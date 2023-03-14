export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: number;
  createdAt: Date;
}
