import React from 'react'
import Card from './Card'
import './Quotes.css'

const Quotes = ({ quotes }) => {
  const quoteCards = quotes.map((item, index) => {
    return (
      <Card
        key={index}
        id={Date.now()}
        quote={item.quote}
        author={item.author}
      />
    )
  })

  return (
    <section>
      {quoteCards}
    </section>
  )
}

export default Quotes
