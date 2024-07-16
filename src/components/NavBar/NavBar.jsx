import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
              <h2 className='text-4xl font-bold'>Welcome to MFS</h2>
          <div className='my-12 space-x-9'>
          <Link to='/' className='btn btn-secondary'>Home</Link>
          <Link to='/login' className='btn btn-primary'>Login</Link>
           <Link to='/signUp' className='btn btn-accent'>SignUp</Link>
          </div>
        </div>
    );
};

export default NavBar;