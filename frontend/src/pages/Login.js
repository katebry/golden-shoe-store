import { useState } from "react";
import { Input } from "../components/index";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { addAuthToken, signUp, signIn } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import "./Login.css";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const StyledText = styled.div`
  cursor: pointer;
  font-size: 1rem;
`

export const LoginPage = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    postCode: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
  const [isNewUser, setIsNewUser] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setIsNewUser(!isNewUser);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewUser) {
      dispatch(signUp(form, history));
    } else {
      dispatch(signIn(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(addAuthToken(result, token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log(error);
    alert("Google Sign In was unsuccessful. Please try again later");
  };

  return (
    <>
      <div className="heading">
        {isNewUser ? <h2>Sign up</h2> : <h2>Login</h2>}
      </div>
      <div className="loginpage">
        <form className="loginForm" onSubmit={handleSubmit}>
          {isNewUser && (
            <>
              <div>
                <Input
                  name="firstName"
                  type="text"
                  label="First name"
                  placeholder="First name"
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  type="text"
                  label="Last name"
                  placeholder="Last name"
                  handleChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="address"
                  type="text"
                  label="Address"
                  placeholder="Address"
                  handleChange={handleChange}
                />
                <Input
                  name="postCode"
                  type="text"
                  label="Postcode"
                  placeholder="Postcode"
                  handleChange={handleChange}
                />
              </div>
            </>
          )}
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            handleChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <ButtonContainer>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          </ButtonContainer>
          <ButtonContainer>
            <button onClick={handleSubmit}>
              {isNewUser ? "SIGN UP" : "SIGN IN"}
            </button>
          </ButtonContainer>
          <ButtonContainer>
            <StyledText onClick={switchMode}>
              {isNewUser
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </StyledText>
          </ButtonContainer>
        </form>
      </div>
    </>
  );
};
