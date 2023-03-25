import { RefsType } from 'components/add-book-form/AddBookForm';
import { Component, ReactNode } from 'react';

import './Switcher.css';

interface SwitcherProps {
  onSwitcherClick: (allRefs: RefsType) => void;
}

class Switcher extends Component<SwitcherProps> {
  allRefs: RefsType = {};

  render(): ReactNode {
    return (
      <div className="onStock" onClick={() => this.props.onSwitcherClick(this.allRefs)}>
        <label htmlFor="switcher">On Stock:</label>
        <div className="switcher" id="switcher">
          <label htmlFor="yes">
            Yes
            <input
              type="radio"
              id="yes"
              name="stock"
              value="yes"
              ref={(radioRef) => (this.allRefs[0] = radioRef)}
            />
          </label>
          <label htmlFor="no">
            No
            <input
              type="radio"
              id="no"
              name="stock"
              value="no"
              ref={(radioRef) => (this.allRefs[1] = radioRef)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Switcher;
