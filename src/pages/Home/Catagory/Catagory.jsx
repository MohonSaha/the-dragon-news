import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Catagory = () => {

    const { id } = useParams();
    const catagoryNews = useLoaderData()


    return (
        <div>
            {id ? <h4>This category news: {catagoryNews.length} </h4> : <h4>The News Dragon Home</h4>}
            <div className='mt-3'>
                {
                    catagoryNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagory;