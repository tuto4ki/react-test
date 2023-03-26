import { MyInput } from "components/UI/input/MyInput";

export interface IItemCard {
  id: number;
  title: string;
  date: string;
  typeRoom: string;
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
  date: string;
  description: string;
  price: number;
  selectTypeRoom: string;
  inputAgree: string;
  inputPromo: number;
  inputFile: string;
}

export interface IFormCallback {
  callback: (state: TCreateItem) => void;
}

export interface ICreateFormState {
  isValidName: boolean;
  messageErrorName: string;
  isValidPrice: boolean;
  messageErrorPrice: string;
  isValidDescription: boolean;
  messageErrorDescription: string;
  isValidDate: boolean;
  messageErrorDate: string;
  isValidTypeRoom: boolean;
  messageErrorTypeRoom: string;
  isValidAgree: boolean;
  messageErrorAgree: string;
  isValidLikes: boolean;
  messageErrorLikes: string;
  isValidFile: boolean;
  messageErrorFile: string;
  showModal: boolean;
}
