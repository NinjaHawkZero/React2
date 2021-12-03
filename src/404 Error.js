import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <p>
                This is not a registered page route.
                <Link exact to='/'>Go to Home Page</Link>
            </p>
        </div>
    )
}

export default Error;