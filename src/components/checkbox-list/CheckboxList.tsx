import { Component, ReactNode } from 'react';

import './CheckboxList.css';

const CHECKLIST = ['Fairy Tale', 'Fiction', 'Folklore', 'Drama', 'Poetry'];

interface CheckboxListProps {
  onCheckboxClick: (allRefs: RefsType) => void;
}

export type RefsType = {
  [key: number]: HTMLInputElement | null;
};

class CheckboxList extends Component<CheckboxListProps> {
  allRefs: RefsType = {};

  render(): ReactNode {
    return (
      <div className="checkList">
        <label htmlFor="genre" className="title">
          Genre:
        </label>
        <div id="genre" className="list-container">
          {CHECKLIST.map((item, index) => {
            return (
              <div key={index}>
                <span>{item}</span>
                <input
                  type="checkbox"
                  ref={(checkboxRef) => (this.allRefs[index] = checkboxRef)}
                  onClick={() => this.props.onCheckboxClick(this.allRefs)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckboxList;
