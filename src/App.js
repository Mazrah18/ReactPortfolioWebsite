import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';
import AboutMe from './About';

function App() {
  // Function to scroll to the top when clicking on the logo or "Home" link in the navbar

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
   
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
