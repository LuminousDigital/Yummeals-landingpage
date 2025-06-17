// import Image from "next/image";

// const Free = () => {
//   return (
//     <section
      
//     >
     
//       <div className="overflow-hidden whitespace-nowrap bg-[#64961A] p-6 text-lg">
//         <div className="flex animate-scroll">
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">Sarah Jessica : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">Sarah Jessica : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale :<span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : Free Delivery</p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//           <p className="text-white mx-2 border-l border-white pl-4">James Adewale : <span className="text-sm">Free Delivery</span> </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Free;

'use client';

// import Image from 'next/image';
import { useMemo } from 'react';

// Sample data for recipients (replace with your actual data source)
const recipients = [
  { name: 'James Adewale', status: 'Free Delivery' },
  { name: 'Sarah Jessica', status: 'Free Delivery' },
  { name: 'Sarah Jane', status: 'Free Delivery' },
  { name: 'Jane Doe', status: 'Free Delivery' },
  { name: 'John Smith', status: 'Free Delivery' },
];

const Free = () => {
  // Duplicate recipients to ensure seamless looping
  const doubledRecipients = useMemo(() => [...recipients, ...recipients], []);

  return (
    <section className="bg-[#64961A] py-6 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-slide whitespace-nowrap">
          {doubledRecipients.map((recipient, index) => (
            <div
              key={`${recipient.name}-${index}`}
              className="inline-flex items-center mx-4 border-l border-white pl-4 text-white text-lg"
            >
              <span className="font-medium">{recipient.name}</span>
              <span className="text-sm ml-2">{recipient.status}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-slide {
          display: inline-flex;
          animation: slide 20s linear infinite;
        }
        @keyframes slide {
        100% {
            transform: translateX(-50%);
          }
          0% {
            transform: translateX(0);
          }
          
        }
        /* Pause animation on hover */
        .animate-slide:hover {
          animation-play-state: paused;
        }
        /* Ensure the container is wide enough */
        .relative {
          overflow: hidden;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default Free;