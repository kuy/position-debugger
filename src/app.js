import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import List from './list';
import Preview from './preview';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd() {
    this.props.dispatch(actions.addPosition());
  }

  handleRemove(index) {
    this.props.dispatch(actions.removePosition(index));
  }

  handleUpdate(index, position) {
    this.props.dispatch(actions.updatePosition({ index, position }));
  }

  render() {
    const { app: { positions } } = this.props;
    return (
      <div>
        <h1>Debugger for <a href="https://github.com/kuy/redux-tooltip">redux-tooltip</a></h1>
        <List
          data={positions}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        <Preview
          data={positions}
        />
      </div>
    );
  }
}

function select(state) {
  const { app } = state;
  return { app };
}

export default connect(select)(App);
