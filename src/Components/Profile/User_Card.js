import React from 'react'
import logo from './logo.svg'
import { Draggable } from 'react-drag-and-drop';

export default function User_Card(props) {
    const userCardBody_Style = {
        width:"10%",
        maxWidth:"70%",
        height:"10%",
        maxHeight:"50%"
    }
    return (
        <Draggable>
            <div className="user-card">
                <img src={logo} style={{
                    width:"20%"
                }}/>
                <p style={{fontSize:"0.9em"}}>Ampomah Winston</p>
            </div>
        </Draggable>
    )
}
