import React,{useState} from 'react'
import {FaSearch,FaFeatherAlt} from 'react-icons/fa';
import User_Card from '../User_Card';
import MessageSnippet from '../../MessageSnippet/MessageSnippet'
import Droppable from 'react-drag-and-drop/lib/Droppable';

export default function ProfileBody(props) {

    const [srchUserInput, setSrchUserInput] = useState('')
    const [usersList, setUsersList] = useState([])
    function handle_friends_onChange () {
        
    }

    function handle_users_onChange (e) {
        setSrchUserInput(e.target.value);
    }

    return (
        <div className="ProfileBody-Body center-content">
            <div className="ProfileBody-Body-left top-center-content">
                <span>My Friends</span>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" value={srchUserInput} placeholder="Search user here" onChange={handle_users_onChange}/>
                </div>         
                <Droppable>
                    <div className="user-card-list top-center-content">
                        <User_Card/>
                        <User_Card/>
                        <User_Card/>
                    </div>
                </Droppable>
                
            </div>
            <div className="ProfileBody-Body-center top-center-content">
                <span>Chat</span>
                <div className="chat-body">
                    {/* <MessageSnippet/> */}
                    <MessageSnippet dir={`in`}/>
                    <MessageSnippet dir={`out`}/>
                    <MessageSnippet dir={`in`}/>
                    <MessageSnippet dir={`out`}/>

                </div>                
                <div className="chat-composition">
                    <div className="textMsg-box">
                        <textarea placeholder="Composer message here ...." style={{
                            background:'none',
                            width:"99%",
                            height:"95%",
                            maxWidth:"99%",
                            maxHeight:'95%',
                            minWidth:"99%",
                            minHeight:'95%',
                            textAlign:'revert',
                            outline:'none',
                            padding:'5px',
                            fontSize:'1.2em',
                            backgroundColor:'darkslategray',
                            boxShadow: `1px 1px 4px hotpink`,
                            color:"khaki"
                            }}>

                        </textarea>
                    </div>
                    <div className="textMsg-control-box">
                        <FaFeatherAlt/>    
                    </div>
                </div>
            </div>
            <div className="ProfileBody-Body-right top-center-content">
            <h4 style={{margin:'0%',textAlign:"left"}}>Search User</h4>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" placeholder="Search user here"/>
                </div>
                <div className="user-card-list top-center-content">
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                    <User_Card/>
                </div>
            </div>
        </div>
    )
}
