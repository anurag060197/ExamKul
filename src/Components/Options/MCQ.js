import React, {useState} from 'react';

const MCQ = () => {
  const [inputArr, setInputArr] = useState([]);
  const renderOptions = (event)=>{
      let copiedInputArr = [<span key="span" style={{marginLeft : "5rem"}}>MCQ : </span>, <input key={1} type="text" placeholder="Option 1"/>];
      let tempVar = 0;
      switch(event.target.value){
          case "2": tempVar = 2;
            break; 
          case "3": tempVar = 3;
            break; 
          case "4": tempVar = 4;
            break; 
          case "5": tempVar = 5;
            break; 
          case "6": tempVar = 6;
            break; 
      }
      for(let i = 2 ; i <= tempVar ; i++){
        if(tempVar !== 4){
          if(i !== 4){
            copiedInputArr = [
              ...copiedInputArr,
              <input key={i} type="text" placeholder={"Option "+i} style={{marginLeft : "2rem"}} />    
            ];
          }else{
            copiedInputArr = [
              ...copiedInputArr,
              <br key='br1'/>, <br key='br2'/>,
              <input key={i} type="text" placeholder={"Option "+i} style={{marginLeft : "26.4rem"}} />    
            ];
          }
        }
        else{
          if(i !== 3){
            copiedInputArr = [
              ...copiedInputArr,
              <input key={i} type="text" placeholder={"Option "+i} style={{marginLeft : "2rem"}} />    
            ];
          }else{
            copiedInputArr = [
              ...copiedInputArr,
              <br key='br1'/>, <br key='br2'/>,
              <input key={i} type="text" placeholder={"Option "+i} style={{marginLeft : "26.4rem"}} />    
            ];
          }
        }
      }
      setInputArr(copiedInputArr);
  }

    return (
      <>
        <span> No. Of Options : </span>
        <select defaultValue={'DEFAULT'} onChange={renderOptions}>
            <option value="DEFAULT" disabled>Choose Options</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        
        {inputArr}          
        
        {/* <span style={{marginLeft : "4.7rem"}}>MCQ : </span>
        <input type="text" placeholder="Option 1"/>  
        <input type="text" placeholder="Option 2" style={{marginLeft : "2rem"}} />
        <input type="text" placeholder="Option 3" style={{marginLeft : "2rem"}} /><br></br><br></br>
        <input type="text" placeholder="Option 4" style={{marginLeft : "24.8rem"}} />  
        <input type="text" placeholder="Option 5" style={{marginLeft : "2rem"}} /> 
        <input type="text" placeholder="Option 6" style={{marginLeft : "2rem"}} />  */}
      </>
    );
};

export default MCQ;