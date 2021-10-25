import React, { Component } from 'react';

export class HoverCounterTwo extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return (
      <div>
        <h3 onMouseOver={handleIncrement}>Hovered {count} times </h3>

        {/* <hr />
        <h4 onMouseOver={this.children.handleIncrement}>
          this is from children : hoverCount = {this.children.count}{' '}
        </h4> */}
      </div>
    );
  }
}

export default HoverCounterTwo;
