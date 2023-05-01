import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg1.png';

const RightNav = () => {
    return (
        <div>
            <h3>Login with</h3>
            <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle />  Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub />  Login with Github</Button>

            <div className='mt-5'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='text-primary'/> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='text-primary'/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='text-danger'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;