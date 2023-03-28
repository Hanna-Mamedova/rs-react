export interface Inputs {
  title: {
    required: boolean;
    errMsg: string;
    min: number;
    max: number;
  };
  author: {
    required: boolean;
    errMsg: string;
  };
  price: {
    required: boolean;
    errMsg: string;
  };
  date: {
    required: boolean;
    errMsg: string;
  };
  lang: {
    required: boolean;
    errMsg: string;
  };
  genre: {
    required: boolean;
    errMsg: string;
  };
  onStock: {
    required: boolean;
    errMsg: string;
  };
  image: {
    required: boolean;
    errMsg: string;
  };
}

export interface InputsReqs extends Inputs {
  error: boolean;
}
