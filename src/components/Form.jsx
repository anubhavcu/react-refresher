// eg to show various form inputs
// controlled component
import React, { Component } from 'react';

const initialState = {
  userName: '',
  comments: '',
  topic: 'react',
};
class Form extends Component {
  constructor(props) {
    super(props);

    //     this.state = {
    //       userName: '',
    //       comments: '',
    //       topic: 'react',
    //     };
    this.state = initialState;
  }

  // when we assign a handler to onChange event , the event itself is passed as a parameter to the handler
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleResetState = () => {
    //     this.setState({
    //       userName: '',
    //       comments: '',
    //       topic: 'react',
    //     });
    this.setState({ ...initialState });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userName);
    console.log(this.state.comments);
    console.log(this.state.topic);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          value={this.state.userName}
          onChange={this.handleUserNameChange}
        />
        <div>
          name :{' '}
          {this.state.userName.trim() ? this.state.userName : 'No username'}{' '}
        </div>
        <div>
          <label htmlFor=''>Comments</label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            value={this.state.comments}
            onChange={this.handleCommentChange}
          ></textarea>
          <div>
            Comment :{' '}
            {this.state.comments.trim() ? this.state.comments : 'no comments'}
          </div>
        </div>
        <div>
          <label htmlFor=''>Topics</label>
          <select
            name=''
            id=''
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value='react'>react</option>
            <option value='angular'>angular</option>
            <option value='vue'>vue</option>
          </select>
          <div>Topic : {this.state.topic}</div>
        </div>
        <div>
          <button onClick={this.handleResetState}>Reset all state</button>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
