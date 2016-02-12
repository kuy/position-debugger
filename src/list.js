import React, { Component, PropTypes } from 'react';

function stringify(obj) {
  return Object.keys(obj).map(key => `${key}: ${obj[key]}`).join(', ');
}

export default class List extends Component {
  static get displayName() {
    return 'List';
  }

  static get defaultProps() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

  render() {
    const { data, onAdd, onRemove, onUpdate } = this.props;
    return (
      <div>
        <button onClick={onAdd}>New</button>
        {data.map((pos, i) => (
          <div key={`${i}_${pos}`}>
            <span>{i}. </span>
            <input type="text" defaultValue={stringify(pos)} onChange={e => onUpdate(i, e.target.value)} />
            <button onClick={e => onRemove(i)}> X</button>
          </div>
        ))}
      </div>
    );
  }
}
