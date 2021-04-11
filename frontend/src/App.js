import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, ProductPage, CartPage } from "./pages/index";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
