import './CreateCardComponent.css';
import React from 'react';
import { IFormCallback, ICreateFormState } from '../../type';
import {
  MyLabel,
  InputText,
  MyTextarea,
  InputDate,
  InputFile,
  InputRadio,
  InputCheckbox,
  MySelect,
  MyButton,
} from '../UI/index';
import typeRoom from '../../assets/json/typeRoom.json';
import { ModalWindow } from '../modalWindow/ModalWindow';

class CreateCardComponent extends React.Component<IFormCallback, ICreateFormState> {
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

  private validNameProject(): boolean {
    const isValidName = Boolean(
      this.ref.inputName.current?.value &&
        /^[A-Z]{1}[a-zA-Z]{0,24}$/.test(this.ref.inputName.current.value)
    );
    this.setState({ isValidName });
    return isValidName;
  }

  private validPrice(): boolean {
    const isValidPrice = Boolean(
      this.ref.inputPrice.current?.value && /^[0-9]{0,15}$/.test(this.ref.inputPrice.current?.value)
    );
    this.setState({ isValidPrice });
    return isValidPrice;
  }

  private validDescription(): boolean {
    const isValidDescription = Boolean(
      this.ref.description.current?.value && this.ref.description.current?.value.length < 100
    );
    this.setState({ isValidDescription });
    return isValidDescription;
  }

  private validFile(): boolean {
    const isValidFile = Boolean(this.ref.inputFile.current?.files?.length);
    this.setState({ isValidFile });
    return isValidFile;
  }

  private validDate(): boolean {
    const isValidDate = Boolean(this.ref.inputDate.current?.value);
    this.setState({ isValidDate });
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

  private onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();
    const isName = this.validNameProject();
    const isPrice = this.validPrice();
    const isDescription = this.validDescription();
    const isDate = this.validDate();
    const isTypeRoom = this.validTypeRoom();
    const isAgree = this.validAgree();
    const isLike = this.validLike();
    const isFile = this.validFile();
    if (
      !isName ||
      !isPrice ||
      !isDescription ||
      !isDate ||
      !isTypeRoom ||
      !isAgree ||
      !isLike ||
      !isFile
    ) {
      this.setState({ showModal: false });
      return;
    }
    this.setState({ showModal: true });
    setTimeout(() => this.setState({ showModal: false }), 1000);
    const refs = this.ref;
    let isShowLike = 0;
    if (refs.inputLikes[0].current && refs.inputLikes[1].current) {
      isShowLike = refs.inputLikes[0].current.checked
        ? +refs.inputLikes[0].current.value
        : +refs.inputLikes[1].current.value;
    }
    const valueForm = {
      inputName: refs.inputName.current ? refs.inputName.current.value : '',
      inputDate: refs.inputDate.current ? refs.inputDate.current.value : '',
      date: refs.inputDate.current ? refs.inputDate.current.value : '',
      description: refs.description.current ? refs.description.current.value : '',
      price: refs.inputPrice.current ? +refs.inputPrice.current.value : 0,
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
    // modal window
    const modal = this.state.showModal ? <ModalWindow /> : null;

    return (
      <>
        {modal}
        <form className="container_search" onSubmit={this.onSubmit} ref={this.ref.form}>
          <MyLabel htmlFor="name">Name Project:</MyLabel>
          <div>
            <InputText name="name" placeholder="Project name" myRef={this.ref.inputName} />
            {!this.state.isValidName && <p>{this.state.messageErrorName}</p>}
          </div>
          <MyLabel htmlFor="price">Price:</MyLabel>
          <div>
            <InputText name="price" placeholder="Project price" myRef={this.ref.inputPrice} />
            {!this.state.isValidPrice && <p>{this.state.messageErrorPrice}</p>}
          </div>
          <MyLabel htmlFor="description">Description:</MyLabel>
          <div>
            <MyTextarea name="description" placeholder="Description" myRef={this.ref.description} />
            {!this.state.isValidDescription && <p>{this.state.messageErrorDescription}</p>}
          </div>
          <MyLabel htmlFor="date">Date:</MyLabel>
          <div>
            <InputDate name="date" myRef={this.ref.inputDate} />
            {!this.state.isValidDate && <p>{this.state.messageErrorDate}</p>}
          </div>
          <MyLabel htmlFor="selectRoom">Type room:</MyLabel>
          <div>
            <MySelect
              name="selectRoom"
              options={typeRoom.typeRoom}
              myRef={this.ref.selectTypeRoom}
            />
            {!this.state.isValidTypeRoom && <p>{this.state.messageErrorTypeRoom}</p>}
          </div>
          <MyLabel htmlFor="agree">I consent to the use of my resources</MyLabel>
          <div>
            <InputCheckbox name="agree" myRef={this.ref.inputAgree} />
            {!this.state.isValidAgree && <p>{this.state.messageErrorAgree}</p>}
          </div>
          <MyLabel htmlFor="promo">Show number of likes</MyLabel>
          <div>
            <MyLabel htmlFor="radioYes">Yes</MyLabel>
            <InputRadio
              name="promo"
              id="radioYes"
              defaultValue="0"
              myRef={this.ref.inputLikes[0]}
            />
            <MyLabel htmlFor="radioNo">No</MyLabel>
            <InputRadio
              name="promo"
              id="radioNo"
              defaultValue="-1"
              myRef={this.ref.inputLikes[1]}
            />
            {!this.state.isValidLikes && <p>{this.state.messageErrorLikes}</p>}
          </div>
          <MyLabel htmlFor="file">Upload file:</MyLabel>
          <div>
            <InputFile name="file" myRef={this.ref.inputFile} />
            {!this.state.isValidFile && <p>{this.state.messageErrorFile}</p>}
          </div>
          <div className="button-center">
            <MyButton>Submit</MyButton>
          </div>
        </form>
      </>
    );
  }
}

export { CreateCardComponent };
