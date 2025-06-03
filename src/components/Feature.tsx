import React from 'react';
import Image from 'next/image';

type Actor = {
  name: string;
  role: string;
  image: string;
};

const actors: Actor[] = [
  { name: "Elijah Wood", role: "Frodo Baggins", image: "/images/act.jpg" },
  { name: "Ian McKellen", role: "Gandalf", image: "/images/act2.webp" },
  { name: "Viggo Mortensen", role: "Aragorn", image: "/images/act3.webp" },
  { name: "Orlando Bloom", role: "Legolas", image: "/images/act4.avif" },
  { name: "Sean Astin", role: "Samwise Gamgee", image: "/images/act5.webp" },
  { name: "Cate Blanchett", role: "Galadriel", image: "/images/act6.avif" },
  { name: "Andy Serkis", role: "Gollum", image: "/images/act7.webp" },
  { name: "Christopher Lee", role: "Saruman", image: "/images/act8.webp" },
  { name: "Martin Freeman", role: "Bilbo Baggins (Hobbit)", image: "/images/act9.webp" },
  { name: "Richard Armitage", role: "Thorin Oakenshield", image: "/images/act10.jpg" },
  { name: "Lee Pace", role: "Thranduil", image: "/images/act11.webp" },
  { name: "Hugo Weaving", role: "Elrond", image: "/images/act12.webp" },
  { name: "Karl Urban", role: "Éomer", image: "/images/at13.jpg" },
  { name: "Miranda Otto", role: "Éowyn", image: "/images/act114.jpg" },
  { name: "John Rhys-Davies", role: "Gimli", image: "/images/act15.jpg" },
  { name: "Dominic Monaghan", role: "Merry", image: "/images/act16.webp" },
];

const Feature = () => {
  return (
    <div className="bg-black p-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg animate-color-change">
          🍀 Cast of Middle-Earth 🍀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {actors.map((actor, index) => (
            <div
              key={index}
              className="bg-emerald-300 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={actor.image}
                  alt={actor.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{actor.name}</h2>
              <p className="text-lg text-gray-600">{actor.role}</p>

              {/* <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-lime-700 hover:to-lime-500 transform transition duration-300">
                {actor.name} as {actor.role}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
