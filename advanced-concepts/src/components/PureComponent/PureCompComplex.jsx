import React, { PureComponent } from 'react';
class PureCompComplex extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chars: ['a', 'b', 'c', 'd'],
    };
  }

  componentDidMount() {
    const oldChars = this.state.chars;
    setInterval(() => {
      this.setState(
        {
          chars: [...this.state.chars],
        },
        () => console.log(this.state.chars === oldChars)
      );

      //       this.setState({
      //         chars: ['a', 'b', 'c'],
      //       });
    }, 2000);
  }

  render() {
    console.log('pure complex rendered');
    return (
      <div>
        <h3>Pure complex component </h3>
        {this.state.chars.length}
      </div>
    );
  }
}

export default PureCompComplex;
