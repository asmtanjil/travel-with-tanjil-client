import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPinterest, FaTwitter } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className='bg-white py-4 px-4'>
      <h2 className='text-5xl text-black font-bold text-center my-16'>Reviews From Tourist</h2>

      <div className='r1 flex gap-10 items-center justify-center my-12'>
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/wRwhkr8/m2.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest'>Nadir on the go</h2>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum quos sit maiores officia, in suscipit consequatur. Voluptas in nemo delectus excepturi impedit est molestiae doloremque vero quasi, rerum quo qui dolorem provident voluptatum soluta dolorum harum corporis. Nam earum quisquam dolores inventore sed enim ex ab similique animi deleniti.</p>
          <p className='mt-4 flex gap-4'>
            <FaFacebook className='text-xl' />
            <FaInstagram className='text-xl' />
            <FaWhatsapp className='text-xl' />
            <FaPinterest className='text-xl' />
            <FaTwitter className='text-xl' />
          </p>
        </div>
      </div>


      <div className='r1 flex gap-10 items-center justify-center my-12'>
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/yqVsTSf/f1.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest'>Helen Smith</h2>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum quos sit maiores officia, in suscipit consequatur. Voluptas in nemo delectus excepturi impedit est molestiae doloremque vero quasi, rerum quo qui dolorem provident voluptatum soluta dolorum harum corporis. Nam earum quisquam dolores inventore sed enim ex ab similique animi deleniti.</p>
          <p className='mt-4 flex gap-4'>
            <FaFacebook className='text-xl' />
            <FaInstagram className='text-xl' />
            <FaWhatsapp className='text-xl' />
            <FaPinterest className='text-xl' />
            <FaTwitter className='text-xl' />
          </p>
        </div>
      </div>


      <div className='r1 flex gap-10 items-center justify-center my-12'>
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/SX5mWG2/m1.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest'>Harry Potter</h2>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum quos sit maiores officia, in suscipit consequatur. Voluptas in nemo delectus excepturi impedit est molestiae doloremque vero quasi, rerum quo qui dolorem provident voluptatum soluta dolorum harum corporis. Nam earum quisquam dolores inventore sed enim ex ab similique animi deleniti.</p>
          <p className='mt-4 flex gap-4'>
            <FaFacebook className='text-xl' />
            <FaInstagram className='text-xl' />
            <FaWhatsapp className='text-xl' />
            <FaPinterest className='text-xl' />
            <FaTwitter className='text-xl' />
          </p>
        </div>
      </div>


      <div className='r1 flex gap-10 items-center justify-center my-12'>
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/xjcRHCf/f2.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest'>Angel Jolly</h2>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum quos sit maiores officia, in suscipit consequatur. Voluptas in nemo delectus excepturi impedit est molestiae doloremque vero quasi, rerum quo qui dolorem provident voluptatum soluta dolorum harum corporis. Nam earum quisquam dolores inventore sed enim ex ab similique animi deleniti.</p>
          <p className='mt-4 flex gap-4'>
            <FaFacebook className='text-xl' />
            <FaInstagram className='text-xl' />
            <FaWhatsapp className='text-xl' />
            <FaPinterest className='text-xl' />
            <FaTwitter className='text-xl' />
          </p>
        </div>
      </div>

    </div>
  );
};

export default Reviews;