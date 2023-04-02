import { NewBook } from 'models/card.model';
import { useForm } from 'react-hook-form';

import './AddBookForm.css';
import { InputLength, isAfter, isPositive } from './validation/validations';

const CHECKLIST = ['Fairy Tale', 'Fiction', 'Folklore', 'Drama', 'Poetry'];

type AddBookFormProps = {
  onFormSubmit: (book: NewBook) => void;
};

interface FormValues {
  title: string;
  author: string;
  price: string;
  date: string;
  lang: string;
  genre: string[];
  onStock: string;
  image: FileList;
}

function AddBookForm(props: AddBookFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const { title, author, price, date, lang, genre, onStock, image } = data;
    const newBook: NewBook = {
      title,
      author,
      price,
      date,
      lang,
      genre,
      onStock,
      image: URL.createObjectURL(image[0]),
    };
    props.onFormSubmit(newBook);
    reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="text-input">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            {...register('title', {
              required: true,
              minLength: InputLength.min,
              maxLength: InputLength.max,
            })}
          />
          {errors.title && errors.title.type === 'required' && (
            <span className="errorMsg">Title is required.</span>
          )}
          {errors.title && errors.title.type === 'minLength' && (
            <span className="errorMsg">
              Length is not enough. Should be more than {InputLength.min}
            </span>
          )}
          {errors.title && errors.title.type === 'maxLength' && (
            <span className="errorMsg">
              Max length exceeded. Should be less than {InputLength.max}
            </span>
          )}
        </div>
        <div className="text-input">
          <label className="label">Author</label>
          <input className="input" type="text" {...register('author', { required: true })} />
          {errors.author && errors.author.type === 'required' && (
            <span className="errorMsg">Author is required.</span>
          )}
        </div>
        <div className="text-input">
          <label className="label">Price</label>
          <input
            className="input"
            type="number"
            {...register('price', {
              required: true,
              validate: isPositive,
            })}
          />
          {errors.price && errors.price.type === 'required' && (
            <span className="errorMsg">Price is required.</span>
          )}
          {errors.price && errors.price.type === 'validate' && (
            <span className="errorMsg">Price can not be less than 0.</span>
          )}
        </div>
        <div className="text-input">
          <label className="label">Date</label>
          <input
            className="input date"
            type="date"
            {...register('date', {
              required: true,
              validate: isAfter,
            })}
          />
          {errors.date && errors.date.type === 'required' && (
            <span className="errorMsg">Date is required.</span>
          )}
          {errors.date && errors.date.type === 'validate' && (
            <span className="errorMsg">
              Date can not be in the future. Please choose past date!
            </span>
          )}
        </div>
        <div className="dropdown text-input">
          <label className="label" htmlFor="dropdown-list">
            Language:
          </label>
          <select id="dropdown-list" className="dropdown-list input" {...register('lang')}>
            <option>English</option>
            <option>German</option>
            <option>Polish</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="checkList">
          <label htmlFor="genre" className="label">
            Genre:
          </label>
          <div id="genre" className="list-container input">
            {CHECKLIST.map((item, index) => {
              return (
                <div key={index} className="list">
                  <span>{item}</span>
                  <input type="checkbox" value={item} {...register('genre', { required: true })} />
                </div>
              );
            })}
          </div>
          {errors.genre && errors.genre.type === 'required' && (
            <span className="errorMsg">Genre is required.</span>
          )}
        </div>
        <div className="onStock">
          <label htmlFor="switcher" className="label">
            On Stock:
          </label>
          <div className="switcher input" id="switcher">
            <label htmlFor="yes">
              Yes
              <input
                type="radio"
                id="yes"
                value="yes"
                {...register('onStock', { required: true })}
              />
            </label>
            <label htmlFor="no">
              No
              <input type="radio" id="no" value="no" {...register('onStock', { required: true })} />
            </label>
          </div>
          {errors.onStock && errors.onStock.type === 'required' && (
            <p className="errorMsg">Stock is required.</p>
          )}
        </div>
        <div className="text-input">
          <label className="label">Image</label>
          <input className="input" type="file" {...register('image', { required: true })} />
          {errors.image && errors.image.type === 'required' && (
            <span className="errorMsg">Image is required.</span>
          )}
        </div>
        <div className="btn-submit__container">
          <button className="btn-submit" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
