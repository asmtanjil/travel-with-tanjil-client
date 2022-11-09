import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [services, setServices] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://travel-with-tanjil-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <Helmet>
        <title>Services - {`Travel With Tanjil`}</title>
      </Helmet>
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
        {
          services?.length && services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;