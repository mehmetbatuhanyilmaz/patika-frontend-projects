import "./App.css";
import Mockapi from "./servis/Mockapi";

function App() {
  return (
    <div className="App">
      <Mockapi />
    </div>
  );
}

export default App;


/*  Kanka bu kısımda hata veriyor bende ayrı çalışmada da kayıtlı problem yok commit ediyorum //


import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Basket from './components/pages/Basket';
import Favorites from './components/pages/Favorites';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/basket' component={Basket} />
        
      </Switch>
    </Router>
  );
}

export default App;

