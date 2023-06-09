import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      {console.log("SingleBook: "+props.changeSelectedBook(props.book.asin))}
      {console.log("props.book.asin: "+props.book.asin)}
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{ border: props.selectedBook === props.book.asin ? "3px solid red" : "3px solid #ebebeb" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;