import React from "react";
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class Header extends React.Component{
  
  

  render(){
    return(
    <nav class="navbar navbar-light bg-secondary">
      <h1>Daily Streaks</h1>
     
      <button type="button" className="btn btn-success my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#header">+ Group</button>

      <div className="modal fade" id="header" tabIndex="-1" aria-labelledby="headerLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="headerLabel" >New Group Name </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input id="header" type="text" ></input>
              </div>
              <div className="modal-footer"> 
                  <ButtonGroup variant="contained" >
                    <Button id="headerbutton" color="primary"  data-bs-dismiss="modal" >Create</Button>
                  </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
    </nav>
     );
  }
    
}

export default Header;