import React, { Component } from 'react'
import Quotes from './Quotes'
import Form from './Form'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: [
        {
          id: 0,
          quote: "Clearly, his taste in women is the same as his taste in lawyers.",
          author: "Saul Goodman"
        },
        {
          id: 1,
          quote: "Shut the f*ck up and let me die in peace.",
          author: "Mike Ehrmantraut"
        },
        {
          id: 2,
          quote: "My name is ASAC Schrader, and you can go f*ck yourself.",
          author: "Hank Schrader"
        },
        {
          id: 3,
          quote: "You all know exactly who I am. Say my name.",
          author: "Walter White"
        },
        {
          id: 4,
          quote: "May his death satisfy you.",
          author: "Gustavo Fring"
        }
      ]
    }
  }

  addQuote = (newQuote) => {
    this.setState({
      quotes: [...this.state.quotes, newQuote]
    })
  }

  deleteQuote = (id) => {
    const filteredQuotes = this.state.quotes.filter(quote => quote.id !== id)
    this.setState({ quotes: filteredQuotes })
  }

  render() {
    return (
      <>
        <header>
          <img className="logo" src="https://breakingbadquotes.xyz/img/logo.png" alt="walter-white"/>
          <h1>Breaking Bad Quotes Collection</h1>
        </header>
        <main>
          <h2>Add a new quote:</h2>
          <Form addQuote={this.addQuote}/>
          <hr/>
          <h2>All Quotes</h2>
          <Quotes quotes={this.state.quotes} deleteQuote={this.deleteQuote}/>
        </main>
      </>
    )
  }
}

export default App
