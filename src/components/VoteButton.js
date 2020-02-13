import React, { Component } from 'react'

class VoteButton extends Component {

  state = {
    count: 0
  }

  handleOnClick = event => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Vote, count: {this.state.count}</button>
      </div>
    )
  }
}


export default VoteButton
