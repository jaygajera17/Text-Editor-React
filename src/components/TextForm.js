import React, {useState} from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {
    const [text,setText]= useState('Enter text here');
    const [value, setValue] = React.useState("");
    const { speak } = useSpeechSynthesis();
    const handleUpclick = () =>

    {
        // console.log("uppercase  clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowclick = () =>

    {
        // console.log("uppercase  clicked" + text)
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClear = () =>

    {
        // console.log("uppercase  clicked" + text)
        let newtext ='';
        setText(newtext)
    }
    const handleOnChange = (event) =>
    {
        // console.log("on change");
        setText(event.target.value);
    }

    const handleTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    const handlereverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };
    const handlecopy = () =>
    {
        // console.log("on change");
        var text = document.getElementById("MyBox").value;
        async function copyTextToClipboard(text) {
            try {
              await navigator.clipboard.writeText(text);
              alert('Text copied to clipboard');
            } catch(err) {
              alert('Error in copying text: ', err);
            }
          }
        copyTextToClipboard(text);
    }

    const handleDuplicates = (e) => {
        let newText = text.split(' ').filter(function(item,i,allItems){
            return i === allItems.indexOf(item);
        }).join(' ');

        setText(newText)
    }
 const handleShuffle=()=>{
     let newText=text.split('').sort(function(){return 0.5-Math.random()}).join('');
     setText(newText);
 }
    const handleExtraSpaces = ()=>{
       let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        }

        // const handleBold = () => {
            
        //     let newText = text.style.fontWeight = 'bold';
        //     setText(newText);
        //   };
    return (
        <>
    <div className="container"> 
   <h1>{props.heading}</h1>

 <div className="form-group">
    <textarea className="form-control" value={text}  onChange={handleOnChange} id="MyBox" rows="8"></textarea>
  </div>
  <div className="row">
  <div className="col ">
      <div className="row">
  <button  className="btn btn-outline-primary" onClick={() => speak({ text: text })}>Speech 🔊 </button>
  </div>
  <div className="row my-2">
  <button className="btn btn-outline-primary mr-2" onClick={handleUpclick}>convert to uppercase &#8648;</button>
  <button className="btn btn-outline-primary mr-2" onClick={handleLowclick}>convert to lowercase &#8650;</button>
  </div>
  <div className="row my-2">
  <button className="btn btn-outline-primary mr-2" onClick={handleClear}>Clear ⛔</button>
  <button className="btn btn-outline-primary mr-2" onClick={handlecopy}>Copy text 📝</button>
  </div>
  <div className="row my-2">
  <button className="btn btn-outline-primary mr-2" onClick={handlereverse}>reverse text &#8633;</button>
  <button className="btn btn-outline-primary mr-2" onClick={handleTitleCase}>Capitalize &#8645;</button>
  <button className="btn btn-outline-primary mr-2" onClick={handleShuffle}>Shuffle &#8644;</button>

  </div>
  <div className="row my-2">
  <button className="btn btn-outline-primary mr-2" onClick={handleDuplicates}>Remove duplicate &#8655; </button>
  <button className="btn btn-outline-primary mr-2" onClick={handleExtraSpaces}>remove extra space &#10234;</button>
  </div>
  
  </div>
  </div>
  {/* <button className="btn btn-primary mx-1" onClick={handleBold}>bold</button> */}
</div>
<br></br>
<div className="container my-6">
    <center> <h3>Text Summary</h3><br></br>
     <strong><p>{text.split(" ").length}- words ,<br></br>{text.length}- characters , <br></br>
      {text.split(/[.?!]\s/).length} - sentences ,<br></br>
           {text.split(/\r\n|\r|\n/).length}-paragraph , <br></br>{text.replace(/ /g,"").length/text.split(" ").length} - average character per word
           </p></strong> 
           <br></br><br></br>
      <h2>preview</h2>
      <p>{text}</p></center>
</div>
</>
  )
}
