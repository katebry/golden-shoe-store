import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  AccountPage,
  ContactPage
} from "./pages/index";
import { NavBar, Backdrop, SideDrawer } from "./components/index";
import "./App.css";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  const loggedIn = false;

  return (
    <Router>
      <NavBar handleClick={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} handleClick={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} handleClick={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/contact" component={ContactPage} />
          {!loggedIn ? (
            <Route exact path="/login" component={LoginPage} />
          ) : (
            <Route exact path="/account" component={AccountPage} />
          )}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
