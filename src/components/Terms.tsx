"use client"
import React from 'react';
// import Image from 'next/image';


interface Term {
  id: number;
  text: string;
}

const Terms: React.FC = () => {
  const terms: Term[] = [
    { id: 1, text: 'Participants must be registered users of Yummeals.' },
    { id: 2, text: 'A minimum of 5 successful referrals is required to qualify for the grand prize draw.' },
    { id: 3, text: 'A successful referral means the referred user signs up and completes their first order.' },
    { id: 4, text: 'Yummeals reserves the right to disqualify fraudulent or duplicate referrals.' },
    { id: 5, text: 'All rewards and prizes are non-transferable and subject to verification.' },
    { id: 6, text: 'Promo ends 30 days from launch. Winners will be contacted via the details linked to their Yummeals account.' },
    { id: 7, text: 'Only users within Yummeals\' current delivery areas are eligible to win daily, weekly, and grand prizes.' },
  ];

  return (
    <div className=" flex justify-center items-center ">
      <div className="w-full h-full bg-white overflow-hidden">
        
        <div className="relative h-120 bg-cover bg-center" style={{ backgroundImage: "url('/edmond.svg')" }}>
        
          <div className="absolute inset-0 bg-black/55 z-10" />
       
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
            <h1 className="lg:text-6xl text-4xl text-white font-bold">Ready to Win Big?</h1>
            <p className="lg:text-6xl text-4xl mt-4 font-bold text-white">Start Referring Now</p>
            <button className="mt-15 bg-[#F25B0A]  sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer">
              Join Now
            </button>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="bg-[#F25B0A] text-white px-15 py-6">
          <h2 className="text-lg font-bold mb-4 md:text-2xl ">Terms and Conditions</h2>
          <ul className="list-decimal font-bold list-inside space-y-3 text-sm">
            {terms.map((term) => (
              <li key={term.id} className="text-white">
                {term.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;