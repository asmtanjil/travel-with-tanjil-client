import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSections from './HomeSections';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet-async';
import GridLoader from "react-spinners/GridLoader";
import Privacy from './Privacy';
import CompanyInfo from './CompanyInfo';
import Terms from './Terms';
import Bookings from './Bookings';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Offers from './Offers';
import WhyMe from './WhyMe';
import Faq from './Faq';
import JoinUs from './JoinUs';


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
    }, 1500)
  }, [])

  return (
    <div className='md:mx-0'>
      <Helmet>
        <title>Home - {`Travel With Tanjil`}</title>
      </Helmet>
      {
        loading ?
          <GridLoader color={`#50DBB4`} loading={loading} size={50} style={{ margin: ' auto' }} />
          :
          <>
            <div className='bg-slate-50 '>
              <h2 className='text-5xl text-center font-bold text-black pt-20'>My Tourism Packages</h2>
              <div className='px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20'>
                {
                  services && services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>)
                }
              </div>
              <p className='text-center py-20'><button className='btn btn-primary text-white'><Link to='/services'>See All Services</Link></button></p>
            </div>
            <div className='bg-slate-200'>
              <h2 className='text-5xl py-16 font-bold text-black text-center'>About Me</h2>
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
            <div className='bg-slate-100'>
              <HomeSections></HomeSections>
              <CompanyInfo></CompanyInfo>
              <Bookings></Bookings>
              <Reviews></Reviews>
              <Offers></Offers>
              <WhyMe></WhyMe>
              <ContactUs></ContactUs>
              <Faq></Faq>
              <JoinUs></JoinUs>
              <Terms></Terms>
              <Privacy></Privacy>
            </div>
          </>
      }
    </div>
  );
};

export default Home;