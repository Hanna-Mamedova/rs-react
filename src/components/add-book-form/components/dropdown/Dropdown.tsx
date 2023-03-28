import { Component, ReactNode } from 'react';

import './Dropdown.css';

interface DropdownProps {
  innerRef: React.RefObject<HTMLSelectElement>;
}

class Dropdown extends Component<DropdownProps> {
  state = {
    isShowDropdown: false,
  };
  render(): ReactNode {
    return (
      <div
        className="dropdown text-input"
        onClick={() => this.setState({ isShowDropdown: !this.state.isShowDropdown })}
      >
        <label className="label" htmlFor="dropdown-list">
          Language:
        </label>
        <select id="dropdown-list" className="dropdown-list input" ref={this.props.innerRef}>
          <option>English</option>
          <option>German</option>
          <option>Polish</option>
          <option>Spanish</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
