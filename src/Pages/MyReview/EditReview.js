import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const EditReview = () => {
  const { _id } = useLoaderData()
  const navigate = useNavigate()

  const handleEdit = e => {
    e.preventDefault()
    const message = e.target.message.value
    const review = {
      message,
    }

    fetch(`https://travel-with-tanjil-server.vercel.app/reviews/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success('Review Added Successfully')
          navigate('/myReview')
        }
      })
  }
  return (
    <div className='my-8'>
      <Helmet>
        <title>Edit Review - {`Travel With Tanjil`}</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto w-4/6'>
        <h2 className='text-center text-3xl font-bold text-indigo-500 my-4'>Edit Your Review</h2>
        <form onSubmit={handleEdit}>
          <textarea name='message' className="textarea textarea-bordered w-full h-40" placeholder="Update Your Review"></textarea>
          <input className='btn btn-primary text-white' type="submit" value="Update Review" />
        </form>
      </div>
    </div>
  );
};

export default EditReview;