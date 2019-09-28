import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookForm extends Component {
  state = {
    title: '',
    author: '',
    genre_id: '',
    image: '',
    loading: false
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(BookForm);