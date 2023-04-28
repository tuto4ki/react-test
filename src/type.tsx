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

export interface IItemProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
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

export type TInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TTextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Array<string> };

export type TFormValues = {
  name: string;
  price: number;
  description: string;
  date: string;
  typeRoom: string;
  agree: string;
  likes: number;
  file: FileList;
};

export interface IProductsListAPI {
  limit: number;
  products: IItemProduct[];
  skip: number;
  total: number;
}
