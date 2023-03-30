// import { CreateCardForm } from '../createCardForm/CreateCardForm';
import React from 'react';
import { IFormCallback, ICreateFormState } from '../../type';
import {
  validateDate,
  validationDescription,
  validationName,
  validationPrice,
  validationTypeRoom,
} from './validationFunction';

class CreateCardValidation extends React.Component<IFormCallback, ICreateFormState> {
  private ref = {
    form: React.createRef<HTMLFormElement>(),
    inputName: React.createRef<HTMLInputElement>(),
    inputPrice: React.createRef<HTMLInputElement>(),
    description: React.createRef<HTMLTextAreaElement>(),
    inputDate: React.createRef<HTMLInputElement>(),
    selectTypeRoom: React.createRef<HTMLSelectElement>(),
    inputAgree: React.createRef<HTMLInputElement>(),
    inputLikes: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
    inputFile: React.createRef<HTMLInputElement>(),
  };
  state: ICreateFormState;

  constructor(props: IFormCallback) {
    super(props);
    this.state = {
      isValidName: true,
      messageErrorName: 'Error Name',
      isValidPrice: true,
      messageErrorPrice: 'Error Price',
      isValidDescription: true,
      messageErrorDescription: 'Error Description',
      isValidDate: true,
      messageErrorDate: 'Error Date',
      isValidTypeRoom: true,
      messageErrorTypeRoom: 'Error Type Room',
      isValidAgree: true,
      messageErrorAgree: 'Error Agree',
      isValidLikes: true,
      messageErrorLikes: 'Error Likes',
      isValidFile: true,
      messageErrorFile: 'Error File',
      showModal: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  private validNameProject(): string {
    const isValidName = validationName(this.ref.inputName.current?.value);
    this.setState({ isValidName: Boolean(isValidName) });
    return isValidName;
  }

  private validPrice(): number {
    const isValidPrice = validationPrice(this.ref.inputPrice.current?.value);
    this.setState({ isValidPrice: Boolean(isValidPrice) });
    return isValidPrice;
  }

  private validDescription(): string {
    const isValidDescription = validationDescription(this.ref.description.current?.value);
    this.setState({ isValidDescription: Boolean(isValidDescription) });
    return isValidDescription;
  }

  private validFile(): string {
    const isValidFile = this.ref.inputFile.current?.files?.length
      ? URL.createObjectURL(this.ref.inputFile.current.files[0])
      : '';
    this.setState({ isValidFile: Boolean(isValidFile) });
    return isValidFile;
  }

  private validDate(): string {
    const isValidDate = validateDate(this.ref.inputDate.current?.value);
    this.setState({ isValidDate: Boolean(isValidDate) });
    return isValidDate;
  }

  private validTypeRoom(): string {
    const isValidTypeRoom = validationTypeRoom(this.ref.selectTypeRoom.current?.value);
    this.setState({ isValidTypeRoom: Boolean(isValidTypeRoom) });
    return isValidTypeRoom;
  }

  private validAgree(): string {
    const isValidAgree = Boolean(this.ref.inputAgree.current?.checked);
    this.setState({ isValidAgree });
    return this.ref.inputAgree.current ? this.ref.inputAgree.current.value : '';
  }

  private validLike(): number {
    let isValidLikes = false;
    this.ref.inputLikes.map((value) => {
      isValidLikes = isValidLikes || Boolean(value.current?.checked);
    });
    this.setState({ isValidLikes });
    let isShowLike = 1;
    if (this.ref.inputLikes[0].current && this.ref.inputLikes[1].current) {
      isShowLike = this.ref.inputLikes[0].current.checked
        ? +this.ref.inputLikes[0].current.value
        : +this.ref.inputLikes[1].current.value;
    }
    return isShowLike;
  }

  private successData(): void {
    this.ref.form.current?.reset();
  }

  private onSubmit(): void {
    const name = this.validNameProject();
    const price = this.validPrice();
    const description = this.validDescription();
    const date = this.validDate();
    const typeRoom = this.validTypeRoom();
    const inputAgree = this.validAgree();
    const likes = this.validLike();
    const thumbnail = this.validFile();
    if (
      !name ||
      !price ||
      !description ||
      !date ||
      !typeRoom ||
      !inputAgree ||
      likes === 1 ||
      !thumbnail
    ) {
      this.setState({ showModal: false });
      return;
    }
    this.setState({ showModal: true });
    setTimeout(() => this.setState({ showModal: false }), 2000);
    this.successData();
    this.props.callback({
      name,
      date,
      description,
      price,
      typeRoom,
      inputAgree,
      likes,
      thumbnail,
    });
  }

  render(): React.ReactNode {
    return <div>It`s ok</div>
    // return <CreateCardForm callback={this.onSubmit} refForm={this.ref} error={this.state} />;
  }
}

export { CreateCardValidation };
