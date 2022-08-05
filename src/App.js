import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
function App() {
  
  const [Mode,s] = useState("light");
  const Tm = ()=>{ 
    if(Mode==="light"){
      s("dark");
      console.log(s);
      //document.body.style.backgroundColor='black';
    }
    if(Mode==="dark"){
      s("light");
      //document.body.style.backgroundColor='light';
      
    }
   }
  return (<>
        <Navbar T="PWW" H="Home" A="Feedback" mode={Mode} Toggle={Tm} />
        <TextForm H="Play With Words"mode={Mode} Toggle={Tm}/>
        
        
        
        
        </>
  
  );
}

export default App;
