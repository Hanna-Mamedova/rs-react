interface AddBookProps {
  titleRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AddBookForm(props: AddBookProps): JSX.Element {
  return (
    <div className="form">
      <form onSubmit={(e) => props.handleSubmit(e)} className="form-container">
        <div>
          <label className="label" htmlFor="title">
            Title:{' '}
          </label>
          <input ref={props.titleRef} className="input" type="text" id="title" />
        </div>
        <div>
          <label className="label" htmlFor="author">
            Author:{' '}
          </label>
          <input ref={props.authorRef} className="input" type="text" id="author" />
        </div>
        <div>
          <label className="label" htmlFor="price">
            Price:{' '}
          </label>
          <input ref={props.priceRef} className="input" type="number" id="price" />
        </div>
        <div>
          <label className="label" htmlFor="created-date">
            Created date:{' '}
          </label>
          <input ref={props.dateRef} className="input" type="date" id="created-date" />
        </div>
        <div>
          <label className="label" htmlFor="genre">
            Genre:{' '}
          </label>
          <input className="input" type="select" id="genre" />
        </div>
        {/* <div>
          <label className="label" htmlFor="language">
            Language:{' '}
          </label>
          <input className="input" type="select" id="language" />
        </div> */}
        {/* <div>
          <label className="label" htmlFor="stock">
            In stock:{' '}
          </label>
          <input className="checkbox" type="select" id="stock" />
        </div> */}
        {/* <div>
          <label className="label" htmlFor="image">
            Image:{' '}
          </label>
          <input className="file" type="select" id="image" />
        </div> */}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBookForm;
