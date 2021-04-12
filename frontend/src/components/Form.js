import { useState } from "react";

export const Form = () => {
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
        alert(data.message);
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
    <>
      <h2>Send me a Message</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={PostData}>Send Message</button>
    </>
  );
};
