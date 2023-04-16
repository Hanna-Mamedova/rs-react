import { successData } from '../../components/notifications/notification-messages';
import { useState } from 'react';

import NewBooksContainer from '../../components/new-books/NewBooksContainer';
import Notification from '../../components/notifications/Notification';
import AddBookForm from '../../components/add-book-form/AddBookForm';

import './Forms.css';
import { useSelector } from 'react-redux';
import { selectNewBooks } from '../../store/app.selectors';

function Forms() {
  const newBooks = useSelector(selectNewBooks);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const showNotification = (): void => {
    setNotificationVisible(true);
  };

  const hideNotification = (): void => {
    setNotificationVisible(false);
  };

  const hanleSubmit = (): void => {
    showNotification();
    setTimeout(() => hideNotification(), 2000);
  };

  return (
    <div className="forms">
      <h1>Add book</h1>
      <AddBookForm onFormSubmit={() => hanleSubmit()} />
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
