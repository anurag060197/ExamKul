import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav_bar from "../Nav_bar";
import Images from "../Images";
import "./styles.css"
const Home = () => {
    return (
        <>
            <Nav_bar />
            <Images />
            <Container style={{width: "20rem"}} className="custom" >
                <h3 id="head">Examiner</h3>
                <div id="btns">
                    <a style={{backgroundColor: "blue"}} href="create" className="btn">Create Paper</a><br></br>
                    <a style={{backgroundColor: "blue"}} href="show" className="btn">Show Paper</a>
                </div>
            </Container>
        </>
    );
};

export default Home;