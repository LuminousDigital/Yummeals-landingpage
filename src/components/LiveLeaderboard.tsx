'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LeaderboardEntry {
  id: number;
  name: string;
  location: string;
  referrals: number;
  imageUrl: string;
}

const LiveLeaderboard: React.FC = () => {

  const router = useRouter();
  const [isWeekly, setIsWeekly] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const leaderboardData: LeaderboardEntry[] = [
    { id: 1, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/woman.svg' },
    { id: 2, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/man.svg' },
    { id: 3, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/man.svg' },
    { id: 4, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/man.svg' },
    { id: 5, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/man.svg' },
    { id: 6, name: 'Suraj Khandwal', location: 'Jaipur, Rajasthan', referrals: 200, imageUrl: '/man.svg' },
  ];

  // Simulate a larger leaderboard
  const allLeaderboardData: LeaderboardEntry[] = [
    ...leaderboardData,
    { id: 7, name: 'Sarah Jessica', location: 'Lagos, Nigeria', referrals: 180, imageUrl: '/woman.svg' },
    { id: 8, name: 'Michael Smith', location: 'Abuja, Nigeria', referrals: 170, imageUrl: '/man.svg' },
    { id: 9, name: 'Aisha Bello', location: 'Kano, Nigeria', referrals: 160, imageUrl: '/woman.svg' },
    { id: 10, name: 'John Doe', location: 'Ibadan, Nigeria', referrals: 150, imageUrl: '/man.svg' },
    { id: 11, name: 'Chinedu Okafor', location: 'Enugu, Nigeria', referrals: 140, imageUrl: '/man.svg' },
    { id: 12, name: 'Fatima Musa', location: 'Kaduna, Nigeria', referrals: 130, imageUrl: '/woman.svg' },
    { id: 13, name: 'Emeka Obi', location: 'Port Harcourt, Nigeria', referrals: 120, imageUrl: '/man.svg' },
    { id: 14, name: 'Ngozi Nwosu', location: 'Owerri, Nigeria', referrals: 110, imageUrl: '/woman.svg' },
    { id: 15, name: 'Bola Tinubu', location: 'Abeokuta, Nigeria', referrals: 100, imageUrl: '/man.svg' },
  ];

  const displayedData = showAll ? allLeaderboardData : leaderboardData;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-6xl mt-6">
        <h2 className="mb-2 text-3xl font-extrabold text-center text-gray-800">Live Leaderboard</h2>
        <p className="text-[20px] leading-[140%] tracking-[-0.02em] text-center mb-6 text-[#000000]">See who&apos;s climbing to the top each day!</p>
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`font-bold ${isWeekly ? 'text-black' : 'text-black'}`}>Weekly Winners</span>
          <button
            className={`relative w-12 h-6 flex items-center bg-[#64961A] rounded-full p-1 transition-colors duration-300 focus:outline-none ${isWeekly ? 'bg-[#64961A]' : 'bg-gray-300 cursor-pointer' }`}
            onClick={() => setIsWeekly(!isWeekly)}
            aria-label="Toggle leaderboard type"
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isWeekly ? '' : 'translate-x-6'}`}
            />
          </button>
          <span className={`font-bold ${!isWeekly ? 'text-black' : 'text-black'}`}>Overall Winners</span>
        </div>
        {/* Leaderboard Cards */}
        <div className="space-y-4">
          {displayedData.map((entry, index) => (
            <div
              key={entry.id}
              className="flex items-center  justify-between bg-[#64961A] px-4 py-1 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                {/* Rank Icon */}
                <span className="relative flex items-center justify-center w-8 h-8">
                  {index === 0 ? (
                   <Image src="/crown_1.svg" fill alt="Crown" className="w-8 h-8" />
                    // <img src="/crown_1.svg" alt="Crown" className="w-8 h-8" />
                  ) : (
                    <Image src="/crown_2.svg" fill alt="Crown" className="w-8 h-8"/>
                    // <img src="/crown_2.svg" alt="Crown" className="w-8 h-8" />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">
                    {index + 1}
                  </span>
                </span>
                {/* Profile Image */}
                <Image src={entry.imageUrl} width={12} height={12} alt={`${entry.name}'s profile`} className="object-cover w-12 h-12 rounded-full"/>

                {/* <img
                  src={entry.imageUrl}
                  alt={`${entry.name}'s profile`}
                  className="object-cover w-12 h-12 rounded-full"
                /> */}
                {/* Name & Location */}
                <div>
                  <div className="text-xs font-semibold text-white lg:text-sm">{entry.name}</div>
                  <div className="text-xs text-green-100 lg:text-sm">{entry.location}</div>
                </div>
              </div>
              {/* Referrals */}
              <div className="flex items-center gap-2 px-4 py-2">
                <Image src="/cup.svg" width={10} height={10} alt="Trophy" className="w-10 h-10"/>
                {/* <img src="/cup.svg" alt="Trophy" className="w-10 h-10" /> */}
                <div className='flex flex-col items-center justify-center'>
                   <span className="text-sm font-bold text-white">{entry.referrals}</span>
                <span className="mt-2 text-xs text-green-100">Referrals</span>

                </div>
               
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6 mb-6">
            {!showAll && (
              <button
                className="  bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer "
                onClick={() => setShowAll(true)}
              >
                See All
              </button>
            )}
          </div>
          <div className="flex justify-center mt-6 mb-6">
            {showAll && (
              <button
                className="  bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer"
                onClick={() => router.push("https://app.yummealsapp.com")}
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLeaderboard;