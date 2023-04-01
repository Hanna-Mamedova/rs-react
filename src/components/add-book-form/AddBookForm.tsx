import { useForm } from 'react-hook-form';

import './AddBookForm.css';

const CHECKLIST = ['Fairy Tale', 'Fiction', 'Folklore', 'Drama', 'Poetry'];

function AddBookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="text-input">
          <label className="label">Title</label>
          <input className="input" type="text" {...register('title', { required: true })} />
          {errors.title && errors.title.type === 'required' && (
            <p className="errorMsg">Title is required.</p>
          )}
        </div>
        <div className="text-input">
          <label className="label">Author</label>
          <input className="input" type="text" {...register('author', { required: true })} />
          {errors.author && errors.author.type === 'required' && (
            <p className="errorMsg">Author is required.</p>
          )}
        </div>
        <div className="text-input">
          <label className="label">Price</label>
          <input className="input" type="number" {...register('price', { required: true })} />
          {errors.price && errors.price.type === 'required' && (
            <p className="errorMsg">Price is required.</p>
          )}
        </div>
        <div className="text-input">
          <label className="label">Date</label>
          <input className="input date" type="date" {...register('date', { required: true })} />
          {errors.date && errors.date.type === 'required' && (
            <p className="errorMsg">Date is required.</p>
          )}
        </div>
        <div className="dropdown text-input">
          <label className="label" htmlFor="dropdown-list">
            Language:
          </label>
          <select
            id="dropdown-list"
            className="dropdown-list input"
            {...register('language', { required: true })}
          >
            <option>English</option>
            <option>German</option>
            <option>Polish</option>
            <option>Spanish</option>
          </select>
          {errors.language && errors.language.type === 'required' && (
            <p className="errorMsg">Language is required.</p>
          )}
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
                  <input type="checkbox" value={item} {...register('item')} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="onStock">
          <label htmlFor="switcher" className="label">
            On Stock:
          </label>
          <div className="switcher input" id="switcher">
            <label htmlFor="yes">
              Yes
              <input type="radio" id="yes" value="yes" {...register('stock')} />
            </label>
            <label htmlFor="no">
              No
              <input type="radio" id="no" value="no" {...register('stock')} />
            </label>
          </div>
        </div>
        <div className="text-input">
          <label className="label">Image</label>
          <input className="input" type="file" {...register('image', { required: true })} />
          {errors.image && errors.image.type === 'required' && (
            <p className="errorMsg">Image is required.</p>
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
