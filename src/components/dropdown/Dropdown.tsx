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
        className="dropdown"
        onClick={() => this.setState({ isShowDropdown: !this.state.isShowDropdown })}
      >
        {' '}
        Language:
        <select className="dropdown-list" ref={this.props.innerRef}>
          <option>eng</option>
          <option>de</option>
          <option>pl</option>
          <option>es</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
