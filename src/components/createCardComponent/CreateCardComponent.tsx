import './CreateCardComponent.css';
import React from 'react';
import { IFormCallback } from '../../type';

class CreateCardComponent extends React.Component<IFormCallback> {
  state = {
    ref: {
      inputName: React.createRef<HTMLInputElement>(),
      inputDate: React.createRef<HTMLInputElement>(),
      selectTypeRoom: React.createRef<HTMLSelectElement>(),
      inputAgree: React.createRef<HTMLInputElement>(),
      inputPromo: React.createRef<HTMLInputElement>(),
      inputFile: React.createRef<HTMLInputElement>(),
    },
  };
  constructor(props: IFormCallback) {
    super(props);
  }

  private onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const refs = this.state.ref;
    const valueForm = {
      inputName: refs.inputName.current ? refs.inputName.current.value : '',
      inputDate: refs.inputDate.current ? refs.inputDate.current.value : '',
      selectTypeRoom: refs.selectTypeRoom.current ? refs.selectTypeRoom.current.value : '',
      inputAgree: refs.inputAgree.current ? refs.inputAgree.current.value : '',
      inputPromo: refs.inputPromo.current ? refs.inputPromo.current.value : '',
      inputFile: refs.inputFile.current ? refs.inputFile.current.value : '',
    };
    this.props.callback(valueForm);
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  render(): React.ReactNode {
    return (
      <form className="container_search" onSubmit={this.onSubmit}>
        <div className="align-right">
          <label htmlFor="name" className="label">
            Name:
          </label>
        </div>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Project name"
            className="create-input input-text"
            ref={this.state.ref.inputName}
          />
        </div>
        <div className="align-right">
          <label htmlFor="date" className="label">
            Date:
          </label>
        </div>
        <div>
          <input
            type="date"
            name="date"
            defaultValue="2023-01-01"
            className="create-input input-date"
            ref={this.state.ref.inputDate}
          />
        </div>
        <div className="align-right">
          <label htmlFor="selectRoom" className="label">
            Type room:
          </label>
        </div>
        <div>
          <select name="selectRoom" id="" className="select" ref={this.state.ref.selectTypeRoom}>
            <option value="kitchen">kitchen</option>
            <option value="bedroom">bedroom</option>
            <option value="living room">living room</option>
            <option value="toilet">toilet</option>
            <option value="bathroom">bathroom</option>
          </select>
        </div>
        <div className="align-right">
          <label htmlFor="agree" className="label">
            I consent to my personal data
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            className="input-checkbox"
            ref={this.state.ref.inputAgree}
          />
        </div>
        <div className="align-right">
          <label htmlFor="promo" className="label">
            I want to receive notifications about promo
          </label>
        </div>
        <div>
          <label htmlFor="radioYes" className="label-list">
            Yes
          </label>
          <input
            type="radio"
            name="promo"
            id="radioYes"
            className="input-radio"
            defaultChecked
            ref={this.state.ref.inputPromo}
          />
          <label htmlFor="radioNo" className="label-list">
            No
          </label>
          <input type="radio" name="promo" id="radioNo" className="input-radio" />
        </div>
        <div className="align-right">
          <label htmlFor="file" className="label">
            Upload file:
          </label>
        </div>
        <div>
          <input type="file" name="file" className="input-file" />
        </div>
        <div className="button-center">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export { CreateCardComponent };
