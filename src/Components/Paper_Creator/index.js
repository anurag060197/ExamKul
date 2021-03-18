import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from "react-bootstrap";
import Question_Creator from "../Question_Creator";
import "./styles.css"

const Paper_Creator = () => {
    const [question, setQuestion] = useState([]);
    const [count, setCount] = useState(3);
    const [image, setImg] = useState([<img key={0} id="bg" src="https://wallpapercave.com/wp/NcDdW2X.jpg" alt="bg"/>]);
    
    const handlePlusBtn = ()=>{
        setQuestion([...question, <Question_Creator key={question.length} />]);
        if((question.length+1) === count){   
            setCount((prev)=>prev+5);
            setImg([...image, <img key={image.length} id="bg" src="https://wallpapercave.com/wp/NcDdW2X.jpg" alt="bg"/>]);
        }
    }

    const handleMinusBtn = ()=>{
        const copiedQuestion = [...question];
        copiedQuestion.pop();
        setQuestion(copiedQuestion);
        if(count >= question.length+5 && count > 3){
            const copiedImg = [...image];
            copiedImg.pop();
            setImg(copiedImg);
            setCount((prev)=>prev-5);
        }
    }

    const handleSubmit = ()=>{
        alert("Question Paper Submitted Successfully !")
    }

    const reset = ()=>{
        setQuestion([]);
        setCount(3);
        setImg([<img key={0} id="bg" src="https://wallpapercave.com/wp/NcDdW2X.jpg" alt="bg"/>]);
    }
    return (
        <>
            <div>
                {image}                
            </div>
            
            <Container id="outer-container" >
                <span id="heading">Create Question Paper</span>
                <img id="reset" onClick={reset} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarGbeXmrCa8NQ4uXAxzGg6WcuQGnKHpE-wg&usqp=CAU"/><br></br>
                <div id="button">
                    <Button variant="outline-light"  onClick={handlePlusBtn}><b>+</b></Button>
                    <Button variant="outline-light" onClick={handleMinusBtn}><b>-</b></Button>
                </div><hr></hr>
                <div id="display">
                    <span id="span">Test Name : </span>
                    <input type="text" placeholder="paper name" />
                </div>
                {question.length != 0 ? <span style={{fontSize: "x-large"}}>Total Questions : {question.length}</span> : null}<br></br>
                {question}<br></br>
                <Button id="submit" variant="outline-light" onClick={handleSubmit}>Submit</Button><br/><br/>
            </Container>
        </>
    );
};

export default Paper_Creator;