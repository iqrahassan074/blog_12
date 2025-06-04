import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: 'The Lord of the Rings: The Fellowship of the Ring (2001)',
      description:
        'The journey begins as Frodo sets off to destroy the One Ring, joined by a fellowship of heroes from across Middle-earth.',
      date: 'December 19, 2001 (USA)',
      ImportantDetails: 'Nominated for 13 Academy Awards and won 4. Grossed over $897 million worldwide.',
      imageUrl: '/images/lol.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
    },
    {
      id: '2',
      title: 'The Lord of the Rings: The Two Towers (2002)',
      description:
        'Frodo continues his journey as war breaks out across Middle-earth. The fellowship is tested and new alliances are formed.',
      date: 'December 18, 2002 (USA)',
      ImportantDetails: 'Won 2 Academy Awards. Introduced Gollum as a central character.',
      imageUrl: '/images/lol2.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=LbfMDwc4azU',
    },
    {
      id: '3',
      title: 'The Lord of the Rings: The Return of the King (2003)',
      description:
        'The final battle for Middle-earth begins. Frodo nears Mount Doom to destroy the ring, while Aragorn claims his destiny.',
      date: 'December 17, 2003 (USA)',
      ImportantDetails: 'Won all 11 Academy Awards it was nominated for. Box office: $1.1 billion+.',
      imageUrl: '/images/lol3.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=r5X-hFf6Bwo',
    },
    {
      id: '4',
      title: 'The Hobbit: An Unexpected Journey (2012)',
      description:
        'Bilbo Baggins is swept into an epic quest by Gandalf and a group of dwarves to reclaim their homeland from Smaug the dragon.',
      date: 'December 14, 2012 (USA)',
      ImportantDetails: 'First film in the Hobbit trilogy. Box office: $1.017 billion worldwide.',
      imageUrl: '/images/lop.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=SDnYMbYB-nU',
    },
    {
      id: '5',
      title: 'The Hobbit: The Desolation of Smaug (2013)',
      description:
        'Bilbo and the dwarves continue their journey, facing giant spiders, elves, and the terrifying dragon Smaug.',
      date: 'December 13, 2013 (USA)',
      ImportantDetails: 'Known for its cliffhanger ending. Earned over $958 million worldwide.',
      imageUrl: '/images/lol5.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=OPVWy1tFXuc',
    },
    {
      id: '6',
      title: 'The Hobbit: The Battle of the Five Armies (2014)',
      description:
        'The epic conclusion as armies clash, and Bilbo must decide where he stands in the fate of Middle-earth.',
      date: 'December 17, 2014 (USA)',
      ImportantDetails: 'Concludes the Hobbit trilogy. Earned $962 million at the box office.',
      imageUrl: '/images/lol6.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=iVAgTiBrrDA',
    },
  ];

  return (
    <div className="bg-black min-h-screen pb-10">
      <h1 className="text-4xl font-extrabold text-center pt-10 text-emerald-800 animate-color-change">
        🌿 The Lord of the Rings Universe 🌿
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="bg-emerald-300 text-gray-900 rounded-xl shadow-lg hover:shadow-green-600 transform hover:scale-105 transition duration-300 fade-in p-5"
          >
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
