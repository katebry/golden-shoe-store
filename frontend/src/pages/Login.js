import { useState } from "react";
import { Input } from "../components/index";

export const LoginPage = () => {
  const initialState = { firstName: "", lastName: "", email: "", password: "" };

  const [form, setForm] = useState(initialState);
  const [isNewUser, setIsNewUser] = useState(false)

const switchMode = () => {
    setIsNewUser(!isNewUser)
}

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("yes");
  };

  return (
    <>
      {isNewUser ? <h2>Sign up</h2> : <h2>Login</h2>}
      <form onSubmit={handleSubmit}>
        {isNewUser && (
          <div>
            <Input
              type="text"
              label="First name"
              placeholder="First name"
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Last name"
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>
        )}
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          {isNewUser ? "Sign up" : "Sign in"}
        </button>
        <button onClick={switchMode}>
          {isNewUser
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign Up"}
        </button>
      </form>
    </>
  );
};
