import React from 'react';
import errorpic from '../../images/404.png';

const NotFound = () => {
    return (
       
             <div>
            <img className="w-25" src={errorpic} alt="" />
            <h1>Oops! Page Not Found</h1>
            <h3>It seems that page you are looking for no longer exists!</h3>
        </div>
       
    );
};

export default NotFound;