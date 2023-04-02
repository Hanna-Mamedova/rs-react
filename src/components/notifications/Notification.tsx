import './Notification.css';
import checkIcon from '/assets/check.svg';

type NotificationProps = {
  toast: {
    title: string;
    description: string;
  };
  notificationVisible: boolean;
  onClose: () => void;
};

function Notification(props: NotificationProps) {
  if (props.notificationVisible) {
    return (
      <div className="notification-container top-right">
        <div className="notification toast top-right">
          <button onClick={props.onClose}>X</button>
          <div className="notification-image">
            <img src={checkIcon} alt="success-icon" />
          </div>
          <div>
            <p className="notification-title">{props.toast.title}</p>
            <p className="notification-message">{props.toast.description}</p>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Notification;
