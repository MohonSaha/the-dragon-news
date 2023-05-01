import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {

    const news = useLoaderData();
    console.log(news);
    const {title, details, category_id, image_url, } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        
                        <Button variant="danger">
                        <FaArrowLeft className='me-2'></FaArrowLeft>
                        All news in this cagegory</Button></Link>
                </Card.Body>
            </Card>

            <EditorsInsights> 3 </EditorsInsights>
        </div>
    );
};

export default News;