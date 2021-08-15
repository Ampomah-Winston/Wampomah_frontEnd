import React , {useState,useEffect,useMemo} from 'react'
import { Redirect,useHistory } from 'react-router-dom';
import ProfileNav from './profileNav/ProfileNav'
import ProfileBodyLeft from './ProfileBodyLeft/ProfileBodyLeft';
import ProfileBodyRight from './profileBodyRight/ProfileBodyRight';
import ProfileBodyCenter from './profileBodyCenter/ProfileBodyCenter';

let socket={};
const CONNECTION_URL = 'http://localhost:4000/';

export default function Profile(props) {
    const [profileData, setprofileData] = useState(props.userData)
    
    // //a list of current message running
    // const [messageList,setMessageList] = useState([]);
   
    // const JoinAroom = (aSocket,content) =>{
    //     aSocket.emit('join_room', content);
    // }

    // const sendMsgToRoom = (aSocket,content) =>{
    //     aSocket.emit('send_to_room', content);
    // }

    // useEffect(()=>{
    //     socket = IO(CONNECTION_URL);   
    //     dispatch(setSocket(socket));//dispatch socket to the redux state
    // },[CONNECTION_URL])
    // useEffect(() => {
    //     
    //     socket.on('ServerCom', message => {          
    //         setMessageList(prev => {
    //             return [...prev, message]
    //         });
    //     });
    //     //JOin room // join default room on start of app
    //     JoinAroom(socket, {
    //         group: 'linkers',
    //         author: profileData.fname,
    //         time: moment().format('MMMM Do YYYY, HH:mm a') 
    //     });
    //     //get group message
    //     socket.on('groupResponse', data => {
    //         data.dir = 'in'
    //         setMessageList(prev => {
    //             return [...prev, data]
    //         });
    //     })

    //     socket.on('flapMessage', message => {    
    //         alert(message.msg);      
    //         setMessageList(prev => {
    //             return [...prev, message]
    //         });
    //     });

    // }, [CONNECTION_URL]);
    
    // function handleSubmitMessage(e){
    //     let msgContent = {
    //         group: 'linkers',
    //         composer: profileData.fname,
    //         title:'sendGroupMsg',
    //         dir:'out',
    //         msg: message,
    //         time: moment().format('MMMM Do YYYY, HH:mm a')
    //     }
    //     if(message){
    //         // sendMsgToRoom(socket,msgContent)
    //         setMessageList(prev => {
    //             return [...prev, msgContent];
    //         })
    //         // useDispatch here to clear data
    //         // dispatch(clearMessage());
    //     }
    // }

    if(!props.authorized)    {
        return <Redirect to="/App" />
    }

    return (
        <div className="profile-body">
            <ProfileNav userData = {profileData}/>
            {/* <ProfileBody messageList = {messageList} outMsg = {composer_msg} handleComposer = {handleComposer} handleSubmitMessage = {handleSubmitMessage} /> */}
            <div  style={{
                width: '100%',
                height: '90%',
                backgrounColor: 'darkslategray',
                color:'khaki',
                display: 'flex',
                marginTop: '10px'
            }}>
                <ProfileBodyLeft />
                <ProfileBodyCenter userData = {profileData} />
                <ProfileBodyRight />
            </div>
        </div>
    )
}

// function SockectOpr(props){
//     const [profileData, setprofileData] = useState(props.userData)
    
//     //a list of current message running
//     const [messageList,setMessageList] = useState([]);

//     const JoinAroom = (aSocket,content) =>{
//         aSocket.emit('join_room', content);
//     }

//     const sendMsgToRoom = (aSocket,content) =>{
//         aSocket.emit('send_to_room', content);
//     }

//     useEffect(() => {
//         socket = IO(CONNECTION_URL);
        
//         socket.on('ServerCom', message => {          
//             setMessageList(prev => {
//                 return [...prev, message]
//             });
//         });
//         //JOin room // join default room on start of app
//         JoinAroom(socket, {
//             group: 'linkers',
//             author: profileData.fname,
//             time: moment().format('MMMM Do YYYY, HH:mm a') 
//         });
//         //get group message
//         socket.on('groupResponse', data => {
//             data.dir = 'in'
//             setMessageList(prev => {
//                 return [...prev, data]
//             });
//         })

//         socket.on('flapMessage', message => {    
//             alert(message.msg);      
//             setMessageList(prev => {
//                 return [...prev, message]
//             });
//         });

//     }, [CONNECTION_URL]);
// }