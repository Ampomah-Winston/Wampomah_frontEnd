import React,{useState,useEffect} from 'react';
import { Droppable } from 'react-drag-and-drop';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import GroupMember from '../../GroupMember/GroupMember';


function ProfileBodyLeft(props) {

    const [srchUserInput, setSrchUserInput] = useState('');
    useEffect(() => {
             
    },[srchUserInput]);

    //handle search input type
    function handle_users_onChange (e) {
        setSrchUserInput(e.target.value);      
    }

    //a state for current running group creation
    const [creatnGroupList, setCreatnGroupList] = useState([])

     //set style for the droppable div
     const createGroup_Form = {
        marginTop:"3px",
        width:"230px",
        height: "200px",
        maxHeight:"350px",
        border:"2px dashed hotpink",
        borderRadius:"10px",
        overflowY:"auto",
        margin:'0',
        listStyle:'none'
    }

    //action to perform when user drops a userCard
    function onUserCard_Drop(data){
        data = JSON.parse(data.user_card);//parse data to 
        setCreatnGroupList((prev)=>{
            for(let item of [...prev]) {
                console.log(item, 'data -> ', data)
            }          
            return [...prev,data]
        });
    }

    function GroupRenderer(){        
        return creatnGroupList.map((item,index) =>{
            return <GroupMember key = {index}  id = {item.id} uname = {item.uname}/>
        })
    }

    return (
        <div className="ProfileBody-Body-left top-center-content">
                <span>My Friends</span>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" 
                    value={srchUserInput} 
                    placeholder="Search user here" 
                    onChange={handle_users_onChange}/>
                </div>         
                <button style={{
                        margin:'5px',
                        background:'none',
                        width:"50%",
                        height:"7%"
                    }}> {<FaPlusCircle/>} Group </button>

                <Droppable types={['user_card']} onDrop = {onUserCard_Drop} >
                    <div style = {createGroup_Form}>
                      {GroupRenderer()}
                    </div>
                 </Droppable>                
            </div>
    )
}

export default ProfileBodyLeft
