import React from "react";
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { FaRegCheckCircle } from 'react-icons/fa';

import VisaIcon from '../assets/images/visa.png';
import CardBackIcon from '../assets/images/card-back.png';

function PaymentMethodsComponent() {
  return (
    <section className="method-list">
      <div className="visa-part">
        <div className="d-flex align-items-start">
          <div className="method-selectable d-flex align-items-center">
            <Form.Check 
              type="radio"
              id={`default-visa`}
            />
            <Image src={VisaIcon} className="ms-1" width={50} height={36}/>
          </div>
          <div className="method-detail d-block ms-2">
            <h6>Visa - 9999</h6>
            <p className="text-muted mb-0">
              <span>User name</span>&nbsp;|&nbsp;
              <span>exp. 00/11</span>  
            </p>
            <div className="d-flex card-method">
              <span>Edit</span>&nbsp;|&nbsp;
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div className="d-block">
          <p className="secure-label mb-1">Security Code</p>
          <div className="d-flex align-items-center">
            <div className="secure-code">
              <div class="input-group d-flex p-2 border-solid-1">
                <input type="password" maxLength={3} class="back-code" />
                <span class="input-group-append bg-white">
                  <FaRegCheckCircle fontSize="1.25rem"/>
                </span>
              </div>
            </div>
            <div className="ms-3">
              <Image src={CardBackIcon} width={50} height={36} />
              <span className="ms-1">3-digits on back of card</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethodsComponent;