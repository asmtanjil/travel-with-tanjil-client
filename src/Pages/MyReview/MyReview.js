import React, { useEffect, useState } from 'react';
import ReviewTable from './ReviewTable';

const MyReview = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div>
      <h2>All Reviews {reviews?.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                reviews?.length && reviews.map(review => <ReviewTable
                  key={review._id}
                  review={review}
                ></ReviewTable>)
              }
            </>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyReview;