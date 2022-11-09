import React from 'react';

const ReviewTable = ({ review, handleDeleteReview }) => {
  const { reviewerName, email, reviewerImg, message, serviceName } = review;

  return (
    <tr>
      <th>
        <button onClick={handleDeleteReview} className='btn btn-xs'>Delete</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={reviewerImg} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
      </td>
      <td className='break-normal'>{message}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default ReviewTable;