import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment'; import { Button, Container} from 'react-bootstrap';
;
import Marquee from "react-fast-marquee";

const Header = () => {



    return (
        <Container className=''>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p> <small>Journalism without fear or favour</small> </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div style={{ backgroundColor: '#F3F3F3' }} className='d-flex p-2 rounded mb-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='' speed={70}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components.
                </Marquee>
            </div>

            


        </Container>
    );
};

export default Header;