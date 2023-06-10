import React from 'react';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {

  return (
    <div id='contact' className='py-16 px-8 bg-green-50'>
      <h1 className='text-center text-5xl text-black font-bold my-16'>Contact Me</h1>
      <div className="text-center text-xl my-8 flex flex-col md:flex-row gap-4 items-center justify-around">
        <div className='flex gap-2 items-center'>
          <MdEmail></MdEmail>
          <p>asm.tanjil@gmail.com</p>
        </div>

        <div className='flex gap-2 items-center'>
          <BsFillTelephoneFill></BsFillTelephoneFill>
          <p>+880-1767676799</p>
        </div>

        <div className='flex gap-2 items-center'>
          <BsLinkedin></BsLinkedin>
          <p><a href="https://www.linkedin.com/in/asmtanjil/">LinkedIn</a></p>
        </div>
      </div>
      <form>
        <div className='grid grid-cols-1 gap-6'>
          <input placeholder='Your Name' className="input input-bordered w-full" type="text" name="user_name" />

          <input placeholder='Your Email' className="input input-bordered w-full" type="email" name="user_email" />
          <textarea placeholder='Message' className="textarea h-[250px] w-full textarea-bordered" name="message" />
          <input className='btn btn-primary w-full capitalize' type="submit" value="Send An Email" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;