import { Component, ReactNode } from 'react';

import './TextInput.css';

interface InputProps {
  name: string;
  type: string;
  innerRef: React.RefObject<HTMLInputElement>;
}

class TextInput extends Component<InputProps> {
  getLabel(): string {
    return `${this.props.name[0].toUpperCase()}${this.props.name.slice(1)} `;
  }

  render(): ReactNode {
    return (
      <div className="text-input">
        <label className="label" htmlFor={this.props.name}>
          {this.getLabel()}:{' '}
        </label>
        <input
          ref={this.props.innerRef}
          className={`input ${this.props.type}`}
          type={this.props.type}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
