import { Component, ReactNode } from 'react';

import Dropdown from '../dropdown/Dropdown';
import CheckboxList from '../checkbox-list/CheckboxList';
import Switcher from '../../components/switcher/Switcher';

export type RefsType = {
  [key: number]: HTMLInputElement | null;
};

interface AddBookProps {
  titleRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  dropdownRef: React.RefObject<HTMLSelectElement>;
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
          <div>
            <label className="label" htmlFor="title">
              Title:{' '}
            </label>
            <input ref={this.props.titleRef} className="input" type="text" id="title" />
          </div>
          <div>
            <label className="label" htmlFor="author">
              Author:{' '}
            </label>
            <input ref={this.props.authorRef} className="input" type="text" id="author" />
          </div>
          <div>
            <label className="label" htmlFor="price">
              Price:{' '}
            </label>
            <input ref={this.props.priceRef} className="input" type="number" id="price" />
          </div>
          <div>
            <label className="label" htmlFor="created-date">
              Created date:{' '}
            </label>
            <input ref={this.props.dateRef} className="input" type="date" id="created-date" />
          </div>
          <Dropdown innerRef={this.props.dropdownRef} />
          <CheckboxList onCheckboxClick={(refs) => this.getCheckboxes(refs)} />
          <Switcher onSwitcherClick={(refs) => this.getSwitcher(refs)} />
          {/* <div>
            <label className="label" htmlFor="image">
              Image:{' '}
            </label>
            <input className="file" type="select" id="image" />
          </div> */}
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
