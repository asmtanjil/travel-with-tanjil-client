import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSections from './HomeSections';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet-async';
import GridLoader from "react-spinners/GridLoader";


const Home = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://travel-with-tanjil-server.vercel.app/homeServices')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  //Loading For Home Page
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className='mx-4'>
      <Helmet>
        <title>Home - {`Travel With Tanjil`}</title>
      </Helmet>
      {
        loading ?
          <GridLoader color={`#50DBB4`} loading={loading} size={50} />
          :
          <>
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
          </>
      }
    </div>
  );
};

export default Home;