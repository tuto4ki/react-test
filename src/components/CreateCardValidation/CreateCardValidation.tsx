import { CreateCardForm } from '../createCardForm/CreateCardForm';
import React from 'react';
import { IFormCallback, ICreateFormState } from '../../type';
import {
  isValidateDate,
  isValidationDescription,
  isValidationName,
  isValidationPrice,
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
    const isValidName = isValidationName(this.ref.inputName.current?.value);
    this.setState({ isValidName: Boolean(isValidName) });
    return isValidName;
  }

  private validPrice(): number {
    const isValidPrice = isValidationPrice(this.ref.inputPrice.current?.value);
    this.setState({ isValidPrice: Boolean(isValidPrice) });
    return isValidPrice;
  }

  private validDescription(): string {
    const isValidDescription = isValidationDescription(this.ref.description.current?.value);
    this.setState({ isValidDescription: Boolean(isValidDescription) });
    return isValidDescription;
  }

  private validFile(): boolean {
    const isValidFile = Boolean(this.ref.inputFile.current?.files?.length);
    this.setState({ isValidFile });
    return isValidFile;
  }

  private validDate(): string {
    const isValidDate = isValidateDate(this.ref.inputDate.current?.value);
    this.setState({ isValidDate: Boolean(isValidDate) });
    return isValidDate;
  }

  private validTypeRoom(): boolean {
    const isValidTypeRoom = this.ref.selectTypeRoom.current?.value !== '0';
    this.setState({ isValidTypeRoom });
    return isValidTypeRoom;
  }

  private validAgree(): boolean {
    const isValidAgree = Boolean(this.ref.inputAgree.current?.checked);
    this.setState({ isValidAgree });
    return isValidAgree;
  }

  private validLike(): boolean {
    let isValidLikes = false;
    this.ref.inputLikes.map((value) => {
      isValidLikes = isValidLikes || Boolean(value.current?.checked);
    });
    this.setState({ isValidLikes });
    return isValidLikes;
  }

  private successData(): void {
    this.ref.form.current?.reset();
  }

  private onSubmit(): void {
    const inputName = this.validNameProject();
    const price = this.validPrice();
    const description = this.validDescription();
    const date = this.validDate();
    const isTypeRoom = this.validTypeRoom();
    const isAgree = this.validAgree();
    const isLike = this.validLike();
    const isFile = this.validFile();
    if (
      !inputName ||
      !price ||
      !description ||
      !date ||
      !isTypeRoom ||
      !isAgree ||
      !isLike ||
      !isFile
    ) {
      this.setState({ showModal: false });
      return;
    }
    this.setState({ showModal: true });
    setTimeout(() => this.setState({ showModal: false }), 2000);
    const refs = this.ref;
    let isShowLike = 0;
    if (refs.inputLikes[0].current && refs.inputLikes[1].current) {
      isShowLike = refs.inputLikes[0].current.checked
        ? +refs.inputLikes[0].current.value
        : +refs.inputLikes[1].current.value;
    }
    const valueForm = {
      inputName,
      date,
      description,
      price,
      selectTypeRoom: refs.selectTypeRoom.current ? refs.selectTypeRoom.current.value : '',
      inputAgree: refs.inputAgree.current ? refs.inputAgree.current.value : '',
      inputPromo: isShowLike,
      inputFile: refs.inputFile.current?.files
        ? URL.createObjectURL(refs.inputFile.current.files[0])
        : '',
    };
    this.successData();
    this.props.callback(valueForm);
  }

  render(): React.ReactNode {
    return <CreateCardForm callback={this.onSubmit} refForm={this.ref} error={this.state} />;
  }
}

export { CreateCardValidation };
