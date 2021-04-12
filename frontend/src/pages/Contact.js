import "./Contact.css";
import styled from "styled-components";
import { Form } from "../components/index";

const StyledTitle = styled.h1`
  padding: 1.5rem 1rem;
  font-size: 1.7rem;
`;

export const ContactPage = () => {
  return (
    <div>
      <StyledTitle>CONTACT US</StyledTitle>
      <div className="faq">
        <h2>FAQ</h2>
        <h3>I'm not happy with my order</h3>
        <p>
          We're sorry you're not happy! All orders can be returned in store,
          just take your dispatch note and the goods you want to return, and the
          store team will be happy to assist you.
        </p>
        <h3>When can I expect my shoes?</h3>
        <p>
          Once you have placed your order with us it will be dispatched from our
          warehouse within 1-2 working days. You will receive a notification
          email from Royal Mail once the order is on its way to you. If we have
          sent your order via courier, this email will contain a tracking number
          and a link to our courier’s website to tell you the current status of
          your delivery.
        </p>
        <h3>I bought an item that was sold out</h3>
        <p>Please contact our customer service team.</p>
        <h3>I'd like to speak to someone</h3>
        <p>
          Feel free to visit us at our flagship store in London. If you'd like
          to contact us via phone we have a dedicated helpline open 9 - 5pm
          Monday - Friday. You can also contact us via the webform found further
          down the page.
        </p>
      </div>
      <div className="formSection">
          <Form />
      </div>
    </div>
  );
};
