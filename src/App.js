import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link, BrowserRouter
} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Course from './Courses/Course';
import Event from './Event/Event';
import Pricing from './Pricing/Pricing';
import Trainer from './Trainers/Trainer';
import Register from './User/Register';
import Protected from './Protected';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/courses">
            <Course />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/trainers">
            <Trainer />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
