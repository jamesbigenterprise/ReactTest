import React, { useState } from "react"
import DailyStreak from "./DailyStreak";
import Group from "./Group";
import SingleStreak from './SingleStreak';
import groups from '../model/mockdata.json'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'



function Groups(props)
{

  const [groupsState, setGroups] = useState(groups);
  const forceUpdate = (newGroup) => setGroups(() =>{
    //Will add a new group to the state
    let isNewGroup = true;
    //Unless the group already exist and we need to update it
     groupsState.forEach(groupElement => 
      {
        if(groupElement.groupid === newGroup.groupid){
          isNewGroup = false;
        }
      });
      console.log("A new group should be created? ", isNewGroup);
    //if group does not exist create it, otherwise
    let newState;
    //const newState = [isNewGroup?...groupsState, newGroup:()=>{} ]; potential for shorter implementation
    if(isNewGroup){
      newState = [...groupsState, newGroup];
      console.log("A new group should be created");
    }else{
      newState = groupsState.map( (group)=>{
        if(group.groupid === newGroup.groupid){
          return newGroup;
        }return group;  
      })
    }
    
    console.log(newState, "what is in the state copy?");
    //newState.push(newGroup);
    return newState;
  });

      
  
      function newGroup(event){
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
          forceUpdate(newGroup);
     
      }



    // This method will be sent to the child component
    function update(newGroup) {
        //This method came from the class, I need something to replace this functionality
        forceUpdate(newGroup);
        
    }

  
         let groupsArray = [];
         groups.forEach(element => {
           groupsArray.push(<Group group={element} update={update}/>);
         });


        return (
            <div>
                <nav class="navbar navbar-light bg-secondary">
                <h1>Daily Streaks</h1>
                <button type="button" className="btn btn-success my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#newgroup">+ Group</button>

                <div className="modal fade" id="newgroup" tabIndex="-1" aria-labelledby="newgroupLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="newgroupLabel" >New Group Name </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <input id="newgroup" type="text" ></input>
                        </div>
                        <div className="modal-footer"> 
                            <ButtonGroup variant="contained" >
                              <Button id="newgroup" color="primary"  data-bs-dismiss="modal" onClick={newGroup} >Create</Button>
                            </ButtonGroup>
                        </div>
                      </div>
                    </div>
                  </div>
              </nav>
              {groupsArray.map((group) => {return group})}
            </div>
        );
}

export default Groups