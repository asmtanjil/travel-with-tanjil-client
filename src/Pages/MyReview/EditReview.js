import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const EditReview = () => {
  const { service } = useLoaderData()
  const navigate = useNavigate()

  const handleEdit = e => {
    e.preventDefault()
    const message = e.target.message.value
    const review = {
      message,
      service: service
    }

    fetch(` https://travel-with-tanjil-server.vercel.app/reviews/${service}`, {
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
      <div className='max-w-screen-xl mx-auto w-4/6'>
        <h2>Edit Your Form</h2>
        <form onSubmit={handleEdit}>
          <textarea name='message' className="textarea textarea-bordered w-full h-40" placeholder="Write Your Reviews"></textarea>
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default EditReview;