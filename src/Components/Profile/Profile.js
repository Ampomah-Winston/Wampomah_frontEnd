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
                <ProfileBodyLeft userData = {profileData} />
                <ProfileBodyCenter userData = {profileData} />
                <ProfileBodyRight userData = {profileData} />
            </div>
        </div>
    )
}
