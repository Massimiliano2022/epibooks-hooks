
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  /*state = {
    commentObj: {
      comment: "",
      rate: "1",
      elementId: this.props.asin
    }
  };*/

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [elementId, setElementId] = useState("");

  useEffect(() => {
    setElementId(props.asin);
  }, [props.asin]);

  const sendComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify({
          comment,
          rate,
          elementId
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZThlNTY4MzQzMTAwMTRkZWE3ZWYiLCJpYXQiOjE2ODA1MzM3MzMsImV4cCI6MTY4MTc0MzMzM30.BybWrL_zO0q23jXsrG8pA-yPWXt9QYBf4zZcRNL920U"
        }
      });
      if (response.ok) {
        props.fetchComments();
        setComment("");
        setRate("");
      }
    } catch (error) {
      alert(error);
    }
  };

  
    return (
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il commento"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Voto</Form.Label>
          <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Invia commento
        </Button>
      </Form>
    );
  }


export default AddComment;
