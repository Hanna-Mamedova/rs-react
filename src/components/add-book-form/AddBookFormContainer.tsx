import React, { Component, createRef } from 'react';
import AddBookForm, { RefsType } from './AddBookForm';

class AddBookFormContainer extends Component {
  titleRef = createRef<HTMLInputElement>();
  authorRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  dropdownRef = createRef<HTMLSelectElement>();

  handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    checkboxes: RefsType,
    radios: RefsType
  ): void {
    event.preventDefault();
    // console.log('title', this.titleRef.current?.value);
    // console.log('auth', this.authorRef.current?.value);
    // console.log('price', this.priceRef.current?.value);
    // console.log('date', this.dateRef.current?.value);
    // console.log('dropdown', this.dropdownRef.current?.value);
    console.log('checkboxRef', checkboxes);
    console.log(
      'radios',
      Object.values(radios).find((input) => input?.checked)
    );
  }

  render(): JSX.Element {
    return (
      <AddBookForm
        titleRef={this.titleRef}
        authorRef={this.authorRef}
        priceRef={this.priceRef}
        dateRef={this.dateRef}
        dropdownRef={this.dropdownRef}
        // switcherRef={this.switcherRef}
        handleSubmit={(e, checkboxes, radios) => this.handleSubmit(e, checkboxes, radios)}
      />
    );
  }
}

export default AddBookFormContainer;
