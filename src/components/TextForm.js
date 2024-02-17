
import React,{useState} from 'react'


export default function TextForm(props){
    const handleupclick =()=>{
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleonchange=(event)=>{
        console.log("On change")
        setText(event.target.value);
    }
    const[text,setText]=useState("Enter the text here")
    return(
        <div>

            <h1>{props.heading}</h1>
            
<div class="mb-3">
  <textarea class="form-control" value={text} id="myBox" rows="8" onChange={handleonchange}></textarea>
  <button type="button" class="btn btn-primary" onClick={handleupclick}>Convert to uppercae</button>
</div>
        </div>
        
    )
}