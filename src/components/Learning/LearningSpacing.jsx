import myImg from "../../assets/iphone.jpeg";

export default function LearningSpacing() {
  return (
    <div className='w-1/5 p-4 m-10 border border-gray-400 rounded-lg shadow-md min-w-64 '>
      {/* Изображение товара */}
      <img
        src={myImg}
        alt='randome image'
        className='w-full object-cover h-[300px] max-w-sm '
      />

      {/* Информация о товаре */}
      <div className='flex flex-col justify-center gap-4 mt-4'>
        <h3 className='text-2xl'>Apple</h3>
        <p>Iphone 17 PRO MAX</p>
        <div className='flex items-center gap-4 p-2 border rounded-md justify-evenly'>
          <span className='text-xl font-bold text-green-600'>$99.99</span>
          <button className=' px-4 py-2 border-amber-300 transition-transform duration-300 rounded-lg hover:scale-[101%] hover:shadow-xl outline-none hover:outline-none hover:border-amber-300 focus:outline-none'>
            <a href='https://www.apple.com/shop/buy-iphone/iphone-17-pro'>
              Купить
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
