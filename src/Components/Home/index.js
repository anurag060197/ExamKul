import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav_bar from "../Nav_bar";
import Images from "../Images";
import "./styles.css"
const Home = () => {
    return (
        <>
            <Nav_bar />
            {/* <Images /> */}
            <Container className="custom" >
                <h3 style={{marginLeft: "7rem"}}>Examiner</h3>
                <Button>shghjg</Button>
            </Container>
        </>
    );
};

export default Home;