import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { Image } from "react-bootstrap";
import CardFrontIcon from '../assets/images/card-front.png';

function PaymentAddComponent() {
  return (
    <section className="method-add mt-4">
      <div className="d-flex">
        <AiOutlinePlus color="#2d6cd7" fontSize={30}/>
        <Image src={CardFrontIcon} width={50} height={36} />
        <span className="ms-1">Add New Card</span>
      </div>
    </section>
  )
}

export default PaymentAddComponent;