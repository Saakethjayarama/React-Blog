import "./App.css";
import Header from "../Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogForm from "../BlogForm";
import Landing from "../Landing";
import Blog from "../Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/new">
            <BlogForm />
          </Route>
          <Route path="/blog">
            <Blog />
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
