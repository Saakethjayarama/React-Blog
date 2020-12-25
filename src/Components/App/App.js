import "./App.css";
import Header from "../Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogForm from "../BlogForm";
import Landing from "../Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/new">
            <BlogForm />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
