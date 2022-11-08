import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const { image, details, title, rating, price, reviews } = useLoaderData();
  console.log(reviews)
  const { user } = useContext(AuthContext)

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
          <h2 className='text-2xl font-bold m-2 text-center'>Reviews From Users</h2>
          {reviews?.rev &&
            <>
              <p>{reviews.rev.name}</p>
              <img src={reviews.rev.img} alt="" />
              <p>{reviews.rev.message}</p>
              <p>rating</p>
            </>
          }

          {
            user?.email ?
              <div>
                <form className="form-control mr-4">
                  <textarea name='review' className="textarea textarea-bordered w-full h-40" placeholder="Write Your Reviews"></textarea>
                  <input className='btn btn-primary my-2 text-white' type="submit" value="Post Your Review" />
                </form>
              </div>
              :
              <p className='text-xl'>Please <Link to='/login' className='font-semibold text-amber-500'>Login</Link> to Post Your Review</p>
          }

        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceDetails;