import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        updateUserProfile(name)
        form.reset();
      })
      .catch(err => console.error(err))
  }

  //grid md:grid-cols-2 flex-col lg:flex-row
  return (
    <div className="hero w-full my-20">
      <div className="hero-content ">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>

          <form onSubmit={handleSignUp} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <p className='text-center'>Already Have an Account? Please <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;