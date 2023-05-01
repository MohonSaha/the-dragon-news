import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-secondary my-5 rounded py-3'>
            <h3 className='px-3'>Q-Zone</h3>
            <div className='text-center'>
                <img className='mb-4' src={qZone1} alt="" />
                <img className='mb-4' src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;