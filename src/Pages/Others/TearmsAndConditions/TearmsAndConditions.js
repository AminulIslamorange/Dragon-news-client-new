import React from 'react';
import { Link } from 'react-router-dom';

const TearmsAndConditions = () => {
    return (
        <div>
            <h3>Here is our tearms and conditions</h3>
            <p>Go Back to: <Link to='/register'>registration</Link></p>
        </div>
    );
};

export default TearmsAndConditions;