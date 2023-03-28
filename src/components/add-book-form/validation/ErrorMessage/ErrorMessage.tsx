import { Component, ReactNode } from 'react';

import './ErrorMessage.css';

type ErrorProps = {
  message: string;
  showError: boolean;
};

class ErrorMessage extends Component<ErrorProps> {
  render(): ReactNode {
    if (this.props.showError) {
      return <span className="error">{this.props.message}</span>;
    }
  }
}

export default ErrorMessage;
