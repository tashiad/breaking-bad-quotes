import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newQuote = {
      id: Date.now(),
      ...this.state
    }
    this.props.addQuote(newQuote)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ quote: '', author: '' })
  }

  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Author'
          name='author'
          value={this.state.author}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>SUBMIT</button>
      </form>
    )
  }
}

export default Form
