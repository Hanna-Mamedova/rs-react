import React, { Component } from 'react';

import AddBookFormContainer from '../../components/add-book-form/AddBookFormContainer';

import './Forms.css';

class Forms extends Component {
  render(): React.ReactNode {
    return (
      <div className="forms">
        <h1>Add book</h1>
        <AddBookFormContainer />
      </div>
    );
  }
}

export default Forms;
