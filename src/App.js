import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Zadani1 from './components/Zadani1';
import Zadani2 from './components/Zadani2';
import Zadani3 from './components/Zadani3';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/zadani1' component={Zadani1}/>
          <Route path='/zadani2' component={Zadani2}/>
          <Route path='/zadani3' component={Zadani3}/>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
