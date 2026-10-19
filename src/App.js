import {useState } from "react";
import Header from "./Components/Header";
import TextArea from "./Components/Textarea"

const App = ()=> {
  const[getCharacter , setCharacter] = useState(0);
  const[getWords , setWords] = useState(0);
  const [getFacebook , setFacebook] = useState(2200);
  const [getTwitter , setTwitter] = useState(280);
   const handelChange = (event)=> {
    
    const value = event.target.value;
    setTwitter(280 - value.length)
    setFacebook(2200 - value.length)
    setWords(value.length)
    setCharacter(value.split(" ").length -1)
  }
  
  
  return(
    <div>
      <Header/>
      <TextArea twitter = {getTwitter} facebook = {getFacebook} words = {getWords} character = {getCharacter} onChange = {handelChange}/>
    </div>
  )
};

export default App;