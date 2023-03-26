import { NewBook } from 'models/card.model';
import React, { Component, createRef } from 'react';
import AddBookForm, { RefsType } from './AddBookForm';

type AddFormProps = {
  onFormSubmit: (book: NewBook) => void;
};

class AddBookFormContainer extends Component<AddFormProps> {
  titleRef = createRef<HTMLInputElement>();
  authorRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  dropdownRef = createRef<HTMLSelectElement>();
  imageRef = createRef<HTMLInputElement>();

  newCard: NewBook | Record<string, never> = {};

  getOnStock(radios: RefsType): boolean {
    const checked = Object.values(radios).find((input) => input?.checked) as HTMLInputElement;
    return checked.value === 'yes';
  }

  getGenre(checkboxes: RefsType): string[] {
    const checked = Object.values(checkboxes).filter((input) => input?.checked);
    const checkedValues = checked.map((input) => input?.value) as string[];
    return checkedValues;
  }

  handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    checkboxes: RefsType,
    radios: RefsType
  ): void {
    event.preventDefault();
    this.newCard = {
      title: this.titleRef.current!.value,
      author: this.authorRef.current!.value,
      price: +this.priceRef.current!.value,
      date: this.dateRef.current!.value,
      language: this.dropdownRef.current!.value,
      genre: this.getGenre(checkboxes),
      onStock: this.getOnStock(radios),
      cover_url: this.imageRef.current!.value,
    };
    this.props.onFormSubmit(this.newCard);
  }

  render(): JSX.Element {
    return (
      <AddBookForm
        titleRef={this.titleRef}
        authorRef={this.authorRef}
        priceRef={this.priceRef}
        dateRef={this.dateRef}
        dropdownRef={this.dropdownRef}
        imageRef={this.imageRef}
        handleSubmit={(e, checkboxes, radios) => this.handleSubmit(e, checkboxes, radios)}
      />
    );
  }
}

export default AddBookFormContainer;
