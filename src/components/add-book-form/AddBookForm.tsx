import { Component, ReactNode } from 'react';

import './AddBookForm.css';

import Dropdown from './components/dropdown/Dropdown';
import CheckboxList from './components/checkbox-list/CheckboxList';
import Switcher from './components/switcher/Switcher';
import TextInput from './components/text-input/TextInput';
import { InputsReqs } from './validation/ValidationTypes';
import ErrorMessage from './validation/ErrorMessage/ErrorMessage';

export type RefsType = {
  [key: number]: HTMLInputElement | null;
};

interface AddBookProps {
  titleRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  dropdownRef: React.RefObject<HTMLSelectElement>;
  imageRef: React.RefObject<HTMLInputElement>;
  validReqs: InputsReqs | Record<string, never>;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    checkboxes: RefsType,
    radios: RefsType
  ) => void;
}

class AddBookForm extends Component<AddBookProps> {
  checkboxes: RefsType = {};
  radios: RefsType = {};
  showError = false;

  getCheckboxes(checkboxes: RefsType): void {
    this.checkboxes = { ...checkboxes };
  }

  getSwitcher(radios: RefsType): void {
    this.radios = { ...radios };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    this.props.handleSubmit(e, this.checkboxes, this.radios);

    if (this.props.validReqs.error) {
      this.showError = true;
    }
  }

  render(): ReactNode {
    return (
      <div className="form">
        <form onSubmit={(e) => this.handleSubmit(e)} className="form-container">
          <TextInput name="title" type="text" innerRef={this.props.titleRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.title.errMsg} />

          <TextInput name="author" type="text" innerRef={this.props.authorRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.author.errMsg} />

          <TextInput name="price" type="number" innerRef={this.props.priceRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.price.errMsg} />

          <TextInput name="date" type="date" innerRef={this.props.dateRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.date.errMsg} />

          <Dropdown innerRef={this.props.dropdownRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.lang.errMsg} />

          <CheckboxList onCheckboxClick={(refs) => this.getCheckboxes(refs)} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.genre.errMsg} />

          <Switcher onSwitcherClick={(refs) => this.getSwitcher(refs)} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.onStock.errMsg} />

          <TextInput name="image" type="file" innerRef={this.props.imageRef} />
          <ErrorMessage showError={this.showError} message={this.props.validReqs.image.errMsg} />
          <div className="btn-submit__container">
            <button className="btn-submit" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
