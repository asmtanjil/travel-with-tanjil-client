import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
  const { image, details, title, rating, price } = useLoaderData();

  return (
    <PhotoProvider>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 bg-base-200'>
        <div>
          <div className="hero min-h-screen m-2">
            <div className="hero-content flex-col">
              <PhotoView src={image}>
                <img src={image} className="rounded-lg shadow-2xl" alt='' />
              </PhotoView>

              <div>
                <h1 className="text-4xl font-bold py-4">{title}</h1>
                <p className='text-gray-500 text-justify'>{details}</p>
                <div className='flex justify-between items-center my-2'>
                  <p className='font-semibold text-amber-600 text-xl'>Price: BDT {price}</p>
                  <p className="font-semibold text-gray-500 text-xl">Rating: {rating}</p>
                </div>
                <button className="btn btn-primary">Grab It Now!</button>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceDetails;