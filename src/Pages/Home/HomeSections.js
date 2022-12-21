import React from 'react';

const HomeSections = () => {
  return (
    <div className='my-4'>

      <h2 className='text-6xl text-slate-700 font-bold text-center my-20'>Features <span className='text-6xl font-bold text-black'>&</span> <span className='text-amber-500'>Albums</span></h2>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>

        <div>
          <h2 className='text-4xl font-bold text-slate-500 mb-6'>Upcoming Features</h2>
          <div className='gird gap-12 grid-cols-1 md:grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
              <div className="card-body">
                <h2 className="card-title text-amber-400 font-semibold text-2xl">Manali Family Package</h2>
                <p className='text-xl text-gray-400 text-justify'>The budget trip to Manali will look after your taste of the region’s famous tourist attractions and its friendliness will hold you to visit Manali again. Manali and its mountains will never cease to fascinate you, whether you are on a solo quest for inner peace and adventure backpacking trip with your besties, or a honeymoon trip with your beloved.Treat yourself to Manali Family packages. Whether you're looking for a Family package to relax and indulge, special holidays in Manali with friends and family, a trip to your favourite chillout spot or a new adventure, you've come to the right place. Relive your life again and add a little spice to it with exciting Manali tour packages.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
              <div className="card-body">
                <h2 className="card-title text-amber-400 font-semibold text-2xl">Maldives Tourism Packages</h2>
                <p className='text-xl text-gray-400 text-justify'>PRIVATE TOUR: See the best of the Indian Ocean. Discover grand temples, intricate ruins and a rich, intriguing culture combined with beautiful gardens and leafy wildlife parks in spectacular Sri Lanka. Then, breathtaking beaches and idyllic pleasures are waiting to be experienced in stunning Maldives. CORPORATE TOUR, FAMILY TOUR, GROUP TOUR, HONEYMOON TOUR, PACKAGE TOUR are coming very soon. Then, breathtaking beaches and idyllic pleasures are waiting to be experienced in stunning Maldives. CORPORATE TOUR, FAMILY TOUR, GROUP TOUR, HONEYMOON TOUR, PACKAGE TOUR are coming very soon</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
              <div className="card-body">
                <h2 className="card-title text-amber-400 font-semibold text-2xl">Explore Indonesia with Me</h2>
                <p className='text-xl text-gray-400 text-justify'>Bali is unique, Bali is unmatched
                  There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation. Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons. Whatever your age, background, budget or interest, there is something great for everyone to explore and discover. And that’s a promise. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
              <div className="card-body">
                <h2 className="card-title text-amber-400 font-semibold text-2xl">Cox's Bazar Dhamaka For Students</h2>
                <p className='text-xl text-gray-400 text-justify'>It will be near impossible to find anyone who hasn't heard of Cox's Bazar. It is one of Bangladesh's most lucrative travel destinations. Not only in our country but Cox's Bazar has also expanded its popularity beyond the borders of Bangladesh as one of the longest sea beaches in the world.It will be near impossible to find anyone who hasn't heard of Cox's Bazar.It will be near impossible to find anyone who hasn't heard of Cox's Bazar. I am announcing a package for students who cant not travel easily. It will be great for young generation.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-4xl font-bold text-slate-500 mb-4'>Photography About My Journey</h2>
          <div className='gird gap-12 grid-cols-1 md:grid-cols-2'>
            <img src={'https://i.ibb.co/2vJR7Fm/adda.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
            <img src={'https://i.ibb.co/nDSbqft/nepal1.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
            <img src={'https://i.ibb.co/2WhYhmb/kashmir.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
            <img src={'https://i.ibb.co/CM1pxDF/peak.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
            <img src={'https://i.ibb.co/gZW5Th5/trip.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
            <img src={'https://i.ibb.co/RgpRcH5/darjeeling.jpg'} alt="" style={{ width: '100%' }} className='my-4 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSections;