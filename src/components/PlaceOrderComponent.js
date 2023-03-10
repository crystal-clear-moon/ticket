import React, { useState } from "react";
import { Card, Collapse, Form, Button } from "react-bootstrap";
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

function PlaceOrderComponent() {
  const [open, setOpen] = useState(true);

  return (
    <Card className="order-section">
      <Card.Body>
        <Card.Title 
          className='d-flex justify-content-between'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span>Total</span>
          <span className="align-items-center">
            $549.11 &nbsp;
            {
              open ? 
                <HiOutlineChevronUp fontSize={"1.5rem"}/>
              :
                <HiOutlineChevronDown fontSize={"1.5rem"}/>
            }
            
          </span>
        </Card.Title>
        <Collapse in={open}>
          <div>
            <div className="order-part mt-4">
              <h6>Tickets</h6>
              <div className="d-flex justify-content-between">
                <span>Resale Tickets: $229.00 x 2</span>
                <span>$458.00</span>
              </div>
            </div>

            <div className="order-part mt-4">
              <h6>Notes From Seller</h6>
              <div className="d-block">
                <p className="mb-0">
                  xfr XFER Proof of at least one dose of COVID-19 vaccination for ages 5 to 11and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of the Johnson & Johnson Vaccine.
                </p>
                <p>Masks must be worn.</p>
              </div>
            </div>

            <div className="order-part mt-4">
              <h6>Fees</h6>
              <div className="d-flex justify-content-between">
                <span>Service Fee: $44.00 x 2</span>
                <span>$88.16</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Order Processing Fee</span>
                <span>$2.95</span>
              </div>
            </div>

            <div className="order-part mt-4">
              <h6>Delivery</h6>
              <div className="d-flex justify-content-between">
                <span>Mobile Entry</span>
                <span>Free</span>
              </div>
            </div>

            <p className="cancel-order">Cancel Order</p>
          </div>
        </Collapse>
        
        <section className="order-action mt-4">
          <h6>*All Sales Final - No Refunds</h6>
          <div className="terms-use d-flex">
            <Form.Check type="checkbox" />
            <p className="ms-1">I have read and agree to the current <span>Terms of Use</span>.</p>
          </div>
          <Button className="order-btn" type="button">Place Order</Button>
          <p className="order-help">
            *Exceptions may apply, see our Terms of Use.
          </p>
        </section>
      </Card.Body>    
    </Card>
  )
}

export default PlaceOrderComponent;