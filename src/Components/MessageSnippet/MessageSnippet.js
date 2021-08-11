import React from 'react';
import logo from '../../assets/images/svg/Goodshow.svg';

export default function MessageSnippet(props) {

    const messageSnippet_style = {
        width:'100%',
        maxHeight: "80%",
        margin:"15px auto",

        display:"flex",
        alignItems:"center",
        justifyContent: props.dir === 'in' ? "flex-start" : "flex-end"
    }
    const message_body_style = {
        minWidth: '15%',
        maxWidth: '70%',
        minHeight: '10%',
        maxHeight: '50%',

        display:"flex",
        alignItems:"flex-start",
        justifyContent:"flex-start"
    }
    const message_core_avatar = {
        width:'30px',
        margin:'5px'
    }
    const message_core_style = {
        fontFamily: `'Courier New', Courier, monospace`,
        backgroundColor: "darkslategray",
        width:'85%',
        overflowY:'auto',
        overflowX: 'wrap',
        color:'',
        borderRadius:'10px',
        border: '2px solid hotpink',
        padding:'3px',
        display:'flex',
        alignItems:'center',
        backgroundColor:'transparent'
    }
    return (
        <div className="message-snippet" style={messageSnippet_style}>
            <div className="message-body" style={message_body_style}>

                {props.dir === 'in' ? 
                <>
                    <img className="message-avatar"  src = {logo} style={message_core_avatar}/>
                    <div className="message-core" style={message_core_style}>
                        this is the message of the century this is the message of the
                    </div>
                </> : 
                <>
                <div className="message-core" style={message_core_style}>
                        this is the message of the century this is the message of the
                </div>
                <img className="message-avatar"  src = {logo} style={message_core_avatar}/>
                </>
                }



                
            </div>
        </div>
    )
}

