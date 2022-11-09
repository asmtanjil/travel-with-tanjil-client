import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const { image, details, title, _id, rating, price, reviews } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user)

  const handleReview = e => {
    e.preventDefault()
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const message = form.message.value;
    const reviewerImg = user?.photoURL;

    const reviewDetail = {
      serviceName: title,
      serviceId: _id,
      reviewerName: name,
      email,
      message,
      reviewerImg
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewDetail)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          alert('Review Posted')
          form.reset()
        }
      })

  }

  return (
    <PhotoProvider>
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

          <div className='p-4 border-2 mb-4'>
            <div className='flex justify-start gap-4'>
              <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev1.img} alt="" />
              <p className='font-semibold'>{reviews.rev1.name}</p>
            </div>
            <p className='my-4'>{reviews.rev1.message}</p>
            <p className='text-gray-500 my-2'>Rating: {reviews.rev1.rating}</p>
          </div>

          <div className='p-4 border-2 mb-4'>
            <div className='flex justify-start gap-4'>
              <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev2.img} alt="" />
              <p className='font-semibold'>{reviews.rev2.name}</p>
            </div>
            <p className='my-4'>{reviews.rev2.message}</p>
            <p className='text-gray-500 my-2'>Rating: {reviews.rev2.rating}</p>
          </div>

          <div className='p-4 border-2 mb-4'>
            <div className='flex justify-start gap-4'>
              <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev3.img} alt="" />
              <p className='font-semibold'>{reviews.rev3.name}</p>
            </div>
            <p className='my-4'>{reviews.rev3.message}</p>
            <p className='text-gray-500 my-2'>Rating: {reviews.rev3.rating}</p>
          </div>

          <div className='p-4 border-2 mb-4'>
            <div className='flex justify-start gap-4'>
              <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviews.rev4.img} alt="" />
              <p className='font-semibold'>{reviews.rev4.name}</p>
            </div>
            <p className='my-4'>{reviews.rev4.message}</p>
            <p className='text-gray-500 my-2'>Rating: {reviews.rev4.rating}</p>
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
              <p className='text-xl'>Please <Link to='/login' className='font-semibold text-amber-500'>Login</Link> to Post Your Review</p>
          }

        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceDetails;