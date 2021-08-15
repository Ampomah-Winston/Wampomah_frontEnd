import React,{useState,useEffect} from 'react'
import User_Card from '../User_Card';
import {FaSearch} from 'react-icons/fa';
import Axios from 'axios'

export default function ProfileBodyRight(props) {
    const [userList, setUserList] = useState([]);

    Axios.post('http://localhost:5000/users/search',{
        data : 'b'
    }).then(res=>{

    });

    return (
        <div className="ProfileBody-Body-right top-center-content">
                <h4 style={{margin:'0%',textAlign:"left"}}>Search User</h4>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" placeholder="Search user here"/>
                </div>
                <div className="user-card-list">
                    {/* <User_Card/>                     */}
                </div>
        </div>
    )
}
