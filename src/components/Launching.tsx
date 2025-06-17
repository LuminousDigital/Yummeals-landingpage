'use client'
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const Launching: React.FC = () => {
  return (
    <div className="relative px-4 mb-4 text-center bg-white sm:px-6 md:px-8">
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto mt-6 sm:mt-6 md:mt-8 md:mb-10 xl:mt-15 lg:mb-80 xl:mb-7">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[4.0625rem] leading-tight text-center">
          Yummeals is launching <br /> with a bang!!!
        </h1>
        <p className="font-bold text-[#64961A] text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl xl:leading-[150%] xl:tracking-[0.1rem] mt-4 sm:mt-6 md:mt-8 lg:mt-10 leading-relaxed text-center">
          30 Days. Daily Wins. A Year of Free Food Up for Grabs! <br />
          We&apos;re giving away over ₦10 MILLION in daily food vouchers, gifts, and the ultimate grand prize — FREE FOOD for a WHOLE YEAR (worth over ₦1.2M)! <br /> + Weekly Rewards for Top Referrers.
        </p>
        <div className="mt-6 mb-8 xl:mb-12">
          <hr className="border-t-4 sm:border-t-6 md:border-t-7 border-[#F25B0A] w-3/4 sm:w-2/3 md:w-[60%] rounded mx-auto" />
        </div>
        <p className="font-bold text-[#1A0901] text-sm mb-8 sm:text-base md:text-lg lg:text-2xl xl:text-5xl leading-relaxed text-center">
          Join the celebration. Eat well. Win big.
        </p>
        <Link href="https://app.yummealsapp.com">
          <button className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Launching;
