import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Review from './Review';

const ServiceDetails = () => {
  const { image, details, title, _id, rating, price, reviews } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([])

  // loading specific reviews data from server
  useEffect(() => {
    fetch(` https://travel-with-tanjil-server.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setUserReviews(data))
      .catch(err => console.error(err))
  }, [_id])

  const handleReview = e => {
    e.preventDefault()
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const message = form.message.value;
    const reviewerImg = user?.photoURL;

    const reviews = {
      serviceName: title,
      service: _id,
      reviewerName: name,
      email,
      message,
      reviewerImg
    }

    fetch('https://travel-with-tanjil-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Review Posted to MyReview SuccessFully..!!')
          form.reset()
        }
      })
  }

  return (
    <PhotoProvider>
      <Helmet>
        <title>ServiceDetails - {`Travel With Tanjil`}</title>
      </Helmet>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
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

        <div className='mr-4'>
          <h2 className='text-2xl font-bold my-4 text-center'>Reviews From Users</h2>

          <div>
            <div className='p-4 border-2 mb-4'>
              <div className='flex justify-start gap-4'>
                <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev1.img} alt="" />
                <p className='font-semibold'>{reviews.rev1.name}</p>
              </div>
              <p className='my-2'>{reviews.rev1.message}</p>
            </div>

            <div className='p-4 border-2 mb-4'>
              <div className='flex justify-start gap-4'>
                <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev2.img} alt="" />
                <p className='font-semibold'>{reviews.rev2.name}</p>
              </div>
              <p className='my-2'>{reviews.rev2.message}</p>
            </div>

            <div className='p-4 border-2 mb-4'>
              <div className='flex justify-start gap-4'>
                <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev3.img} alt="" />
                <p className='font-semibold'>{reviews.rev3.name}</p>
              </div>
              <p className='my-2'>{reviews.rev3.message}</p>
            </div>

            <div className='p-4 border-2 mb-4'>
              <div className='flex justify-start gap-4'>
                <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev4.img} alt="" />
                <p className='font-semibold'>{reviews.rev4.name}</p>
              </div>
              <p className='my-2'>{reviews.rev4.message}</p>
            </div>

            <div>
              {
                userReviews.map(rev => <Review
                  key={rev._id}
                  rev={rev}
                ></Review>)
              }
            </div>
          </div>

          {
            user?.email ?
              <div>
                <form onSubmit={handleReview} className="form-control">
                  <textarea name='message' className="textarea textarea-bordered w-full h-40" placeholder="Write Your Reviews"></textarea>
                  <input className='btn btn-primary my-2 text-white' type="submit" value="Post Your Review" />
                </form>
              </div>
              :
              <p className='text-3xl font-bold text-center my-4'>Please <Link to='/login' className='font-semibold text-amber-500'>Login</Link> to Post Your Review</p>
          }

        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceDetails;