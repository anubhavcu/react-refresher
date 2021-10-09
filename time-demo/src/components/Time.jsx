import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    this.state = {
      time: {
        hours: this.addZero(hours),
        minutes: this.addZero(minutes),

        seconds: this.addZero(seconds),
      },
    };
  }

  addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  updateTime = () => {
    const hours = this.addZero(new Date().getHours()),
      minutes = this.addZero(new Date().getMinutes()),
      seconds = this.addZero(new Date().getSeconds());
    this.setState({
      time: {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      },
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        <h2>
          Time (old way) : {hours} : {minutes} : {seconds}
        </h2>
      </div>
    );
  }
}

export default Time;
