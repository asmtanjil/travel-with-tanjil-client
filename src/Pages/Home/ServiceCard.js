import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, _id, image, price, details } = service;
  return (
    <PhotoProvider>
      <div className="card w-90 md:w-96 lg:w-100 bg-base-100 shadow-xl">
        <PhotoView src={image}>
          <figure><img src={image} alt="" /></figure>
        </PhotoView>
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
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn btn-primary text-white">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;