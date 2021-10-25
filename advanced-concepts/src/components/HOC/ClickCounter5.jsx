// this will increment by 5, by passing an addition parameter to HOC function
import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter5 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <hr />
        <h3>passing params in HOC</h3>
        <button onClick={incrementCount}>Increment by 5 : {count} times</button>

        <h3 onMouseOver={incrementCount}>Hovered counter : {count} </h3>
      </div>
    );
  }
}

export default withCounter(ClickCounter5, 5);
