import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import GridLoader from "react-spinners/GridLoader";
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)

  //Loading For Register Page
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  //Create User
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        updateUserProfile(name, photoURL)
        toast.success('Tomar Account Created!')
        form.reset();
      })
      .catch(err => console.error(err))
  }
  return (
    <div className="w-75 md:w-2/5 lg:w-2/5 mx-auto my-20">
      <Helmet>
        <title>Sign Up - {`Travel With Tanjil`}</title>
      </Helmet>
      {
        loading ?
          <GridLoader color={`#50DBB4`} loading={loading} size={50} />
          :
          <>
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
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photoURL' placeholder="Enter Image URL" className="input input-bordered" />
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
          </>
      }
    </div>
  );
};

export default Register;