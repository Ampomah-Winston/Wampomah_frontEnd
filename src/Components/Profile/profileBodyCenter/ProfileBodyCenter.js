import React, { useState,useEffect } from 'react';
import { FaFeatherAlt } from 'react-icons/fa';
import IO from 'socket.io-client'

import MessageSnippet from '../../MessageSnippet/MessageSnippet';
//import useSelectors to help with selecting redux state; useDispatch to dispatch and action
import {useSelector, useDispatch} from 'react-redux'
//import an action 
import {appendMessage,clearMessage} from '../../../actions/messageAction';
import {addToList} from '../../../actions/messageListAction';//use to add to state of message list
import {setSocket} from '../../../actions/socketSetAction';


//import moment, time manager
import moment from 'moment'

let socket={};
const CONNECTION_URL = 'http://localhost:4000/';
export default function ProfileBodyCenter(props) {
    //get message state from redux-state
    const message = useSelector(state => state.messenger);
    const messageList = useSelector(state => state.messageList);//this is an array of all messages
    // const socket = useSelector(state => state.socketer);//get socket state set by profile component on start

    //get Socket from Profile socket
    // const socket = props.socketer;
    // console.log(socket)

    //set dispatch
    const dispatch = useDispatch();

    const JoinAroom = (aSocket,content) =>{
        socket.emit('join_room', content);
    }

    const sendMsgToRoom = (aSocket,content) =>{
        socket.emit('send_to_room', content);
    }

    useEffect(() => {        
        socket = IO(CONNECTION_URL);   
        dispatch(setSocket(socket));//dispatch socket to the redux state
        
            // socket.on('ServerCom', message => {       
            //     console.log("serverCom",message);   
            //     dispatch(addToList(message));
            // });
            // JOin room  join default room on start of app
            JoinAroom(socket, {
                group: 'linkers',
                author: props.userData.fname,
                time: moment().format('MMMM Do YYYY, HH:mm a') 
            });
            //get group message
            socket.on('groupResponse', data => {
                data.dir = 'in';
                dispatch(addToList(data));
            })

            // socket.on('flapMessage', message => {    
            //     alert(message.msg);      
            //     dispatch(addToList(message));
            // });

    }, [CONNECTION_URL]);

    //handle submit 
    function handleSubmitMessage(e){
        let msgContent = {
            group: 'linkers',
            composer: props.userData.fname,
            title:'sendGroupMsg',
            dir:'out',
            msg: message,
            time: moment().format('MMMM Do YYYY, HH:mm a')
        }
        if(message){
            sendMsgToRoom(socket,msgContent)
            //useDispatch here to add msg to list
            dispatch(addToList(msgContent));
            // useDispatch here to clear data
            dispatch(clearMessage());
        }
    }

    function handleComposer(e){
        // am dispatching appendMessage action the passing target fired value as the data to be appended to our
        //message state
        dispatch(appendMessage(e.target.value));
    }

    return (
        <div className="ProfileBody-Body-center top-center-content">
                <span> CHAT with <i>{}</i> </span>
                    <div className="chat-body">
                    {
                         messageList.map((message) => {
                            return <MessageSnippet time={message.time} dir={message.dir} composer={message.composer}>
                                {message.msg}
                            </MessageSnippet>                         
                        })
                    }
                </div> 
                {/* value={props.outMsg}   */}
                <div className="chat-composition">
                    <div className="textMsg-box">
                        <textarea value = {message} onChange={handleComposer} placeholder="Composer message here ...." style={{
                            background:'none',
                            width:"99%",
                            height:"90%",
                            maxWidth:"99%",
                            maxHeight:'95%',
                            minWidth:"99%",
                            minHeight:'90%',
                            textAlign:'revert',
                            outline:'none',
                            padding:'5px',
                            fontSize:'1.2em',
                            backgroundColor:'darkslategray',
                            boxShadow: `1px 1px 4px khaki`,
                            color:"khaki"
                            }}>

                        </textarea>
                    </div>
                    <div className="textMsg-control-box" onClick={handleSubmitMessage}>
                        <FaFeatherAlt/>    
                    </div>
                </div>
            </div>
    )
}