import React from 'react';

const Offers = () => {
  return (
    <div className='bg-orange-50 py-4 pb-6 px-8'>
      <h2 className='text-5xl text-black font-bold text-center my-16'>What Do I Offer?</h2>


      <div className='flex gap-20 justify-center items-center my-8'>
        <div>
          <h3 className='text-xl my-2'>Customized Experiences</h3>
          <p className='text-slate-500 text-justify'>We created Knowing Cuba for the traveler who seeks unique experiences. The traveler who wants to return home with unique stories, something different to show, an experience no one else has tried. Let us know the kind of Cuban experience you seek and we'll plan it for you!</p>
        </div>

        <div>
          <h3 className='text-xl my-2'>Leaders</h3>
          <p className='text-slate-500 text-justify'>With over 20 years of experience receiving travelers from all over the world, our name is recognized all over Cuba. Whether you’re traveling alone, or with a group, our experienced team can help with every aspect of your trip, and will recommend the best options.</p>
        </div>

        <div>
          <h3 className='text-xl my-2'>24/7 Support</h3>
          <p className='text-slate-500 text-justify'>We know that when you are in a foreign country, things don’t always go as planned. Our local team in Havana is available to help with any emergency. Once you book a trip with us, you’ll have access to our 24/7 emergency number to make sure you travel worry-free.</p>
        </div>
      </div>

    </div>
  );
};

export default Offers;