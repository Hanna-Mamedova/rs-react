import { NewBook } from 'models/card.model';
import { Inputs, InputsReqs } from './ValidationTypes';

class FormValidation {
  validReqs: InputsReqs = {
    title: { required: true, min: 3, max: 25, errMsg: '' },
    author: { required: true, errMsg: '' },
    price: { required: true, errMsg: '' },
    date: { required: true, errMsg: '', errFutureDate: '' },
    lang: { required: true, errMsg: '' },
    genre: { required: true, errMsg: '' },
    onStock: { required: true, errMsg: '' },
    image: { required: true, errMsg: '' },
    error: false,
  };

  checkRequired(inputName: string, inputData: string): void {
    if (this.validReqs[inputName as keyof Inputs].required && inputData === '') {
      this.validReqs.error = true;
      this.validReqs[inputName as keyof Inputs].errMsg = 'The field is required';
    }
  }

  validateTitle(title: string): void {
    if (title.length < this.validReqs.title.min || title.length > this.validReqs.title.max) {
      this.validReqs.title.errMsg = `Title must be between ${this.validReqs.title.min} and ${this.validReqs.title.max}.`;
      this.validReqs.error = true;
    } else {
      this.validReqs.title.errMsg = '';
    }
  }

  validateDate(date: string): void {
    if (new Date() < new Date(date)) {
      this.validReqs.date.errFutureDate = `Date cannot be in the future.`;
      this.validReqs.error = true;
    } else {
      this.validReqs.date.errFutureDate = '';
    }
  }

  validateForm(formData: NewBook) {
    Object.entries(formData).map((input) => this.checkRequired(input[0], input[1]));
    this.validateTitle(formData.title);
    this.validateDate(formData.date);
    return this.validReqs;
  }
}

export default FormValidation;
