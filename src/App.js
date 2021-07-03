import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import Projects from './Components/Home/Home/Projects';
import Contact from './Components/Home/Home/Contact';
import Footer from './Components/Home/Home/Footer';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div>
    <Router>
      <Header></Header>
      <Switch>
        <Route path ="/myProject">
          <Projects></Projects>
          <Footer></Footer>
        </Route>
        <Route path="/contactMe">
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
