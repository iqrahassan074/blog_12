// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";
// import Image from 'next/image';

// interface BlogCardProps {
//   post: {
//     id: string;
//     title: string;
//     description: string;
//     date: string;
//     imageUrl: string;
//   };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card className={`p-4 ${isDarkBackground ? 'bg-green-500 text-black' : 'bg-green-500 text-black'} font-semibold text-xl rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
//       <div className="w-full h-80 sm:h-96 md:h-[30rem] relative">
//         <Image
//           src={post.imageUrl}
//           alt={post.title}
//           className="w-full h-full object-cover rounded-t-lg"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>

//       <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>

//       <div className="flex flex-col items-center mt-4">
//         <p className={`text-lg mb-2 ${isDarkBackground ? 'text-green-100' : 'text-green-100'}`}>
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>

//         <a
//           href={`/posts/${post.id}`}
//           className="inline-block text-sm py-3 px-8 sm:px-16 rounded-full bg-gradient-to-r from-green-700 via-lime-300 to-green-700 text-green-800 font-semibold hover:bg-gradient-to-l hover:text-black transition-all duration-300"
//         >
//           Read More
//         </a>
//       </div>

      
//       <CardContent className="text-center mt-4">
//         <p className="text-sm sm:text-base">{post.description}</p>
//       </CardContent>
//     </Card>
//   );
// }

// "use client";


// import React, { useState } from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";
// import Image from 'next/image';

// interface BlogCardProps {
//   post: {
//     id: string;
//     title: string;
//     description: string;
//     date: string;
//     imageUrl: string;
//   };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   const [showDescription, setShowDescription] = useState(false);

//   const handleToggle = () => {
//     setShowDescription((prev) => !prev);
//   };

//   return (
//     <Card className={`p-4 ${isDarkBackground ? 'bg-black text-black' : 'bg-black text-black'} font-semibold text-xl rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
//       <div className="w-full h-80 sm:h-96 md:h-[30rem] relative">
//         <Image
//           src={post.imageUrl}
//           alt={post.title}
//           className="w-full h-full object-cover rounded-t-lg"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>

//       <div className="flex flex-col items-center mt-4">
//         <p className={`text-lg mb-2 ${isDarkBackground ? 'text-green-100' : 'text-green-100'}`}>
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>

//         <button
//           onClick={handleToggle}
//           className="inline-block text-sm py-3 px-8 sm:px-16 rounded-full bg-gradient-to-r from-green-700 via-lime-300 to-green-700 text-green-800 font-semibold hover:bg-gradient-to-l hover:text-black transition-all duration-300"
//         >
//           {showDescription ? 'Show Less' : 'Read More'}
//         </button>

//         {/* Show description under the button ONLY when toggled */}
//         {showDescription && (
//           <CardContent className="text-center mt-4">
//             <p className="text-sm sm:text-base">{post.description}</p>
//           </CardContent>
//         )}
//       </div>
//     </Card>
//   );
// }



"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    ImportantDetails: string;
    youtubeUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggle = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-black text-green-100' : 'bg-black text-green-100'} font-semibold text-xl rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
      <div className="w-full h-80 sm:h-96 md:h-[30rem] relative">
        <Image
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-lg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>

      <div className="flex flex-col items-center mt-4">
        <p className="text-md mb-1">📅 {new Date(post.date).toLocaleDateString()}</p>
        <p className="text-sm italic text-center mb-3">{post.ImportantDetails}</p>

        <a
          href={post.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 text-sm py-2 px-6 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition"
        >
          ▶ Watch Trailer
        </a>

        <button
          onClick={handleToggle}
          className="text-sm py-2 px-6 rounded-full bg-gradient-to-r from-green-700 via-lime-300 to-green-700 text-green-900 font-semibold hover:bg-gradient-to-l hover:text-black transition-all duration-300"
        >
          {showDescription ? 'Show Less' : 'Read More'}
        </button>

        {showDescription && (
          <CardContent className="text-center mt-4">
            <p className="text-sm sm:text-base">{post.description}</p>
          </CardContent>
        )}
      </div>
    </Card>
  );
}
