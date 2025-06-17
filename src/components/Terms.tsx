"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
// import Image from 'next/image';


interface Term {
  id: number;
  text: string;
}

const Terms: React.FC = () => {
  const router = useRouter();
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
    <div className="flex items-center justify-center ">
      <div className="w-full h-full overflow-hidden bg-white">
        
        <div className="relative bg-center bg-cover h-120" style={{ backgroundImage: "url('/edmond.svg')" }}>
        
          <div className="absolute inset-0 z-10 bg-black/55" />
       
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white lg:text-6xl">Ready to Win Big?</h1>
            <p className="mt-4 text-4xl font-bold text-white lg:text-6xl">Start Referring Now</p>
            <button onClick={() => router.push("https://app.yummealsapp.com")} className="mt-15 bg-[#F25B0A]  sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer">
              Join Now
            </button>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="bg-[#F25B0A] text-white px-15 py-6">
          <h2 className="mb-4 text-lg font-bold md:text-2xl ">Terms and Conditions</h2>
          <ul className="space-y-3 text-sm font-bold list-decimal list-inside">
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