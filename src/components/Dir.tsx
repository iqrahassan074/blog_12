import Image from 'next/image';

const directors = [
  { name: "Peter Jackson", role: "Director (LOTR Trilogy & The Hobbit Trilogy)", image: "/images/dir1.webp" },
  { name: "Fran Walsh", role: "Co-writer & Producer", image: "/images/dir2.webp" },
  { name: "Philippa Boyens", role: "Co-writer", image: "/images/dir3.webp" },
  { name: "Andrew Lesnie", role: "Cinematographer (LOTR & The Hobbit)", image: "/images/dir4.jpg" }
];

const Dir = () => {
  return (
    <div className="bg-black p-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg animate-color-change">
          🍃 Creators of Middle-Earth 🍃
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-emerald-300 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{director.name}</h2>
              <p className="text-lg text-gray-600">{director.role}</p>

              {/* <button className="mt-4 w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-lime-600 hover:to-green-400 transform transition duration-300">
                  {director.name} - {director.role}  
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dir;
