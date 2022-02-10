import React from "react"
import DailyStreak from "./DailyStreak";
import SingleStreak from './SingleStreak';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import groups from '../model/mockdata.json'


function Group (props){
  
    

    function handleChange(event){
        const  id = event.currentTarget.id;
        let name = document.querySelector('input[type="text"]#'+id).value;
        //create the new Streak
        const date = new Date();
        const today = (date.getUTCMonth() + 1) + "/" + date.getUTCDate() + "/" + date.getFullYear();
        const startDate = today;
        const lateststreakStart = today;
        const streak = 0;
        

        const randomNumber = Math.random().toFixed(2)*100;
        const newStreak = {
                "id":props.group.groupid + "Streak" + randomNumber,
                "name":name,
                "startDate": startDate,
                "lateststreakStart":lateststreakStart,
                "streak": streak
            }


        //update the file/server

        //retrieve the whole document
        const groupObject = groups;
        let correctGroup;
        //find the group / match the group ID
        groupObject.map((group) => {if(props.group.groupid === group.groupid){
          group.streaks.push(newStreak);
          props.update(group);
        }});
    }

    
 
       let streaksArray = [];
       props.group.streaks.forEach(element => {
         streaksArray.push(<SingleStreak streak={element}/>);
       });

        return (
            <div>
                <nav className="navbar navbar-dark bg-light">
                    <h1>{props.group.groupName}</h1>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" + props.group.groupid}>+ New Streak</button>
                </nav>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {streaksArray.map((streak) => {return streak
            })}</div>
      <DailyStreak groupstreak={props.group.groupStreak} groupName={props.group.groupName}/>
     
      <div className="modal fade" id={props.group.groupid} tabIndex="-1" aria-labelledby= {props.group.groupid + "Label"} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={props.group.groupid + "Label"}>New Daily Streak for {props.group.groupName} </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input id={props.group.groupid} type="text" ></input>
              </div>
              <div className="modal-footer"> 
                  <ButtonGroup variant="contained" >
                    <Button id={props.group.groupid} color="primary" onClick={handleChange}  data-bs-dismiss="modal" >Create</Button>
                  </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
}

export default Group