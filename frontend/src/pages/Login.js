import { useState } from "react";
import { Input } from "../components/index";

export const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const isNewUser = true;

  const handleSubmit = () => {
    console.log("yes");
  };

  return (
    <>
      {isNewUser ? <h2>Login</h2> : <h2>Sign up</h2>}
      <form onSubmit={handleSubmit}>
        {isNewUser && (
          <div>
            <Input
              type="text"
              label="First name"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              label="Last name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        )}
      </form>
    </>
  );
};
