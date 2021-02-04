import React, { Component } from 'react'
import Quotes from './Quotes'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: [
        {
          quote: "Clearly, his taste in women is the same as his taste in lawyers.",
          author: "Saul Goodman"
        },
        {
          quote: "Shut the f*ck up and let me die in peace.",
          author: "Mike Ehrmantraut"
        },
        {
          quote: "My name is ASAC Schrader, and you can go f*ck yourself.",
          author: "Hank Schrader"
        },
        {
          quote: "You all know exactly who I am. Say my name.",
          author: "Walter White"
        },
        {
          quote: "May his death satisfy you.",
          author: "Gustavo Fring"
        }
      ]
    }
  }

  render() {
    return (
      <>
        <header>
          <img src="https://breakingbadquotes.xyz/img/logo.png" alt="walter-white"/>
          <h1>Breaking Bad Quote Collection</h1>
        </header>
        <main>
          <Quotes quotes={this.state.quotes}/>
        </main>
      </>
    )
  }
}

export default App
