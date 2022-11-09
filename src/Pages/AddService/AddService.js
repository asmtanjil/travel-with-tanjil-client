import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
  const { user } = useContext(AuthContext)


  const handleAddService = e => {
    e.preventDefault()
    const form = e.target;
    const email = user?.email;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const details = form.details.value;
    const rating = '4.5'

    const serviceDetail = {
      email,
      title,
      image,
      price,
      details,
      rating
    }

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceDetail)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Service Added Successfully!')
          form.reset()
        }
      })
  }
  return (
    <div>
      <h1 className='text-3xl text-slate-500 text-center font-bold my-8'>Enter Your Desired Service</h1>
      <form onSubmit={handleAddService}>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Service Name</span>
          </label>
          <input type="text" name='title' placeholder="Service Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Approx Price</span>
          </label>
          <input type="text" name='price' placeholder="Enter Your Estimated Price" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Add Image URL</span>
          </label>
          <input type="text" name='image' placeholder="Enter Photo URL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Write Your Service Details</span>
          </label>
          <textarea name='details' className="textarea textarea-bordered w-full h-40" placeholder="Add Details About Service" required></textarea>
        </div>

        <input className='btn btn-primary my-2 text-white' type="submit" value="Post Your Desired Service" />

      </form>
    </div>
  );
};

export default AddService;