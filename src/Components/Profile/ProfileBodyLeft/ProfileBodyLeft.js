import React,{useState,useEffect,useRef } from 'react';
import { Droppable } from 'react-drag-and-drop';
import { FaSearch, FaPlusCircle, FaToggleOn, FaAd, FaCheckDouble, FaArrowDown, FaAngleDown, FaUsers, FaUser } from 'react-icons/fa';
import GroupMember from '../../GroupMember/GroupMember';
import Axios from 'axios';
import GroupChatObject from '../../ChatObjects/GroupChatObject';

function ProfileBodyLeft(props) {

    //set reference to group name input
    const inp_grp_name = useRef(null);

    const [srchUserInput, setSrchUserInput] = useState('');
    useEffect(() => {
             
    },[srchUserInput]);

    //handle search input type
    function handle_users_onChange (e) {
        setSrchUserInput(e.target.value);      
    }

    //a state for current running group creation
    const [creatnGroupList, setCreatnGroupList] = useState([])

    //groups i belong
    const [myGroups, setMyGroups] = useState([]);

     //set style for the droppable div
     const createGroup_Form = {
        marginTop:"3px",
        width:"200px",
        height: "150px",
        maxHeight:"350px",
        border:"2px solid hotpink",
        overflowY:"auto",
        margin:'0',
        listStyle:'none',
        padding:'5px',
        position:'relative'
    }

    //action to perform when user drops a userCard
    function onUserCard_Drop(data){
        data = JSON.parse(data.user_card);//parse data which is string to json obj
        console.log(creatnGroupList, data.id);        
        if(creatnGroupList.findIndex(e => e.id === data.id ) === -1){
            setCreatnGroupList((prev)=>{
                return [...prev,data]           
            });
        }else{
            alert('user already exist')
        }
    }

    // delete a single user from creatn new group 
    function handleDelFromList(e){
       let id = e.target.parentElement.attributes.userid.value;
       let index = creatnGroupList.filter(e=>e.id != id);
       setCreatnGroupList(index);
    }

    //render all items in creatnGroupList
    function GroupRenderer(){        
        return creatnGroupList.map((item) =>{
            return ( <GroupMember 
                key = {item.id}  
                id = {item.id} 
                uname = {item.fname} 
                handleDelFromList = {handleDelFromList}/>)
        })
    }

    const togGroupBtn_Style = {
        width:'80%',
        height: '5%',
        border:'none',
        marginBottom: '7px',
        marginTop: '7px'
    }
    //load my groups | db ops
    function load_groups(){
        Axios.post('http://localhost:5000/chatGroup/myGroups',{
            userID: props.userData.id
        }).then((res)=>{
            setMyGroups(res.data)
        })
    }

    useEffect(()=>{
        load_groups()
    },[])

//function to create group db ops
    function createGroup(e){
        Axios.post('http://localhost:5000/chatGroup/createGroup',{
            group_data:{
                 group_name : inp_grp_name.current.value,
                 group_owner: props.userData.id
            },           
            content : creatnGroupList
        }).then(res => {
            console.log(res)
            alert(`Group created successfully ${inp_grp_name.current.value}`)
        }).catch(reason => {
            alert('An error occured '+reason)
        });
        setTimeout(()=>{
            inp_grp_name.current.value= ''
        },800)
    }
    
    return (
        <div className="ProfileBody-Body-left top-center-content">
                 <div className="chat_collection">
                     <FaAngleDown/> Chats <FaUser/>
                 </div>
                    
                 <div className="group_chat_collection">
                 </div>

                <div className="chat_collection">
                     <FaAngleDown/> Group Chat <FaUsers/>
                 </div>

                 <div className="group_chat_collection top-center-content">
                    {myGroups.map((groupData)=>{
                        return <GroupChatObject 
                            key ={groupData.group_id} 
                            gname = {groupData.group_name}
                            gid ={groupData.group_id}/>
                    })}                    
                 </div>

                <div className ="center-content group-form " style={{margin:'10px auto'}}> 
                    <div className ="group-list-toggle" >
                      <FaPlusCircle/>
                    </div>
                    <input ref ={inp_grp_name} style ={{
                        height:'25px',
                        width: '80%',
                        outline:'none',
                        border:'none',
                        borderBottom:'0.7px solid khaki',
                        backgroundColor:'transparent',
                        textAlign:'left',
                        fontFamily:`'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`,
                        color:'khaki'
                    }} type = "text" placeholder="Enter new group"/>
                    <div 
                    onClick={createGroup}
                    className ="group-list-toggle" >
                      <FaCheckDouble/>
                    </div>
                </div>

                 <Droppable types={['user_card']} onDrop = {onUserCard_Drop} >
                    <div className="group-list" style = {createGroup_Form}>
                      {GroupRenderer()}                            
                    </div>                    
                 </Droppable> 
            </div>
    )
}
export default ProfileBodyLeft
