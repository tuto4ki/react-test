import { MyInput } from "components/UI/input/MyInput";

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

export type TCreateItem = {
  inputName: string;
  inputDate: string;
  selectTypeRoom: string;
  inputAgree: string;
  inputPromo: string;
  inputFile: string;
}

export interface IFormCallback {
  callback: (state: TCreateItem) => void;
}
