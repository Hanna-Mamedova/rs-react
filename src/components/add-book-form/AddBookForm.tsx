import { Component, ReactNode } from 'react';

import Dropdown from './components/dropdown/Dropdown';
import CheckboxList from './components/checkbox-list/CheckboxList';
import Switcher from './components/switcher/Switcher';
import TextInput from './components/text-input/TextInput';

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
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    checkboxes: RefsType,
    radios: RefsType
  ) => void;
}

class AddBookForm extends Component<AddBookProps> {
  checkboxes: RefsType = {};
  radios: RefsType = {};

  getCheckboxes(checkboxes: RefsType): void {
    this.checkboxes = { ...checkboxes };
  }

  getSwitcher(radios: RefsType): void {
    this.radios = { ...radios };
  }

  render(): ReactNode {
    return (
      <div className="form">
        <form
          onSubmit={(e) => this.props.handleSubmit(e, this.checkboxes, this.radios)}
          className="form-container"
        >
          <TextInput name="title" type="text" innerRef={this.props.titleRef} />
          <TextInput name="author" type="text" innerRef={this.props.authorRef} />
          <TextInput name="price" type="number" innerRef={this.props.priceRef} />
          <TextInput name="date" type="date" innerRef={this.props.dateRef} />
          <Dropdown innerRef={this.props.dropdownRef} />
          <CheckboxList onCheckboxClick={(refs) => this.getCheckboxes(refs)} />
          <Switcher onSwitcherClick={(refs) => this.getSwitcher(refs)} />
          <TextInput name="image" type="file" innerRef={this.props.imageRef} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
