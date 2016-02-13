import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import {
  Layout, Header, HeaderRow, Button,
  Navigation, Grid, Cell, Content, Icon
} from 'react-mdl';
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
      <Layout style={{ backgroundColor: 'white' }}>
        <Header title="Position Debugger" style={{ color: 'white' }}>
          <Navigation>
            <a href="https://github.com/kuy/position-debugger" target="_blank">GitHub</a>
          </Navigation>
        </Header>
        <Content>
          <Grid>
            <Cell col={5}>
              <Header transparent>
                <HeaderRow title="Data" style={{ color: 'black', padding: '0 0 0 5px' }}>
                  <Button ripple raised accent onClick={this.handleAdd}>
                    Add
                  </Button>
                </HeaderRow>
              </Header>
              <List
                data={positions}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}
              />
            </Cell>
            <Cell col={7}>
              <Header transparent>
                <HeaderRow title="Preview" style={{ color: 'black', padding: '0 0 0 5px' }} />
              </Header>
              <Preview
                data={positions}
              />
            </Cell>
          </Grid>
        </Content>
      </Layout>
    );
  }
}

function select(state) {
  const { app } = state;
  return { app };
}

export default connect(select)(App);
