import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
              <div className="hero bg-base-200">
  <div className="hero-content">
   
    <div className="card bg-base-100 w-full  shadow-2xl">
        
      <form className="card-body">
      <h1 className="text-4xl font-bold">SignUp now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Or Phone</span>
          </label>
          <input type="text" placeholder="email / phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pin</span>
          </label>
          <input type="number" placeholder="Pin" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
         <p>Already Have an account ? please<Link className='btn btn-link'>Login</Link>  </p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;