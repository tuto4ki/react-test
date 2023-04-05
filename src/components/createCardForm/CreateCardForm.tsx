import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { IFormCallback, TFormValues } from '../../type';
import {
  MyLabel,
  MyButton,
  InputText,
  InputFile,
  InputDate,
  MyTextarea,
  MySelect,
  InputCheckbox,
  InputRadio,
} from '../UI';
import typeRoomJSON from '../../assets/json/typeRoom.json';
import errorMessageJSON from '../../assets/json/errorMessage.json';
import './CreateCardForm.css';

function CreateCardForm(props: IFormCallback): JSX.Element {
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
  const onSubmit = handleSubmit((data) => {
    props.callback({
      name: data.name,
      date: data.date,
      description: data.description,
      price: data.price,
      typeRoom: data.typeRoom,
      inputAgree: data.agree,
      likes: +data.likes,
      thumbnail: URL.createObjectURL(data.file[0]),
    });
    setIsModalWindow(true);
    setTimeout(() => setIsModalWindow(false), 2000);
    reset();
  });

  return (
    <>
      {isModalWindow && <div className="message-modal">Card added</div>}
      <form name="form" className="container_search" onSubmit={onSubmit}>
        <MyLabel htmlFor="name">Name Project:</MyLabel>
        <div>
          <InputText
            {...register('name', {
              required: errorMessageJSON.name.custom,
              minLength: {
                value: 2,
                message: errorMessageJSON.name.minLength,
              },
              pattern: {
                value: /^[A-Z]{1}[a-zA-Z]{1,24}$/,
                message: errorMessageJSON.name.custom,
              },
              maxLength: {
                value: 25,
                message: errorMessageJSON.name.minLength,
              },
            })}
            name="name"
          />
          {errors?.name && <p className="message-error">{errors.name.message}</p>}
        </div>
        <MyLabel htmlFor="price">Price:</MyLabel>
        <div>
          <InputText
            {...register('price', {
              required: errorMessageJSON.price.custom,
              minLength: {
                value: 1,
                message: errorMessageJSON.price.custom,
              },
              pattern: {
                value: /^[1-9][0-9]{0,9}$/,
                message: errorMessageJSON.price.custom,
              },
            })}
            name="price"
          />
          {errors?.price && <p className="message-error">{errors.price.message}</p>}
        </div>
        <MyLabel htmlFor="description">Description:</MyLabel>
        <div>
          <MyTextarea
            {...register('description', {
              required: errorMessageJSON.description.custom,
              minLength: {
                value: 5,
                message: errorMessageJSON.description.minLength,
              },
              maxLength: {
                value: 100,
                message: errorMessageJSON.description.maxLength,
              },
            })}
            name="description"
          />
          {errors?.description && <p className="message-error">{errors.description.message}</p>}
        </div>
        <MyLabel htmlFor="date">Date:</MyLabel>
        <div>
          <InputDate
            {...register('date', {
              required: 'Choose date',
            })}
            name="date"
          />
          {errors?.date && <p className="message-error">{errors.date.message}</p>}
        </div>
        <MyLabel htmlFor="selectRoom">Type room:</MyLabel>
        <div>
          <MySelect
            {...register('typeRoom', {
              required: errorMessageJSON.typeRoom.custom,
              minLength: {
                value: 3,
                message: errorMessageJSON.typeRoom.custom,
              },
            })}
            options={typeRoomJSON.typeRoom}
            name="typeRoom"
            className="select"
          />
          {errors?.typeRoom && <p className="message-error">{errors.typeRoom.message}</p>}
        </div>
        <MyLabel htmlFor="agree">I consent to the use of my resources</MyLabel>
        <div>
          <InputCheckbox
            {...register('agree', {
              required: errorMessageJSON.agree.custom,
            })}
            name="agree"
          />
          {errors?.agree && <p className="message-error">{errors.agree.message}</p>}
        </div>
        <MyLabel htmlFor="likes">Show number of likes</MyLabel>
        <div>
          <MyLabel htmlFor="radioYes">Yes</MyLabel>
          <InputRadio
            {...register('likes', {
              required: errorMessageJSON.likes.custom,
            })}
            name="likes"
            id="radioYes"
            value="0"
          />
          <MyLabel htmlFor="radioNo">No</MyLabel>
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
        <MyLabel htmlFor="file">Upload file:</MyLabel>
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
          <MyButton>Submit</MyButton>
        </div>
      </form>
    </>
  );
}

export { CreateCardForm };
