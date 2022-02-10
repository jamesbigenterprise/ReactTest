import { useControlled } from "@material-ui/core";
import React from "react"

function SingleStreak (props){
    
        return (
            <div class="col mb-4">
            <div class="card text-center border-left-primary shadow h-100 py-2" >
                <div class="card-body">
                    <h5 class="card-title">{props.streak.name} </h5>
                    <a href="#" class="btn btn-primary btn-lg btn-block"> 04/23<br/>Done</a>
                </div>
            </div>
        </div>
        );
}

export default SingleStreak