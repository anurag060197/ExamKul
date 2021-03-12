import React from 'react';
import "./styles.css"

const Images = () => {
    return (
        <>
            <div className="img1">
                <img className="pic" src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="slide1" />
            </div>
            <div className="img2">
                <img className="pic" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" alt="slide2" />
            </div>
            <div className="img3">
                <img className="pic" src="https://thumbs.dreamstime.com/b/flat-lay-composition-mouse-keyboard-phrase-online-exam-white-wooden-table-178226763.jpg" alt="slide3" />
            </div>
            <div className="img4">
                <img className="pic" src="https://thumbs.dreamstime.com/b/student-passing-online-exam-home-student-passing-online-exam-home-closeup-181815769.jpg" alt="slide4" />
            </div>        



            {/* <Carousel pause="false" >
                <Carousel.Item>
                    <img className="d-block w-100 h-100" src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />
                    <Carousel.Caption>
                        +<h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://thumbs.dreamstime.com/b/flat-lay-composition-mouse-keyboard-phrase-online-exam-white-wooden-table-178226763.jpg" alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </>
    );
};

export default Images;