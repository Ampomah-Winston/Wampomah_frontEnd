import React , {useState,useEffect} from 'react'
import { Redirect,useHistory } from 'react-router-dom';
import ProfileNav from './profileNav/ProfileNav'
import ProfileBody from './ProfileBody/ProfileBody'
import io from 'socket.io-client'

export default function Profile(props) {
    const [profileData, setprofileData] = useState(props.userData)
    //socket connection init
    const CONNECTION_PORT = 'localhost:5001';
    let socket;
    useEffect(() => {
        socket = io(CONNECTION_PORT);
        console.log("socket id => ",socket.id);
    }, [CONNECTION_PORT]);
    
    if(!props.authorized)    {
        return <Redirect to="/App" />
    }

    return (
        <div className="profile-body">
            <ProfileNav userData = {profileData}/>
            <ProfileBody/>
        </div>
    )
}
