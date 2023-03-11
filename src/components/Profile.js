import React from "react"
import "./Profile.css";
import {useEffect} from "react"

function Profile({image, name, description}){
    useEffect(()=>{
        console.log("I appeared on the screen");
    },[])

    return (
    <div className= "container" style={{backgroundColor: "red"}}>
        {/* <div>Hello I am number two</div>
        <div>Hello I am a profile</div> */}
        <img 
            className="image" 
            src = {image}
        />
        <h1>{name}</h1>
        <p>{description}</p>
        <p>Officer at Adobe</p>
    </div>
    );
}
export default Profile