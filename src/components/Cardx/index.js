import React from "react";
import { Card } from "react-bootstrap";

function Cardx({title,body,img,children}) {
  return (
    <Card className="p-3">
      <Card.Img variant="top" height={200} width={200} src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}

export default Cardx;
