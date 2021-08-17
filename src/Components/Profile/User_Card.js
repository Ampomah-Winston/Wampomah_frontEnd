import React from 'react';
import logo from './logo.svg';
import { Draggable } from 'react-drag-and-drop';
import { Tween } from 'react-gsap';
import { FaLink } from 'react-icons/fa';

export default function User_Card(props) {

    const randomColor = () =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*200) + 50)
        }
        let outColor = color.join(',');
        return outColor;
    }

    const userCardBody_Style = {
        width:"10%",
        maxWidth:"70%",
        height:"10%",
        maxHeight:"50%"
    }
    return (
        <Draggable 
            type = "user_card" 
            data={JSON.stringify(props.userData)}>
            <div className="user-card" style={{background: `linear-gradient(to right, darkslategray, rgb(${randomColor()}))`}}>
                <Tween to={{ rotation: 360,opacity:1 }} duration={1} repeat={-1} delay={1}>
                    <img src={logo} style={{
                        width:"20%"
                    }}/>
                </Tween>
                <p style={{fontSize:"0.9em"}}>{props.userData.fname}  {props.userData.lname}</p>
                <i onClick={()=>{
                    alert(`Link with ${props.userData.fname}`)
                }}> <FaLink/> </i>
            </div>
        </Draggable>
    )
}
