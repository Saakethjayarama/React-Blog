import "./App.css";
import Header from "../Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogForm from "../BlogForm";
import Landing from "../Landing";
import Blog from "../Blog";
import Dashboard from "../Dashboard";
import Login from "../Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new">
            <BlogForm />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/edit/:id">
            <BlogForm admin />
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
