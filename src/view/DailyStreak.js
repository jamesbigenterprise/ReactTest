import React from "react"

class DailyStreak extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          groupstreak: props.groupstreak,
          groupName: props.groupName
        };
      }
    
      
    render(){

        return (
            <div class="col mb-4">
            <div class="card text-center border-left-primary shadow h-100 py-2" >
                <div class="card-body">
                    <h5 class="card-title">{this.state.groupName} Daily Streak </h5>
                    <h5 >{this.state.groupstreak} </h5>
                    
                </div>
            </div>
        </div>
        );
    }
}

export default DailyStreak