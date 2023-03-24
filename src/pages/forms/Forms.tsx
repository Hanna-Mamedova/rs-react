import React, { Component } from 'react';

import AddBookForm from '../../components/add-book-form/AddBookForm';

import './Forms.css';

class Forms extends Component {
  render(): React.ReactNode {
    return (
      <div className="forms">
        <h1>Add book</h1>
        <AddBookForm />
      </div>
    );
  }
}

export default Forms;
