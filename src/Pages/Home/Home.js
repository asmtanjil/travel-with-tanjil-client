import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSections from './HomeSections';
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
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
        {
          services?.length && services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <p className='text-center mt-12 mb-20'><button className='btn btn-primary text-white'><Link to='/services'>See All Services</Link></button></p>
      <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/tXTqxnB/couple.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Travel With Tanjil</h1>
              <p className="mb-5">I am providing you some real amazing services. <br />
                You can book air tickets, book hotel, take travel packages through my website. More Features are coming soon.</p>
              <button className="btn btn-primary text-white"><Link to='/services'>Start Exploring</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HomeSections></HomeSections>
      </div>
    </div>
  );
};

export default Home;