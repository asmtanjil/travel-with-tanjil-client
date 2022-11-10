import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import { Helmet } from 'react-helmet-async';
import GridLoader from "react-spinners/GridLoader";

const MyReview = () => {
  const [reviews, setReviews] = useState([])
  const { user, logOut } = useContext(AuthContext)

  //Loading For My Review Page
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  //Load All Reviews Data Based On Email Query
  useEffect(() => {
    if (user?.email) {
      fetch(`https://travel-with-tanjil-server.vercel.app/reviews?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('travel-token')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            return logOut()
          }
          return res.json()
        })
        .then(data => setReviews(data))
    }
  }, [user?.email, logOut]);


  //Delete Review From DataBase
  const handleDeleteReview = id => {
    const proceed = window.confirm('Are you sure ypu want to delete your review?');
    if (proceed) {
      fetch(`https://travel-with-tanjil-server.vercel.app/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            const remaining = reviews.filter(rev => rev._id !== id)
            setReviews(remaining)
            toast.success('Review Deleted Successfully')
          }
        })
    }
  }

  return (
    <div>
      <Helmet>
        <title>My Review - {`Travel With Tanjil`}</title>
      </Helmet>
      {
        loading ?
          <GridLoader color={`#50DBB4`} loading={loading} size={50} />
          :
          <>

            {
              reviews.length ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-12">
                  <>
                    {
                      reviews?.length && reviews.map(review => <ReviewTable
                        key={review._id}
                        review={review}
                        handleDeleteReview={() => handleDeleteReview(review._id)}
                      ></ReviewTable>)
                    }
                  </>
                </div>
                :
                <div className='mx-auto my-60 text-center'>
                  <h1 className='mr-4 text-6xl text-indigo-600 font-bold'>No Reviews Found</h1>
                </div>
            }

          </>
      }
    </div >
  );
};

export default MyReview;