export interface IItemCard {
  id: number;
  title: string;
  description: string;
  price: number;
  likes: number;
  view: number;
  rating: number;
  thumbnail: string;
  images: string[];
}

export interface IStatePage {
  title: string;
}
export interface IRouter {
  title: string;
  callback: (title: IStatePage) => void;
}
