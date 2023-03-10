import React from "react";
import { Card } from "react-bootstrap";

import { FaRegCheckCircle } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import PaymentMethodsComponent from "./PaymentMethodsComponent";
import PaymentAddComponent from "./PaymentAddComponent";

import OfficalIcon from '../assets/images/offical.png';


function PaymentComponent() {
  return (
    <Card className='payment-section'>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div className='main-title'>
            Payment <FaRegCheckCircle color='green' fontSize={"1.5rem"}/>
          </div>
          <div className='second-title d-flex align-items-end'>
            <div className='align-items-baseline'>
              <span className='text-uppercase text-muted'>offical card of</span>
              <span className='fst-italic'>ticketmaster</span>
            </div>
            <Image src={OfficalIcon}/>
          </div>
        </Card.Title>
        <Card.Body>
          <h6 className='mb-2'>Use Credit / Debit Card</h6>          
          <PaymentMethodsComponent />
          <PaymentAddComponent />
          <hr />
          <section className="description-area">
            <h6>Or Pay With</h6>
            <p>
              By using a digital wallet and continuing past this page, you have read and are accepting the &nbsp;
              <span>Terms of Use.</span>  
            </p>
          </section>
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

export default PaymentComponent;