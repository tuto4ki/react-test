/*
import { useForm } from 'react-hook-form';

import { InputText, MyLabel, MyButton, InputNumber, MyTextarea, InputDate } from '../UI';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { IFormCallbackNon, TFormValues } from '../../type';
import './CreateCardForm.css';

function CreateCardForm(props: IFormCallbackNon): JSX.Element {
  const { handleSubmit, control } = useForm<TFormValues>({
    defaultValues: {
      name: '',
      price: '',
      date: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = (data: TFormValues) => console.log(data);
  const modal = props.error.showModal ? <ModalWindow /> : null;
  return (
    <>
      {modal}
      <form className="container_search" onSubmit={handleSubmit(onSubmit)}>
        <MyLabel htmlFor="name">Name Project:</MyLabel>
        <InputText
          control={control}
          name="name"
          rules={{
            required: 'Error project name',
            minLength: {
              value: 2,
              message: 'Length min 2',
            },
            pattern: {
              value: /^[A-Z]{1}[a-zA-Z]{1,24}$/,
              message: 'Error project name',
            },
          }}
        />
        <MyLabel htmlFor="price">Price:</MyLabel>
        <InputNumber
          control={control}
          name="price"
          rules={{
            required: 'Error price',
            minLength: {
              value: 1,
              message: 'Enter price',
            },
            pattern: {
              value: /^[0-9]{0,15}$/,
              message: 'Error price',
            },
          }}
        />
        <MyLabel htmlFor="description">Description:</MyLabel>
        <MyTextarea
          control={control}
          name="description"
          rules={{
            required: 'Error description',
            minLength: {
              value: 5,
              message: 'Length min 5',
            },
            maxLength: {
              value: 100,
              message: 'Length max 100',
            },
          }}
        />
        <MyLabel htmlFor="date">Date:</MyLabel>
        <InputDate
          control={control}
          name="date"
          rules={{
            required: 'Error date',
            minLength: {
              value: 6,
              message: 'Error date',
            },
          }}
        />
        <div className="button-center">
          <MyButton>Submit</MyButton>
        </div>
      </form>
    </>
  );
}

*/
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ModalWindow } from '../modalWindow/ModalWindow';
import { IFormCallback } from '../../type';
import { MyLabel, MyButton } from '../UI';
import typeRoomJSON from '../../assets/json/typeRoom.json';
import './CreateCardForm.css';

type TFormValues = {
  name: string;
  price: number;
  description: string;
  date: string;
  typeRoom: string;
  agree: string;
  likes: number;
  file: FileList;
};

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
      likes: data.likes,
      thumbnail: URL.createObjectURL(data.file[0]),
    });
    setIsModalWindow(true);
    setTimeout(() => setIsModalWindow(false), 2000);
    reset();
  });

  return (
    <>
      {isModalWindow && <ModalWindow />}
      <form name="form" className="container_search" onSubmit={onSubmit}>
        <MyLabel htmlFor="name">Name Project:</MyLabel>
        <div>
          <input
            {...register('name', {
              required: 'Error project name',
              minLength: {
                value: 2,
                message: 'Length min 2',
              },
              pattern: {
                value: /^[A-Z]{1}[a-zA-Z]{1,24}$/,
                message: 'Error project name',
              },
            })}
            name="name"
            placeholder="Project name"
            className="input-text"
          />
          {errors?.name && <p className="message-error">{errors.name.message}</p>}
        </div>
        <MyLabel htmlFor="price">Price:</MyLabel>
        <div>
          <input
            {...register('price', {
              required: 'Error price',
              minLength: {
                value: 1,
                message: 'Enter price',
              },
              pattern: {
                value: /^[0-9]{0,15}$/,
                message: 'Error price',
              },
            })}
            name="price"
            placeholder="Project price"
            className="input-text"
          />
          {errors?.price && <p className="message-error">{errors.price.message}</p>}
        </div>
        <MyLabel htmlFor="description">Description:</MyLabel>
        <div>
          <textarea
            {...register('description', {
              required: 'Error description',
              minLength: {
                value: 5,
                message: 'Length min 5',
              },
              maxLength: {
                value: 100,
                message: 'Length max 100',
              },
            })}
            name="description"
            placeholder="Description"
            className="input-textarea"
          />
          {errors?.description && <p className="message-error">{errors.description.message}</p>}
        </div>
        <MyLabel htmlFor="date">Date:</MyLabel>
        <div>
          <input
            {...register('date', {
              required: 'Error date',
            })}
            name="date"
            type="date"
            className="input-date"
          />
          {errors?.date && <p className="message-error">{errors.date.message}</p>}
        </div>
        <MyLabel htmlFor="selectRoom">Type room:</MyLabel>
        <div>
          <select
            {...register('typeRoom', {
              required: 'Error type room',
              minLength: {
                value: 1,
                message: 'Error type room length',
              },
            })}
            name="typeRoom"
            className="select"
          >
            <option value="">Choose type</option>
            {typeRoomJSON.typeRoom.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {errors?.typeRoom && <p className="message-error">{errors.typeRoom.message}</p>}
        </div>
        <MyLabel htmlFor="agree">I consent to the use of my resources</MyLabel>
        <div>
          <input
            {...register('agree', {
              required: 'Error agree',
            })}
            type="checkbox"
            name="agree"
            className="input-checkbox"
          />
          {errors?.agree && <p className="message-error">{errors.agree.message}</p>}
        </div>
        <MyLabel htmlFor="promo">Show number of likes</MyLabel>
        <div>
          <MyLabel htmlFor="radioYes">Yes</MyLabel>
          <input
            {...register('likes', {
              required: 'Error',
            })}
            name="promo"
            id="radioYes"
            defaultValue="0"
            type="radio"
            className="input-radio"
          />
          <MyLabel htmlFor="radioNo">No</MyLabel>
          <input
            {...register('likes', {
              required: 'Error',
            })}
            name="promo"
            id="radioNo"
            defaultValue="-1"
            type="radio"
            className="input-radio"
          />
          {errors?.likes && <p className="message-error">{errors.likes.message}</p>}
        </div>
        <MyLabel htmlFor="file">Upload file:</MyLabel>
        <div>
          <input
            {...register('file', {
              required: 'Error',
            })}
            name="file"
            type="file"
            accept="image/*"
            className="input-file"
            role="role-file"
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
