import { successData } from '../../components/notifications/notification-messages';
import { NewBook } from 'models/card.model';
import React, { Component } from 'react';

import AddBookFormContainer from '../../components/add-book-form/AddBookFormContainer';
import NewBooksContainer from '../../components/new-books/NewBooksContainer';
import Notification from '../../components/notifications/Notification';

import './Forms.css';

interface FormsState {
  newBooks: NewBook[];
  notificationVisible: boolean;
}

class Forms extends Component {
  state: FormsState = {
    newBooks: [],
    notificationVisible: false,
  };

  addBook(book: NewBook): void {
    this.setState({
      newBooks: [...this.state.newBooks, book],
    });
  }

  showNotification(): void {
    this.setState({
      notificationVisible: true,
    });
  }

  hideNotification(): void {
    this.setState({
      notificationVisible: false,
    });
  }

  hanleSubmit(book: NewBook): void {
    this.addBook(book);
    this.showNotification();
    setTimeout(() => this.hideNotification(), 2000);
  }

  render(): React.ReactNode {
    return (
      <div className="forms">
        <h1>Add book</h1>
        <AddBookFormContainer onFormSubmit={(book: NewBook) => this.hanleSubmit(book)} />
        <NewBooksContainer newBooks={this.state.newBooks} />
        <Notification
          onClose={() => this.hideNotification()}
          notificationVisible={this.state.notificationVisible}
          toast={successData}
        />
        ;
      </div>
    );
  }
}

export default Forms;
