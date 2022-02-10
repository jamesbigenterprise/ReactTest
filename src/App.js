import './App.css';

import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import Groups from './view/Groups';
import Home from './view/Home';

const User = ({match}) => {
  return (<h1>Welcome User {match.params.username}</h1>);
}
class App extends React.Component{

  
  render(){
    //access the database and get the data

    return (
      <div className="container">
            <Groups/>
          </div>
      
      
    );
  }
}

export default App;

/**
 * <Router>
        
        <Route path="/Groups" exact render={()=>{
          return(
          <div className="container">
            <Groups/>
          </div>);
          }
        }/>
       
        <Route path="/" exact render={()=>{
          return(
          <div className="container">
            <Home/>
          </div>);
          }
        }/>



        
      </Router>
 */