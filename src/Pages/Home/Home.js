import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Home = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/homeServices')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='mx-4'>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <p className='text-center mb-20'><button className='btn btn-primary'><Link to='/services'>See All Services</Link></button></p>
      <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>2 MeaningFull Section</h3>
      </div>
    </div>
  );
};

export default Home;