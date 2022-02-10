import React from "react"
import DailyStreak from "./DailyStreak";
import Group from "./Group";
import SingleStreak from './SingleStreak';
import groups from '../model/mockdata.json'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {BrowserRouter as Router, Link} from 'react-router-dom';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            groups: groups
        };

        this.update = this.update.bind(this);
        this.newGroup = this.newGroup.bind(this);
       
    }
      
  
      newGroup(event){
        const  id = event.currentTarget.id;
          
        let name = document.querySelector('input[type="text"]#'+id).value;
        //create the new Group
        const date = new Date();
        const today = (date.getUTCMonth() + 1) + "/" + date.getUTCDate() + "/" + date.getFullYear();
        const randomNumber = Math.random().toFixed(2)*100;
        const newGroup = {
            "groupid":name + randomNumber,
            "groupName":name,
            "groupStreak":0,
            "groupStartDate": today,
            "grouplateststreakStart":today,
            "streaks": [
            ]
          }
          
        

  
          //retrieve the whole document
          const groupObject = groups;
          groupObject.push(newGroup)

          console.log("Create Group", id, name, newGroup, "And the result", groupObject);
          
          this.update(groupObject);
     
      }



    // This method will be sent to the child component
    update(updatedGroup) {
        this.state.groups = null;
        this.state.groups = updatedGroup;
        console.log("Update done", this.state.groups);
        this.forceUpdate();
    }
    
    render(){

         //map the groups creating an array of groups
  
         let groupsArray = [];
         groups.forEach(element => {
           groupsArray.push(<Group group={element} update={this.update}/>);
         });


        return (
          <Box color="text.primary" clone>
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Groups">Groups</Link></li>
            </ul>
            
          <h1>Daily Streaks Homepage</h1>
        </Box>
        );
    }
}

export default Home