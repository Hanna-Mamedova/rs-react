import { Component, ReactNode } from 'react';

import './AddBookForm.css';

import Dropdown from './components/dropdown/Dropdown';
import CheckboxList from './components/checkbox-list/CheckboxList';
import Switcher from './components/switcher/Switcher';
import TextInput from './components/text-input/TextInput';
import { InputsReqs } from './validation/ValidationTypes';
// import ErrorMessage from './validation/ErrorMessage/ErrorMessage';

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

  // NEED TO GET VALIDREQES HERE!!!
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    this.props.handleSubmit(e, this.checkboxes, this.radios);
    console.log('this.props.validReqs child', this.props.validReqs);

    if (this.props.validReqs.error) {
      this.showError = true;
    }
  }

  render(): ReactNode {
    return (
      <div className="form">
        <form onSubmit={(e) => this.handleSubmit(e)} className="form-container">
          <TextInput name="title" type="text" innerRef={this.props.titleRef} />
          {/* <ErrorMessage
            showError={this.showError}
            message={this.props.validReqs.error ? this.props.validReqs.title.errMsg : ''}
          /> */}
          <TextInput name="author" type="text" innerRef={this.props.authorRef} />
          <span></span>
          <TextInput name="price" type="number" innerRef={this.props.priceRef} />
          <span></span>
          <TextInput name="date" type="date" innerRef={this.props.dateRef} />
          <span></span>
          <Dropdown innerRef={this.props.dropdownRef} />
          <span></span>
          <CheckboxList onCheckboxClick={(refs) => this.getCheckboxes(refs)} />
          <span></span>
          <Switcher onSwitcherClick={(refs) => this.getSwitcher(refs)} />
          <span></span>
          <TextInput name="image" type="file" innerRef={this.props.imageRef} />
          <span></span>
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
