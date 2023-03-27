import { NewBook } from 'models/card.model';
import React, { Component, createRef } from 'react';
import AddBookForm, { RefsType } from './AddBookForm';
import FormValidation from './validation/FormValidation';
import { InputsReqs } from './validation/ValidationTypes';

type AddFormProps = {
  onFormSubmit: (book: NewBook) => void;
};

interface AddFormState {
  validReqs: InputsReqs | Record<string, never>;
}

class AddBookFormContainer extends Component<AddFormProps> {
  titleRef = createRef<HTMLInputElement>();
  authorRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  dropdownRef = createRef<HTMLSelectElement>();
  imageRef = createRef<HTMLInputElement>();

  newCard: NewBook | Record<string, never> = {};

  state: AddFormState = {
    validReqs: {},
  };

  getOnStock(radios: RefsType): string | undefined {
    if (Object.keys(radios).length !== 0) {
      const checked = Object.values(radios).find((input) => input?.checked) as HTMLInputElement;
      return checked.value;
    }
  }

  getGenre(checkboxes: RefsType): string | undefined {
    if (Object.keys(checkboxes).length !== 0) {
      const checked = Object.values(checkboxes).filter((input) => input?.checked);
      const checkedValues = checked.map((input) => input?.value) as string[];
      return checkedValues.join(', ');
    }
  }

  validateForm(formData: NewBook): void {
    const formValidation = new FormValidation();
    console.log(formValidation.validateForm(formData));
    this.setState({
      validReqs: formValidation.validateForm(formData),
    });
  }

  getNewBook(checkboxes: RefsType, radios: RefsType): NewBook {
    return {
      title: this.titleRef.current!.value || '',
      author: this.authorRef.current!.value || '',
      price: this.priceRef.current!.value || '',
      date: this.dateRef.current!.value || '',
      lang: this.dropdownRef.current!.value || '',
      genre: this.getGenre(checkboxes) || '',
      onStock: this.getOnStock(radios) || '',
      image: this.imageRef.current!.value || '',
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
    this.validateForm(this.newCard);

    if (!this.state.validReqs.error) {
      this.props.onFormSubmit(this.newCard);
      this.clearForm(checkboxes, radios);
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <AddBookForm
          titleRef={this.titleRef}
          authorRef={this.authorRef}
          priceRef={this.priceRef}
          dateRef={this.dateRef}
          dropdownRef={this.dropdownRef}
          imageRef={this.imageRef}
          validReqs={this.state.validReqs}
          handleSubmit={(e, checkboxes, radios) => this.handleSubmit(e, checkboxes, radios)}
        />
      </div>
    );
  }
}

export default AddBookFormContainer;
