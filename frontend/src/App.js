import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  AccountPage,
} from "./pages/index";
import { NavBar } from "./components/NavBar";

function App() {

  const loggedIn = false;

  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
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
