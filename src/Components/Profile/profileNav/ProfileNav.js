import React,{useState} from 'react';

export default function ProfileNav(props) {
    const [userData, setUserData] = useState(props.userData)
    return (
        <div className="profileNav-Body center-content">
            <div className="profileNav-Body-left"> 
                <h3>Linkers</h3>
                <div className="divider"></div>
                <p>{userData.lname}  {userData.fname}</p> 
            </div>
            <div className="profileNav-Body-right">
               
            </div>
        </div>
    )
}
