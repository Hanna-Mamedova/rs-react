import { Component, ReactNode } from 'react';

import Dropdown from '../dropdown/Dropdown';
import CheckboxList, { RefsType } from '../checkbox-list/CheckboxList';

interface AddBookProps {
  titleRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  dropdownRef: React.RefObject<HTMLSelectElement>;
  // checkboxRef: React.RefObject<HTMLFieldSetElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, checkboxes: RefsType) => void;
}

class AddBookForm extends Component<AddBookProps> {
  checkboxes: RefsType = {};

  getCheckboxes(checkboxes: RefsType): void {
    this.checkboxes = { ...checkboxes };
  }

  render(): ReactNode {
    return (
      <div className="form">
        <form
          onSubmit={(e) => this.props.handleSubmit(e, this.checkboxes)}
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
          <div>
            <label className="label" htmlFor="genre">
              Genre:{' '}
            </label>
            <input className="input" type="select" id="genre" />
          </div>
          <Dropdown innerRef={this.props.dropdownRef} />
          <CheckboxList onCheckboxClick={(refs) => this.getCheckboxes(refs)} />
          {/* <div>
            <label className="label" htmlFor="language">
              Language:{' '}
            </label>
            <input className="input" type="select" id="language" />
          </div> */}
          {/* <div>
            <label className="label" htmlFor="stock">
              In stock:{' '}
            </label>
            <input className="checkbox" type="select" id="stock" />
          </div> */}
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
