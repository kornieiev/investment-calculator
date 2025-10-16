import img from "../../assets/iphone.jpeg";

// Создайте файл: ResponsiveCard.jsx
export default function ResponsiveCard() {
  return (
    <div className='flex p-8 border rounded-lg '>
      {/* Контейнер */}
      <div className='flex flex-col p-4 m-auto text-sm border rounded-lg md:p-6 lg:p-8 max-w-none md:flex-row md:text-base lg:text-lg'>
        {/* Карточка */}
        {/* Изображение */}
        <img
          src={img}
          className='object-cover w-full rounded-lg md:w-1/2 lg:w-1/3'
          alt='Product'
        />
        {/* Контент */}
        <div className='p-6 mt-8 bg-blue-200 rounded-2xl lg:ml-8 md:bg-yellow-200 lg:bg-pink-200'>
          <h2 className='text-4xl font-extrabold'>Responsive Product</h2>
          <p className='mt-4 text-lg font-light text-black/50'>
            Этот продукт адаптируется под разные экраны
          </p>

          {/* Цена и кнопка */}
          <div className='flex items-center gap-2 mt-6 md:flex-row justify-evenly md:justify-between lg:flex-col lg:items-start lg:gap-8'>
            <span className='px-10 py-4 text-4xl rounded-full bg-slate-300 lg:text-6xl'>
              $99
            </span>
            <button className='text-3xl hover:outline-none hover:border-none focus:border-none focus:outline-none hover:ring-8'>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
