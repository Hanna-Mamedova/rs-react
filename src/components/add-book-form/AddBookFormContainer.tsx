import { RefsType } from 'components/checkbox-list/CheckboxList';
import React, { Component, createRef } from 'react';
import AddBookForm from './AddBookForm';

class AddBookFormContainer extends Component {
  titleRef = createRef<HTMLInputElement>();
  authorRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  dropdownRef = createRef<HTMLSelectElement>();
  // checkboxRef = createRef<HTMLFieldSetElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>, checkboxes: RefsType): void {
    event.preventDefault();
    // console.log('title', this.titleRef.current?.value);
    // console.log('auth', this.authorRef.current?.value);
    // console.log('price', this.priceRef.current?.value);
    // console.log('date', this.dateRef.current?.value);
    // console.log('dropdown', this.dropdownRef.current?.value);
    console.log('checkboxRef', checkboxes);
  }

  render(): JSX.Element {
    return (
      <AddBookForm
        titleRef={this.titleRef}
        authorRef={this.authorRef}
        priceRef={this.priceRef}
        dateRef={this.dateRef}
        dropdownRef={this.dropdownRef}
        handleSubmit={(e, checkboxes) => this.handleSubmit(e, checkboxes)}
      />
    );
  }
}

export default AddBookFormContainer;
