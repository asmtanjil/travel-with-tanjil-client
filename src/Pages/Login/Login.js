import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
// import { FaBeer } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext)
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation()

  const googleProvider = new GoogleAuthProvider()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset();
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))
  }

  //Sign In With Google
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
  }


  return (
    <div className="hero w-full my-20">
      <div className="hero-content">
        <div className="card w-full min-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>

            <div className="form-control mt-2">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='text-center my-2'>Are you New Here? Please <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
            <button className='btn btn-success' onClick={handleGoogleSignIn}>
              Login With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;