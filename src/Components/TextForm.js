import React,{useState} from 'react'
import PropTypes from 'prop-types'
//import '.Components/app.css';
//import styles from'./Components/App.css';

export default function TextForm(props){

const[tt,sett] = useState(''); //tt is our input variable, sett is our new variable(help to swap value of new input to the tt 
                                                //useState is a hook function
  
  const handleUpClick =()=> {                  //function used to make capslock..it had given as input to the onclick button
    let newText=tt.toLocaleUpperCase();        //newText is intermediate variable between tt and sett(its scope is within handleupclick)
    sett(newText)
  }

  const handleDownClick =()=> {                //function used to lower case the input string.. it had given as input onclick button
    let newText=tt.toLocaleLowerCase();
    sett(newText)
  }
  const Clear =()=> {                //function used to lower case the input string.. it had given as input onclick button
    let newText=tt.toLocaleLowerCase();
    sett("")
  }
  const Copy =()=> {                //function used to lower case the input string.. it had given as input onclick button
    var t=document.getElementById("input");
    t.select();
   navigator.clipboard.writeText(t.value);
  }

  const ES =()=>{
    let newText=tt.split(/[ ]+/);
    sett(newText.join(" "))
  }

  const c = ()=> {
    sett(tt.charAt(0).toUpperCase() + tt.slice(1).toLowerCase());
  };

  // const v = ()=> {
  //   let i;
  //   let k;
  //   let q;
  //   let t;
  //   for(i=0;i<tt.length;i+=2){
  //   //let newText=tt.split(/[ ]+/);
    
  //   k=tt.charAt(i).toUpperCase();
  //   //newText[i+1]=tt.charAt(i+1).toLowerCase();
  //   q=tt.charAt(i+1).toUpperCase();
  //   t[i]=tt.join(k,q);
  //   console.log
  //   sett(t);
  // }
  
  // }



  const handleOnChange=(event)=>{              //use to copy the input,without this we can't able to asign input to any variable..it is  called even
                                               //event will taget fuction withich reutrns value so event.target.value,even we can't typr without it
    sett(event.target.value);}  
    if(props.mode==='light'){                
    document.body.style.backgroundColor="#82DBD8";
    }
    else{
      document.body.style.backgroundColor='#D8CCA3';
    }
  return (<> 

    
<div className={` bg-${props.mode==='light'?'e':'q'} style={height="100px"} m h-100 height="100%"style={{height:100%}}`}>
<div className={`container bg-${props.mode==='light'?'e':'q'} style{height="100px"} m h-100 height="100%"style={{height:100%}}`}>
    
    <h3 className='col-sm-3 mb-0  border-bottom'style={{color: "grey"}}><br />{props.H}</h3>
    <p className='mb-3'>Don't worry!, Now you dont have to keep your <img src="https://www.pngitem.com/pimgs/m/75-759935_eyes-png-clipartsgram-com-big-cartoon-eyes-png.png" width="30" 
     height="15" alt="" /> (eyes) on CapsLock</p>

      <div class={`form-floating mb-3 ${props.mode==='light'?'e':'c'}`}>
        
          <input type="text"className={`form-control bg-${props.mode==='light'?'m':'p'}`}  value={tt} onChange={handleOnChange} id="input"/> {/*value is always present in the working space and its value is "tt"..we have to supeimpose new value of "tt" by or with using of "sett" */}
          
          
          <button className="btn btn-outline-dark mt-3" onClick={Clear}>Clear</button>
            <button className="btn btn-outline-dark mt-3 mx-3" onClick={Copy}>Copy</button><br />
            <button className="btn btn-outline-light mt-3" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-outline-danger mt-3 mx-3" onClick={handleDownClick}>Convert To Lowercase</button>
            
            <button className="btn btn-outline-success mt-3 " onClick={ES}>Remove Extra Spaces</button>
            <button className="btn btn-outline-primary mt-3 mx-3 " onClick={c}>Sentence</button>
            {/* <button className="btn btn-outline-info mt-3 mx-3 " onClick={v}>sEnTeNcE</button> */}
      
      <h3 className="mt-3 border-bottom col-sm-3"style={{color: "grey"}}>Text Summary</h3>
      <p className="mt-1">{tt.split(" ").length} words | {tt.length} charachter </p>
      <p className="">It will take {0.008*(tt.split(" ").length)}minutes to read  </p>
      <h3 className="mt-3 border-bottom col-sm-3 "style={{color: "grey"}}>Preview</h3>
      <p>{tt.length>0?tt:"Enter something to preview text"}</p>
      
      
      </div>

</div>
</div>

</>
  )
}
