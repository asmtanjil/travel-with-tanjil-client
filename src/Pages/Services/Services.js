import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;