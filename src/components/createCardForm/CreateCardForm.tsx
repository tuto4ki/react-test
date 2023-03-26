import './CreateCardForm.css';
import React from 'react';
import { IFormCallbackNon } from '../../type';
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

class CreateCardForm extends React.Component<IFormCallbackNon> {
  constructor(props: IFormCallbackNon) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();
    this.props.callback();
  }

  render(): React.ReactNode {
    // modal window
    const modal = this.props.error.showModal ? <ModalWindow /> : null;
    return (
      <>
        {modal}
        <form
          name="form"
          className="container_search"
          onSubmit={this.onSubmit}
          ref={this.props.refForm.form}
        >
          <MyLabel htmlFor="name">Name Project:</MyLabel>
          <div>
            <InputText
              name="name"
              placeholder="Project name"
              myRef={this.props.refForm.inputName}
            />
            {!this.props.error.isValidName && <p>{this.props.error.messageErrorName}</p>}
          </div>
          <MyLabel htmlFor="price">Price:</MyLabel>
          <div>
            <InputText
              name="price"
              placeholder="Project price"
              myRef={this.props.refForm.inputPrice}
            />
            {!this.props.error.isValidPrice && <p>{this.props.error.messageErrorPrice}</p>}
          </div>
          <MyLabel htmlFor="description">Description:</MyLabel>
          <div>
            <MyTextarea
              name="description"
              placeholder="Description"
              myRef={this.props.refForm.description}
            />
            {!this.props.error.isValidDescription && (
              <p>{this.props.error.messageErrorDescription}</p>
            )}
          </div>
          <MyLabel htmlFor="date">Date:</MyLabel>
          <div>
            <InputDate name="date" myRef={this.props.refForm.inputDate} />
            {!this.props.error.isValidDate && <p>{this.props.error.messageErrorDate}</p>}
          </div>
          <MyLabel htmlFor="selectRoom">Type room:</MyLabel>
          <div>
            <MySelect
              name="selectRoom"
              options={typeRoom.typeRoom}
              myRef={this.props.refForm.selectTypeRoom}
            />
            {!this.props.error.isValidTypeRoom && <p>{this.props.error.messageErrorTypeRoom}</p>}
          </div>
          <MyLabel htmlFor="agree">I consent to the use of my resources</MyLabel>
          <div>
            <InputCheckbox name="agree" myRef={this.props.refForm.inputAgree} />
            {!this.props.error.isValidAgree && <p>{this.props.error.messageErrorAgree}</p>}
          </div>
          <MyLabel htmlFor="promo">Show number of likes</MyLabel>
          <div>
            <MyLabel htmlFor="radioYes">Yes</MyLabel>
            <InputRadio
              name="promo"
              id="radioYes"
              defaultValue="0"
              myRef={this.props.refForm.inputLikes[0]}
            />
            <MyLabel htmlFor="radioNo">No</MyLabel>
            <InputRadio
              name="promo"
              id="radioNo"
              defaultValue="-1"
              myRef={this.props.refForm.inputLikes[1]}
            />
            {!this.props.error.isValidLikes && <p>{this.props.error.messageErrorLikes}</p>}
          </div>
          <MyLabel htmlFor="file">Upload file:</MyLabel>
          <div>
            <InputFile name="file" myRef={this.props.refForm.inputFile} />
            {!this.props.error.isValidFile && <p>{this.props.error.messageErrorFile}</p>}
          </div>
          <div className="button-center">
            <MyButton>Submit</MyButton>
          </div>
        </form>
      </>
    );
  }
}

export { CreateCardForm };
