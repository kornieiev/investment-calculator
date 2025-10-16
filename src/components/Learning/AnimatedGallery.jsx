import img from "../../assets/385-536x354.jpg";
export default function AnimatedGallery() {
  const images = [img, img, img, img];

  return (
    <div className='p-8 md:p-12'>
      {/* Контейнер */}
      <h1 className='text-6xl font-bold text-center text-transparent bg-gradient-to-r from-orange-600 to-yellow-300 bg-clip-text '>
        Animated Gallery
      </h1>

      <div className='flex flex-col flex-wrap justify-center gap-4 p-8 mt-8 md:flex-row md:gap-x-20'>
        {/* Grid */}
        {images.map((src, index) => (
          <div
            key={index}
            className='flex flex-col w-full gap-6 p-4 rounded md:w-1/3'
          >
            {" "}
            {/* Card wrapper */}
            <img
              src={src}
              className='w-auto m-auto transition-all duration-300 shadow-md md:w-full rounded-3xl hover:scale-105 hover:shadow-2xl hover:rotate-2'
              alt={`Gallery ${index + 1}`}
            />
            <div className='m-auto '>
              {/* Overlay */}
              <button className='text-xl transition-all duration-300 hover:bg-blue-600 hover:animate-pulse'>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
