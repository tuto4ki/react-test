import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { TFormValues } from '../../type';
import {
  Label,
  Button,
  InputText,
  InputFile,
  InputDate,
  Textarea,
  Select,
  InputCheckbox,
  InputRadio,
} from '../UI';
import typeRoomJSON from '../../assets/json/typeRoom.json';
import errorMessageJSON from '../../assets/json/errorMessage.json';
import titleFormJSON from '../../assets/json/formMessage.json';
import './CreateCardForm.scss';
import { addListCard } from '../../store/listCardSlice';
import { useAppDispatch } from '../../hook';

const TIMEOUT = 2000;

function CreateCardForm(): JSX.Element {
  const [isModalWindow, setIsModalWindow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    dispatch(
      addListCard({
        name: data.name,
        date: data.date,
        description: data.description,
        price: data.price,
        typeRoom: data.typeRoom,
        inputAgree: data.agree,
        likes: +data.likes,
        thumbnail: URL.createObjectURL(data.file[0]),
      })
    );
    setIsModalWindow(true);
    setTimeout(() => setIsModalWindow(false), TIMEOUT);
    reset();
  });

  return (
    <>
      {isModalWindow && <div className="message-modal">Card added</div>}
      <form name="form" className="container_search" onSubmit={onSubmit}>
        <Label htmlFor="name">{titleFormJSON.name}</Label>
        <div>
          <InputText
            {...register('name', {
              required: errorMessageJSON.name.custom,
              minLength: {
                value: errorMessageJSON.name.minLength,
                message: errorMessageJSON.name.minLengthMessage,
              },
              pattern: {
                value: RegExp(errorMessageJSON.name.patter),
                message: errorMessageJSON.name.custom,
              },
              maxLength: {
                value: errorMessageJSON.name.maxLength,
                message: errorMessageJSON.name.maxLengthMessage,
              },
            })}
            name="name"
          />
          {errors?.name && <p className="message-error">{errors.name.message}</p>}
        </div>
        <Label htmlFor="price">{titleFormJSON.price}</Label>
        <div>
          <InputText
            {...register('price', {
              required: errorMessageJSON.price.custom,
              minLength: {
                value: errorMessageJSON.price.minLength,
                message: errorMessageJSON.price.custom,
              },
              pattern: {
                value: RegExp(errorMessageJSON.price.pattern),
                message: errorMessageJSON.price.custom,
              },
            })}
            name="price"
          />
          {errors?.price && <p className="message-error">{errors.price.message}</p>}
        </div>
        <Label htmlFor="description">{titleFormJSON.description}</Label>
        <div>
          <Textarea
            {...register('description', {
              required: errorMessageJSON.description.custom,
              minLength: {
                value: errorMessageJSON.description.minLength,
                message: errorMessageJSON.description.minLengthMessage,
              },
              maxLength: {
                value: errorMessageJSON.description.maxLength,
                message: errorMessageJSON.description.maxLengthMessage,
              },
            })}
            name="description"
          />
          {errors?.description && <p className="message-error">{errors.description.message}</p>}
        </div>
        <Label htmlFor="date">{titleFormJSON.date}</Label>
        <div>
          <InputDate
            {...register('date', {
              required: errorMessageJSON.date.custom,
            })}
            name="date"
          />
          {errors?.date && <p className="message-error">{errors.date.message}</p>}
        </div>
        <Label htmlFor="selectRoom">{titleFormJSON.typeRoom}</Label>
        <div>
          <Select
            {...register('typeRoom', {
              required: errorMessageJSON.typeRoom.custom,
              minLength: {
                value: errorMessageJSON.typeRoom.minLength,
                message: errorMessageJSON.typeRoom.custom,
              },
            })}
            options={typeRoomJSON.typeRoom}
            name="typeRoom"
            className="select"
          />
          {errors?.typeRoom && <p className="message-error">{errors.typeRoom.message}</p>}
        </div>
        <Label htmlFor="agree">{titleFormJSON.agree}</Label>
        <div>
          <InputCheckbox
            {...register('agree', {
              required: errorMessageJSON.agree.custom,
            })}
            name="agree"
          />
          {errors?.agree && <p className="message-error">{errors.agree.message}</p>}
        </div>
        <Label htmlFor="likes">{titleFormJSON.likes}</Label>
        <div>
          <Label htmlFor="radioYes">{titleFormJSON.likesYes}</Label>
          <InputRadio
            {...register('likes', {
              required: errorMessageJSON.likes.custom,
            })}
            name="likes"
            id="radioYes"
            value="0"
          />
          <Label htmlFor="radioNo">{titleFormJSON.likesNo}</Label>
          <InputRadio
            {...register('likes', {
              required: errorMessageJSON.likes.custom,
            })}
            name="likes"
            id="radioNo"
            value="-1"
          />
          {errors?.likes?.type === 'required' && (
            <p className="message-error">{errors?.likes.message}</p>
          )}
        </div>
        <Label htmlFor="file">{titleFormJSON.file}</Label>
        <div>
          <InputFile
            {...register('file', {
              required: errorMessageJSON.file.custom,
            })}
            name="file"
          />
          {errors?.file && <p className="message-error">{errors.file.message}</p>}
        </div>
        <div className="button-center">
          <Button>{titleFormJSON.submit}</Button>
        </div>
      </form>
    </>
  );
}

export { CreateCardForm };
