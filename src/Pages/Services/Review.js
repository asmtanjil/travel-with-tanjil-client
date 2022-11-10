import React from 'react';

const Review = ({ rev }) => {
  const { message, reviewerImg, reviewerName } = rev;
  return (
    <div className='p-4 border-2 mb-4'>
      <div className='flex justify-start gap-4'>
        <img className='rounded-full' style={{ width: 40, height: 40 }} src={reviewerImg} alt="" />
        <p className='font-semibold'>{reviewerName}</p>
      </div>
      <p className='my-2'>{message}</p>
    </div>
  );
};

export default Review;