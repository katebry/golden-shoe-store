import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  AccountPage,
  ContactPage,
} from "./pages/index";
import { useSelector } from "react-redux";
import { NavBar, Backdrop, SideDrawer } from "./components/index";
import styled from "styled-components";

const MainContentContainer = styled.div`
  padding: 10px;
`;

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  const auth = useSelector((state) => state.auth);
  const { authData, loggedIn } = auth;

  return (
    <Router>
      <NavBar handleClick={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} handleClick={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} handleClick={() => setSideToggle(false)} />
      <MainContentContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/contact" component={ContactPage} />
          {!authData && !loggedIn ? (
            <Route exact path="/login" component={LoginPage} />
          ) : (
            <Route exact path="/account" component={AccountPage} />
          )}
        </Switch>
      </MainContentContainer>
    </Router>
  );
}

export default App;
