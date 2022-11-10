import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({ review, handleDeleteReview }) => {
  const { reviewerName, _id, email, reviewerImg, message, serviceName } = review;

  return (
    <div className="card text-justify w-96 bg-base-100 shadow-xl p-4 my-4">
      <div className='flex gap-8 justify-center items-center'>
        <figure><img className="mask mask-circle" src={reviewerImg} alt="" style={{ width: 80, height: 80 }} /></figure>
        <div className='flex flex-col'>
          <p className='font-bold'>{reviewerName}</p>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <h2 className="my-4">{serviceName}</h2>
        <p><span className='font-semibold'>My Review: <br /> </span>{message}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDeleteReview} className='btn btn-xs'>Delete</button>
          <Link to={`/editReview/${_id}`}><button className='btn btn-xs'>Edit</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewTable;