import { successData } from '../../components/notifications/notification-messages';
import { NewBook } from 'models/card.model';
import { useState } from 'react';

import NewBooksContainer from '../../components/new-books/NewBooksContainer';
import Notification from '../../components/notifications/Notification';
import AddBookForm from '../../components/add-book-form/AddBookForm';

import './Forms.css';

function Forms() {
  const [newBooks, setNewBooks] = useState<NewBook[]>([]);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const addBook = (book: NewBook): void => {
    setNewBooks([...newBooks, book]);
  };

  const showNotification = (): void => {
    setNotificationVisible(true);
  };

  const hideNotification = (): void => {
    setNotificationVisible(false);
  };

  const hanleSubmit = (book: NewBook): void => {
    addBook(book);
    showNotification();
    setTimeout(() => hideNotification(), 2000);
  };

  return (
    <div className="forms">
      <h1>Add book</h1>
      <AddBookForm onFormSubmit={(book: NewBook) => hanleSubmit(book)} />
      <NewBooksContainer newBooks={newBooks} />
      <Notification
        onClose={() => hideNotification()}
        notificationVisible={notificationVisible}
        toast={successData}
      />
      ;
    </div>
  );
}

export default Forms;
