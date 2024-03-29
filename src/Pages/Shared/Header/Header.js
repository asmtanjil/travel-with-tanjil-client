import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import logo from '../../../assests/logo.png'
import toast from 'react-hot-toast';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.success('You have just logged out buddy')
        navigate('/')
      })
      .catch()
  }

  const navMenu = <>
    <li className='mx-2 font-semibold'><Link to='/'>Home</Link></li>
    <li className='mx-2 font-semibold'><Link to='/Services'>Services</Link></li>
    <li className='mx-2 font-semibold'><Link to='/blog'>Blog</Link></li>
    {
      user?.email ?
        <>
          <li className='mx-2 font-semibold'><Link to='/myReview'>My Review</Link></li>
          <li className='mx-2 font-semibold'><Link to='/addService'>Add Services</Link></li>
          <li className='mx- font-semibold'><button onClick={handleLogOut}>Logout</button></li>
        </>
        :
        <>
          <li className='mx-2 font-semibold'><Link to='/login'>Login</Link></li>
        </>
    }
  </>
  return (
    <div className="navbar bg-slate-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img style={{ width: 30, height: 30 }} src={logo} alt="" />
          <span className='mx-2 text-2xl'>Travel With Tanjil</span> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Header;