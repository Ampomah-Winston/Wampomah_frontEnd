import React from 'react';
import logo from './logo.svg';
import { Draggable } from 'react-drag-and-drop';
import { Tween } from 'react-gsap';

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
    const outData = {
        id:`${Math.floor(Math.random()*1000)+100}`, 
        uname:"Ampomah"
    }
    return (
        <Draggable 
            type = "user_card" 
            data={JSON.stringify(outData)}>
            <div className="user-card" style={{background: `linear-gradient(to right, darkslategray, rgb(${randomColor()}))`}}>
                <Tween to={{ rotation: 360,opacity:1 }} duration={1} repeat={-1} delay={1}>
                    <img src={logo} style={{
                        width:"20%"
                    }}/>
                </Tween>
                <p style={{fontSize:"0.9em"}}>{outData.uname}</p>
            </div>
        </Draggable>
    )
}
