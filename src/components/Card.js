import React from 'react'
import './Card.css'

const Card = ({ id, quote, author }) => {
  return (
    <article>
      <p>{quote}</p>
      <p>{author}</p>
    </article>
  )
}

export default Card
