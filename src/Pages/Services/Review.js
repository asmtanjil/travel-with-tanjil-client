import React from 'react';

const Review = ({ usrReview }) => {
  const { reviewerName, reviewerImg, message, } = usrReview
  return (
    <div className='p-4 border-2 mb-4'>
      <div className='flex justify-start gap-4'>
        <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviewerImg} alt="" />
        <p className='font-semibold'>{reviewerName}</p>
      </div>
      <p className='my-4'>{message}</p>
      <p className='text-gray-500 my-2'>Rating: 4.5</p>
    </div>
  );
};

export default Review;