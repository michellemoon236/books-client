import React from 'react'
import Card from 'react-bootstrap/Card'


const BookCard = props => {
  return (
      <div>
      <Card className="card-style">
        <Card.Img variant="top" src={props.book.image} />
        <Card.Body>
          <Card.Title className="card-title-style">{props.book.title}</Card.Title>
          <Card.Text>
            <p>Author: {props.book.author}</p>
            <p>Genre: {props.book.genre_name}</p>
            <button onClick={() => props.delete(props.book.id)}>Delete Book</button>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  )
}

export default BookCard