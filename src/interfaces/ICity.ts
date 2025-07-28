import { ISegment } from "./ISegment";

export interface ICity {
  id: number;
  nome: string;
  imagem: string;
  categorias: ISegment[];
}

export interface ICityCategory {
  id: string;
  name: string;
  image: string;
}

export interface IStateCardProps {
  name: string;
}
