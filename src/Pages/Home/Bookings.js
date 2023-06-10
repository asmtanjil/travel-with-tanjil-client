import React from 'react';

const Bookings = () => {
  return (
    <div className='bg-indigo-50 py-4 pb-16'>
      <h2 className='text-5xl font-bold text-center text-black my-16'>Booking Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-2'>


        <div className=''>
          <p className='flex justify-center items-center px-8 text-justify text-slate-500'>Our responsibilities are limited to making the booking in line with your instructions. We do not accept responsibility for any information about the accommodation that we pass on to you in good faith. However, in the event that we are found liable to you on any basis whatsoever, our maximum liability to you is limited to the total cost of your booking (or the appropriate proportion of this if not everyone on the booking is affected). We do not exclude or limit any liability for death or personal injury that arises as a result of our negligence or that of any of our employees whilst acting in the course of their employment.

            The booking information that you provide to us will be passed on only to the relevant Suppliers or other persons necessary for the provision of your accommodation. The information may therefore be provided to public authorities such as customs or immigration if required by them, or as required by law. This applies to any sensitive information that you give to us such as details of any disabilities, or dietary and religious requirements. Certain information may also be passed on to security or credit checking companies. In making this booking, you consent to this information being passed on to the relevant persons.

          </p>
          <img src={"https://i.ibb.co/FXRGnVn/booking.jpg"} style={{ width: '100%' }} className='pl-2 pt-16' alt="" />
        </div>



        <div className=''>
          <img src={"https://i.ibb.co/vQLd03P/book.jpg"} style={{ width: '100%' }} className='pr-2' alt="" />
          <p className='flex justify-center items-center px-8 text-justify pt-8 text-slate-500'>
            These terms of business set out the basis on which we arrange the travel arrangements on your behalf with the third party suppliers.

            When you make a booking you guarantee that you have the authority to accept and do accept on behalf of your party these terms of business. This means that you are responsible for making all payments due, notifying us if any changes or cancellations are required and for receiving the confirmation and keeping your party informed.

            Any cancellation or amendment request must be sent to us in writing, by email, and will take effect on the day we receive this during the hours of 9am to 5pm. You must pay us the cancellation or amendment charge as stated in section Cancellation fees.

            With regard to changes and cancellations made by the Hotels, we will inform you as soon as reasonably possible. If we offer alternative accommodation or a refund, you will need to let us know your choice within the time frame we stipulate. If you fail to do so we will assume that you have accepted the change. In the extraordinary event of non-availability, due to overbooking or any other unforeseen circumstance of your booked hotel, a substitute hotel of the same rating will be offered.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookings;