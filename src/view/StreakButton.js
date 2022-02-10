import React from "react";

function StreakButton(props){

    return(<div>
        <button style={props.streakObject.styles} > {props.streakObject.name?props.streakObject.name: "No name" } <br/>{props.streakObject.fulldate}<br/><hr/> Done </button>
    </div>);
}

export default StreakButton;