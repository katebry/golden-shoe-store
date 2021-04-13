import { useState } from "react";
import "./Form.css";
import styled from "styled-components";

const EmailInput = styled.input`
  grid-area: 1 / 1 / 2 / 2;
`;

const MessageInput = styled.textarea`
  grid-area: 2 / 1 / 4 / 4;
  padding: 10px;
  font-size: 1rem;
`;

export const Form = ({ handleSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const PostData = () => {
    fetch("/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleSuccess(data.message);
        setMessage("");
        setName("");
        setSubject("");
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <EmailInput
        type="text"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <MessageInput
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={PostData}>Send Message</button>
    </div>
  );
};
