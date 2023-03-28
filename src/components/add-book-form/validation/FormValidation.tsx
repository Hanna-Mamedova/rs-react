import { NewBook } from 'models/card.model';
import { Inputs, InputsReqs } from './ValidationTypes';

export class FormValidation {
  validReqs: InputsReqs;

  constructor(validReqs: InputsReqs) {
    this.validReqs = validReqs;
  }

  checkRequired(inputName: string, inputData: string): void {
    if (this.validReqs[inputName as keyof Inputs].required && inputData === '') {
      this.validReqs.error = true;
      this.validReqs[inputName as keyof Inputs].errMsg = `The ${inputName} is required`;
    } else {
      this.validReqs[inputName as keyof Inputs].errMsg = '';
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
      this.validReqs.date.errMsg = `Date cannot be in the future.`;
      this.validReqs.error = true;
    } else {
      this.validReqs.date.errMsg = '';
    }
  }

  checkIfValid(): void {
    const inputsReqs = Object.values(this.validReqs);
    inputsReqs.pop();
    const valid = inputsReqs.every((item) => item.errMsg === '');
    this.validReqs.error = !valid;
  }

  validateForm(formData: NewBook) {
    Object.entries(formData).map((input) => this.checkRequired(input[0], input[1]));
    this.validateTitle(formData.title);
    this.validateDate(formData.date);
    this.checkIfValid();
    return this.validReqs;
  }
}

export default FormValidation;
