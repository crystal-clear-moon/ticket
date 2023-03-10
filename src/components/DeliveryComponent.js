import React from "react";
import { Card } from "react-bootstrap";
import { FaRegCheckCircle } from 'react-icons/fa';

function DeliveryComponent() {
  return (
    <Card className='delivery-section mb-3'>
      <Card.Body>
        <Card.Title>Delivery <FaRegCheckCircle color='green' fontSize={"1.5rem"}/></Card.Title>
        <Card.Subtitle className="mb-2 mt-4">Mobile Entry - Free</Card.Subtitle>
        <Card.Text>
          <p className='mb-0 text-muted'>Tickets available by Sun Apr 3, 2022</p>
          <p className="text-muted">These mobile tickets will be transferred directly to you from a trusted seller. We'll email you instructions on how to accept them on the original ticket provider's mobile app.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DeliveryComponent;