"use client"
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface DropdownItem {
  id: string;
  title: string;
  content: string[];
}

const ReferralCampaign: React.FC = () => {
  const router = useRouter();
  const dropdownItems: DropdownItem[] = [
    {
      id: 'grand-prize',
      title: 'Grand Prize: FREE FOOD for a WHOLE YEAR (Worth ₦1.5M+)',
      content: [
        '1. Sign up on Yummeals and get your unique referral link.',
        '2. Refer at least 5 friends to qualify for the grand prize draw.',
        '3. Every extra referral = 1 additional entry into the draw.',
        '4. The more referrals you make, the better your chances of winning!',
      ],
    },
    {
      id: 'refer-earn',
      title: 'Refer & Earn: Win ₦50K, ₦25K, ₦100K, ₦50K Food Vouchers etc.',
      content: [
        '1. Sign up and start referring friends.',
        '2. Earn cash rewards or food vouchers for every successful referral.',
        '3. Higher referral counts increase your prize tier (₦50K, ₦25K, ₦100K, etc.).',
        '4. Check your dashboard for your earnings!',
      ],
    },
    {
      id: 'daily-giveaways',
      title: 'Daily Giveaways & Instant Wins',
      content: [
        '1. Participate daily for a chance to win instant prizes.',
        '2. Complete tasks to unlock giveaways.',
        '3. Winners announced daily - check your email!',
        '4. More activity = more chances to win.',
      ],
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Memoize toggleDropdown for better performance
  const toggleDropdown = useCallback((id: string) => {
    setActiveDropdown(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className='relative'>
      <div className="flex items-center justify-center mb-10 bg-white lg:mb-40 xl:mb-50 md:mb-20">
        <div className="flex flex-col justify-between w-full p-4 bg-white rounded-lg md:flex-row max-w-8xl lg:p-20">
          <div className="flex flex-col items-center mb-6 md:w-1/3 md:mt-12 xl:items-start xl:ml-30 md:mb-0">
            <h2 className="mb-5 text-3xl font-bold text-gray-800 lg:text-4xl lg:mt-5">How To Enter</h2>
            <button onClick={() => router.push("https://app.yummealsapp.com")} className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded transition-colors cursor-pointer ">
              Join Now
            </button>
          </div>
          <div className="md:w-2/3 ">
            {dropdownItems.map((item) => (
              <div key={item.id} className="mb-8">
                <div
                  className="bg-[#000000] text-white px-4 py-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleDropdown(item.id)}
                >
                  <span className='text-[#F25B0A] text-xs xl:text-xl font-bold'>{item.title}</span>
                  <span>
                    {activeDropdown === item.id ? (
                      <Image
                        src="/up.svg"
                        width={16}
                        height={16}
                        alt=""
                        className='w-4 h-4 mr-1 transition-transform duration-200'
                      />
                    ) : (
                      <Image
                        src="/down.svg"
                        width={16}
                        height={16}
                        alt=""
                        className='w-4 h-4 mr-1 transition-transform duration-200'
                      />
                    )}
                  </span>
                </div>
                <div
                  className={`bg-white p-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    activeDropdown === item.id ? 'max-h-96 opacity-100 block' : 'max-h-0 opacity-0 hidden'
                  }`}
                >
                  {item.content.map((line, index) => (
                    <p key={index} className="mb-2 text-sm font-bold text-black xl:text-lg">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full -bottom-35 xl:-bottom-140 md:-bottom-50 lg:-bottom-120'>
        <Image
          src="/groupfood.svg"
          alt="Trophy"
          width={3000}
          height={50}
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default ReferralCampaign;