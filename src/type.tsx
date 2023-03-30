export interface IItemCard {
  id?: number;
  name: string;
  date: string;
  typeRoom: string;
  description: string;
  price: number;
  likes: number;
  view?: number;
  rating?: number;
  thumbnail: string;
  images?: string[];
  inputAgree?: string;
}

export interface IStatePage {
  title: string;
}
export interface IRouter {
  title: string;
  callback: (title: string) => void;
}
export interface IFormCallback {
  callback: (state: IItemCard) => void;
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

export type TFormValues = {
  name?: string;
  price?: string;
  description?: string;
  date?: string;
  select?: string;
};
