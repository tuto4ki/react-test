import './CreateCardForm.css';
import React from 'react';
import { MyInput } from '../UI/input/MyInput';

class CreateCardForm extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
  }

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
          <MyInput
            name="name"
            type="text"
            onChange={this.onChange}
            placeholder="Search bar"
            value="jh"
            className="create-input input-text"
          />
        </div>
        <div className="align-right">
          <label htmlFor="date" className="label">
            Date:
          </label>
        </div>
        <div>
          <MyInput
            type="date"
            name="date"
            onChange={this.onChange}
            placeholder="Search bar"
            value="0100-01-01"
            className="create-input input-date"
          />
        </div>
        <div className="align-right">
          <label htmlFor="selectRoom" className="label">
            Type room:
          </label>
        </div>
        <div>
          <select name="selectRoom" id="" className="select">
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
          <MyInput
            type="checkbox"
            name="agree"
            onChange={this.onChange}
            value="1"
            className="input-checkbox"
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
          <MyInput
            type="radio"
            name="promo"
            onChange={this.onChange}
            value="1"
            id="radioYes"
            className="input-radio"
          />
          <label htmlFor="radioNo" className="label-list">
            No
          </label>
          <MyInput
            type="radio"
            name="promo"
            onChange={this.onChange}
            value="1"
            id="radioNo"
            className="input-radio"
          />
        </div>
        <div className="align-right">
          <label className="label">Upload file:</label>
        </div>
        <div>
          <input type="file" className="input-file" />
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

export { CreateCardForm };
