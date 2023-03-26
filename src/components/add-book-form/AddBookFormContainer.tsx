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

  getNewBook(checkboxes: RefsType, radios: RefsType): NewBook {
    return {
      title: this.titleRef.current!.value,
      author: this.authorRef.current!.value,
      price: +this.priceRef.current!.value,
      date: this.dateRef.current!.value,
      language: this.dropdownRef.current!.value,
      genre: this.getGenre(checkboxes),
      onStock: this.getOnStock(radios),
      cover_url: this.imageRef.current!.value,
    };
  }

  clearInput(input: React.RefObject<HTMLInputElement | HTMLSelectElement>): void {
    input.current!.value = '';
  }

  clearSpecialInputs(inputs: RefsType) {
    Object.values(inputs).forEach((input) => (input!.checked = false));
  }

  clearForm(checkboxes: RefsType, radios: RefsType): void {
    this.clearInput(this.titleRef);
    this.clearInput(this.authorRef);
    this.clearInput(this.priceRef);
    this.clearInput(this.dateRef);
    this.clearInput(this.dropdownRef);
    this.clearSpecialInputs(checkboxes);
    this.clearSpecialInputs(radios);
    this.clearInput(this.imageRef);
  }

  handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    checkboxes: RefsType,
    radios: RefsType
  ): void {
    event.preventDefault();
    this.newCard = this.getNewBook(checkboxes, radios);
    window.alert('The book has been added');
    this.props.onFormSubmit(this.newCard);
    this.clearForm(checkboxes, radios);
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
