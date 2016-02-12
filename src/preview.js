import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

export default class Preview extends Component {
  static get displayName() {
    return 'Preview';
  }

  static get defaultProps() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

  componentDidUpdate() {
    if (this.svg) {
      d3.select(this.refs.canvas).selectAll('svg').remove();
    }

    this.svg = d3.select(this.refs.canvas).append('svg')
      .attr('width', 800)
      .attr('height', 600);

    const { data } = this.props;

    const rect = this.svg.selectAll('rect').data(data);

    rect.enter().append('rect')
        .attr('x', d => d.left)
        .attr('y', d => d.top)
        .attr('width', d => d.width)
        .attr('height', d => d.height)
        .attr('fill', 'gray');

    rect.exit().remove();
  }

  render() {
    return <div ref="canvas"></div>;
  }
}
