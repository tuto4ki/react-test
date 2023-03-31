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
/*
export type TFormValues = {
  name?: string;
  price?: string;
  description?: string;
  date?: string;
  selectRoom?: string;
  agree?: string;
  likes?: string;
  file?: FileList | string;
  radioSelection?: string;
};
*/
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
