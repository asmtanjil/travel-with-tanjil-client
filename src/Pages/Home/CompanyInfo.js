import React from 'react';

const CompanyInfo = () => {
  return (
    <div className='bg-orange-50 py-4 pb-16'>
      <h2 className='text-5xl font-bold text-center text-black my-16'>Agency's Information</h2>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <img src={"https://i.ibb.co/HKYhMxM/company.jpg"} style={{ width: '100%' }} className='pl-2' alt="" />
        <p className='flex justify-center items-center px-8 text-justify text-slate-500'>The tour operator for your trip is World Synergy Travel SRL, tour operator license #869, issued by the Ministry of Tourism in Romania, business address: Papazoglu Dumitru St. No. 60, Sector 3, 031204, Bucharest Romania.

          Booking a tour with the aforementioned tour operator constitutes your agreement to the Terms & Conditions below.

          Please take time to read carefully the following terms and conditions for your own information and protection. It is your responsibility to ensure that you have read and understood the various terms associated with your contract before placing any bookings.</p>
      </div>
    </div>
  );
};

export default CompanyInfo;