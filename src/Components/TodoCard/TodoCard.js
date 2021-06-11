import React from "react";
import { Card } from "react-bootstrap";

const TodoCard = ({ information }) => {
  const {first_name, last_name, email, avatar} = information;
  return (
    <div className="col-md-4">
      <Card className="my-3" style={{ width: "14rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{first_name} {last_name}</Card.Title>
          <Card.Text>
            Email : {email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoCard;
