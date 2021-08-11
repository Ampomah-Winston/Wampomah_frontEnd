import React , {useState,useEffect} from 'react';
import { BrowserRouter as Router, Link, Route,Switch,useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Signs from '../Signs/Signs'
import { Tween } from 'react-gsap';

function App(props) {
  let history = useHistory();
  console.log(props)
  const [title, setTitle] = useState('Login');
  function changeTitle(value){
    setTitle(value)    
  }
  const [location, setLocation] = useState('')
  function handlRedirection(location){
    setLocation(location);
  }
  useEffect(() => {
    if(location === 'success') {
      history.push('/Profile');
    }else{
      // alert('sorry you are not registered')
    }
  }, [location])
  
  return (
    <Tween to={{opacity: '1', rotation:'0'}} duration={1} ease="power1.in(1, 0.5)">
      <div className="app-body top-center-content"> 
        <Navbar act={title} changeAct={changeTitle}/>
        <Signs act={title} changeUserData = {props.changeUserData} changeAuth = {props.changeAuth} changeLocation = {handlRedirection} />
     </div>
    </Tween>
  );
}

export default App;
