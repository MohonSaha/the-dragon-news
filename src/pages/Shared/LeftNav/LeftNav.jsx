import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';

const LeftNav = () => {

    const [categories, setCatagories] = useState([])

    useEffect(() => {
        fetch('https://the-news-deagon-server-mohonsaha.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.error(error))
    }, [])




    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 mt-2'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>

            <EditorsInsights>
                1
            </EditorsInsights>
        </div>
    );
};

export default LeftNav;