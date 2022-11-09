import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import { Helmet } from 'react-helmet-async';

const MyReview = () => {
  const [reviews, setReviews] = useState([])
  const { user } = useContext(AuthContext)
  console.log(user)


  //Load All Reviews Data Based On Email Query
  useEffect(() => {
    if (user?.email) {
      fetch(`https://travel-with-tanjil-server.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }
  }, [user?.email]);

  /*
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            toast('Review Deleted Successfully')
            const remaining = reviews.filter(rev => rev._id !== id)
            setReviews(remaining)
          }
        })
        
    }
  */

  //Delete Review From DataBase
  const handleDeleteReview = id => {
    const proceed = window.confirm('Are you sure ypu want to delete your review?');

    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  }


  return (
    <div>
      <Helmet>
        <title>My Review - {`Travel With Tanjil`}</title>
      </Helmet>
      <h2>All Reviews {reviews?.length}</h2>

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
            {
              reviews?.length && reviews.map(review => <ReviewTable
                key={review._id}
                review={review}
                handleDeleteReview={handleDeleteReview}
              ></ReviewTable>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyReview;