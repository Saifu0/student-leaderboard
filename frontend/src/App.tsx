import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import CustomForm from "./components/CustomForm";
import Leaderboard from "./containers/Leaderboard/Leaderboard";
import "./App.css";

const App = () => {

  axios.defaults.baseURL = 'https://schoolleaderserver.herokuapp.com/api';

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create' exact component={CustomForm}/>
          <Route path='/leaderboard' exact component={Leaderboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
