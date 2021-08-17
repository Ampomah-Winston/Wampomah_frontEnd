import React from 'react';
import logo from './logo.svg';
import { Draggable } from 'react-drag-and-drop';
import { Tween } from 'react-gsap';
import { FaLink } from 'react-icons/fa';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import chatReferenceAction from '../../actions/chatReferenceAction'

export default function User_Card(props) {
    const dispatch = useDispatch();
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

    const initiateChat = ()=>{
        Axios.post('http://localhost:5000/singlechat/create',{
            init_id : props.myid,
            coop_id : props.foundata.id
        }).then(res =>{
            //the res on contains our chat id, we will use that to join a group
            


            dispatch(chatReferenceAction(
                { 
                    gname:27,
                    gid:'sth'
                }
            ));
        }).catch(err=>{
            console.log(err)
        });
    }

    return (
        <Draggable 
            type = "user_card" 
            data={JSON.stringify(props.foundata)}>
            <div className="user-card" style={{background: `linear-gradient(to right, darkslategray, rgb(${randomColor()}))`}}>
                <Tween to={{ rotation: 360,opacity:1 }} duration={1} repeat={-1} delay={1}>
                    <img src={logo} style={{
                        width:"20%"
                    }}/>
                </Tween>
                <p style={{fontSize:"0.9em"}}>{props.foundata.fname}  {props.foundata.lname}</p>
                <i onClick={initiateChat}> <FaLink/> </i>
            </div>
        </Draggable>
    )
}
