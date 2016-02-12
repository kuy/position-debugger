import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

const color = d3.scale.category10();

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
            <span style={{ display: 'inline-block', width: '22px', height: '18px', backgroundColor: color(i), marginRight: '4px' }} />
            <input type="text" defaultValue={stringify(pos)} onChange={e => onUpdate(i, e.target.value)} />
            <button onClick={e => onRemove(i)}> X</button>
          </div>
        ))}
      </div>
    );
  }
}
