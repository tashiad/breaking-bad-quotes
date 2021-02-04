import React from 'react'
import Card from './Card'
import './Quotes.css'

const Quotes = ({ quotes, deleteQuote }) => {
  const quoteCards = quotes.map((item, index) => {
    return (
      <Card
        key={index}
        id={item.id}
        quote={item.quote}
        author={item.author}
        deleteQuote={deleteQuote}
      />
    )
  })

  return (
    <section className="quotes">
      {quoteCards}
    </section>
  )
}

export default Quotes
