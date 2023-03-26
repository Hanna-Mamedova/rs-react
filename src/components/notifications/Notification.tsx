import { Component, ReactNode } from 'react';

import './Notification.css';
import checkIcon from '../../assets/check.svg';

type NotificationProps = {
  toast: {
    title: string;
    description: string;
  };
  notificationVisible: boolean;
  onClose: () => void;
};

class Notification extends Component<NotificationProps> {
  render(): ReactNode {
    if (this.props.notificationVisible) {
      return (
        <div className="notification-container top-right">
          <div className="notification toast top-right">
            <button onClick={this.props.onClose}>X</button>
            <div className="notification-image">
              <img src={checkIcon} alt="success-icon" />
            </div>
            <div>
              <p className="notification-title">{this.props.toast.title}</p>
              <p className="notification-message">{this.props.toast.description}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Notification;
