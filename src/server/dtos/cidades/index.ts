export interface ICidade {
  nome: string;
}

export interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export interface IParamsProps {
  id?: number;
}

export interface IBodyParams {
  nome: string;
}
