import React from 'react'
import './Card.css'

const Card = ({ id, quote, author, deleteQuote }) => {
  return (
    <article className="card">
      <button className="card-delete" onClick={() => deleteQuote(id)}>❌</button>
      <p className="card-quote">{`"${quote}"`}</p>
      <p className="card-author">{`- ${author}`}</p>
    </article>
  )
}

export default Card
