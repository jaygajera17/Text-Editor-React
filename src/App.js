import './App.css';
import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Speech from './components/Speech';


let name="jay";
function App() {

 
  return (
    <>
   
       <Navbar title="Text"/>
     <center>  <h2>Text Editor</h2></center>
            {/* <About /> */}
           <TextForm/>
           {/* <Speech/> */}
           
          
     {/* <Alert Alert={Alert}/> */}
     {/* <About/> */}
     <strong>  <h5 style={{color: "red"}}> Made by <a style={{color: "blue"}} href="https://jaygajera17.github.io/Jay_Gajera_17/">Jay Gajera</a></h5></strong> 
   <strong>Visitors:- <img src="https://hitwebcounter.com/counter/counter.php?page=7999209&style=0006&nbdigits=5&type=ip&initCount=30" title="Free Counter" Alt="web counter"   border="0" /></strong>
   </>
  );
}

export default App;


Navbar.defaultProps = 
{
  title: 'default'
};