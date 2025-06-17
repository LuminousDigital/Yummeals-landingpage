import React from 'react';
import Image from 'next/image';

const Prizes: React.FC = () => {
  return (
    <div className="bg-orange-500 py-10 p-4">
      <div className='max-w-6xl mx-auto'>
        <h2 className="text-white text-3xl  font-bold xl:text-4xl lg:ml-16 mb-8">Prizes to be won</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-5xl mx-auto">
          
          {/* Weekly Leaderboard */}
          <div className="bg-white space-y-6 rounded-lg p-6 w-full sm:w-1/2 max-w-lg flex-1 flex flex-col min-h-[370px] max-h-[370px]">
            <Image
              src="/trophy.svg"
              alt="Trophy"
              width={50}
              height={50}
              className="object-cover "
            />
            <h3 className="font-bold text-xl xl:text-2xl mt-4 mb-4 ">Weekly Leaderboard</h3>
            <p className="text-lg font-bold ">1st prize - <span className="text-orange-500">500k and gift box</span></p>
            <p className="text-lg font-bold ">2nd prize - <span className="text-orange-500">200k and gift box</span></p>
            <p className="text-lg font-bold ">3rd prize - <span className="text-orange-500">100k and gift box</span></p>
            <p className="text-lg font-bold ">4th prize - <span className="text-orange-500">50k</span></p>
          </div>

          {/* All Time Leaderboard */}
          <div className="bg-white space-y-6 rounded-lg p-6 w-full sm:w-1/2 max-w-lg flex-1 flex flex-col min-h-[370px] max-h-[370px]">
            <Image
              src="/trophy.svg"
              alt="Trophy"
              width={50}
              height={50}
              className="object-cover "
            />
            <h3 className="font-bold text-xl xl:text-2xl  mb-4 ">All Time Leaderboard</h3>
            <p className="text-lg font-bold ">1st prize - <span className="text-orange-500">100k and gift box</span></p>
            <p className="text-lg font-bold ">2nd Prize - <span className="text-orange-500">20k voucher</span></p>
            <p className="text-lg font-bold ">3rd Prize - <span className="text-orange-500">20k voucher</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
