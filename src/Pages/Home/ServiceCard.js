import React from 'react';

const ServiceCard = ({ service }) => {
  const { title, image, price, details } = service;
  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-base-100 shadow-xl">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='font-semibold text-amber-500 text-xl'>Price: BDT {price}</p>
        <p className='text-justify'>
          {
            details.length > 100 ?
              <>{details.slice(0, 100) + '...'}</>
              :
              <>{details}</>
          }
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;