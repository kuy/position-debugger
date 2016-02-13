import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import { DataTable, Button, IconButton, Textfield, Icon } from 'react-mdl';

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
    const { data, onRemove, onUpdate } = this.props;
    // <span style={{ display: 'inline-block', width: '22px', height: '18px', backgroundColor: color(i) }} />
    return (
      <div>
        <DataTable
          shadow={0}
          columns={[
            { name: 'index', label: '#', numeric: true },
            { name: 'color', label: 'Color' },
            { name: 'data', label: 'Data', tooltip: 'e.g. top: 10, left: 10, width: 100, height: 100' },
            { name: 'actions', label: '' }
          ]}
          rows={data.map((pos, i) => ({
            index: i,
            color: <Icon name="lens" style={{ color: color(i) }} />,
            data: <Textfield
              defaultValue={stringify(pos)}
              label="Position Data..."
              onChange={e => onUpdate(i, e.target.value)}
            />,
            actions: <IconButton name="remove_circle" onClick={e => onRemove(i)} />
          }))}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
