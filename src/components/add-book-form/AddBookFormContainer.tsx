import React, { Component, createRef } from 'react';
import AddBookForm from './AddBookForm';

class AddBookFormContainer extends Component {
  titleRef = createRef<HTMLInputElement>();
  authorRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('title', this.titleRef.current?.value);
    console.log('auth', this.authorRef.current?.value);
    console.log('price', this.priceRef.current?.value);
    console.log('date', this.dateRef.current?.value);
  }

  render(): JSX.Element {
    return (
      <AddBookForm
        titleRef={this.titleRef}
        authorRef={this.authorRef}
        priceRef={this.priceRef}
        dateRef={this.dateRef}
        handleSubmit={(e) => this.handleSubmit(e)}
      />
    );
  }
}

export default AddBookFormContainer;
