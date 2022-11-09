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

      {
        reviews?.length ?
          <>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    {/* <th>Delete</th> */}
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
          </>
          :
          <div className='mx-auto my-72 text-center flex justify-center'>
            <h1 className='text-5xl text-violet-500 font-bold'>Reviews Not Found</h1>
          </div>
      }
    </div>
  );
};

export default MyReview;