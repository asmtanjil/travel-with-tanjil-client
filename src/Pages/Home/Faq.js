import React from 'react';

const Faq = () => {
  return (
    <div className='pb-16 px-8 bg-orange-50'>
      <h2 className="text-5xl text-center font-bold text-black uppercase py-16">Frequently asked questions</h2>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          Do you have to be rich to travel the world?
        </div>
        <div className="collapse-content">
          <p className='mb-4'>
            The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead. Know the best time to book a flight: 57 days in advance for domestic flights, 117 for international. Then again, you could just make traveling the world your 9-to-5.
          </p>
        </div>
      </div>



      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What are some things airline pilots won’t tell you?
        </div>
        <div className="collapse-content">
          <p>
            There’s no better Bible of in-flight secrets than Air Babylon, a rollicking romp through 24 hours at an airport compiling anonymous tell-alls from a raft of staff. One sample tidbit: Aviation law decrees that after an onboard death (more common than you’d imagine), planes must land at the nearest airport. No airline wants to pay fines for being delayed, so no one is officially declared dead on board until the plane is landing at its destination.
          </p>
        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What are the most beautiful beaches in the world?
        </div>
        <div className="collapse-content">
          <p>
            Antigua may claim to have 365 beaches, one each for every day of the year, but other strips of sand rival the Caribbean island for sheer beauty (we’ll take quality over quantity any time). Here are some suggestions, from an overlooked island in the Philippines to a beach made up of jet black sand in Hawaii.
          </p>
        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          If I visit your country, what’s the one meal I shouldn’t miss?
        </div>
        <div className="collapse-content">
          <p>
            It’s the same answer everywhere: breakfast. No meal is more distinctive or diverse. While sandwiches for lunch might be a global go-to, breakfast is still gloriously localized, whether you're eating bird’s nest–like pancakes filled with spicy curry in Sri Lanka or flaky, just-baked croissants in France. In Russia, however, it’s probably best just to skip it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;