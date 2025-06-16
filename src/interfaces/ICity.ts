export interface ICity {
  id: string;
  name: string;
  image: string;
  url: string;
  category: ICityCategory[];
}

export interface ICityCategory {
  id: string;
  name: string;
  image: string;
}
