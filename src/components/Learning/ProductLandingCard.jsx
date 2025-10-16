import airpods from "../../assets/airpods.jpg";
export default function ProductLandingCard() {
  return (
    <div className='flex flex-col items-center p-4 mx-auto border max-w-8xl w-[368px] md:w-[856px] md:grid md:grid-cols-2 '>
      {/* Main container */}
      {/* Hero Section */}
      <div className='p-6 bg-gradient-to-tr from-green-400 via-transparent via-25% to-blue-500 md:col-span-2 md:row-span-1'>
        <h1 className='px-4 text-4xl text-center md:px-8 md:text-8xl text-black/70'>
          AirPods Pro Max
        </h1>
        <p className='mt-4 text-center text-black/50'>
          Премиум наушники нового поколения
        </p>
      </div>
      {/* Product Image */}
      <div className='relative mt-4 rounded-md shadow-md w-80 md:col-span-1 md:row-span-4 md:m-auto'>
        <img
          src={airpods}
          className='relative transition-transform duration-300 rounded-md hover:scale-105'
          alt='AirPods Pro Max'
        />
        {/* Badge */}
        <div className='absolute font-extrabold text-transparent uppercase bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text top-4 right-4'>
          NEW
        </div>
      </div>
      {/* Features Grid */}
      <div className='flex flex-col gap-2 mt-4 divide-y md:pt-4'>
        <div className=''>🎵 Hi-Fi звук</div>
        <div className='???'>🔇 Шумодав</div>
        <div className='???'>⚡ 30ч работы</div>
        <div className='???'>📱 Apple экосистема</div>
      </div>
      {/* Pricing */}
      <div className='mt-4'>
        <div className='flex flex-row-reverse gap-5 md:items-center md:justify-center'>
          <span className='p-2 text-2xl font-extrabold text-justify bg-green-400 rounded-lg hover:bg-blue-400 hover:text-white/80'>
            $399
          </span>
          <span className='text-xl line-through'>$599</span>
        </div>
        <p className='mt-4 font-bold text-blue-400'>🔥 Скидка 33%</p>
      </div>
      {/* CTA Buttons */}
      <div className='flex items-center gap-2 mt-6 md:justify-center md:gap-6'>
        <button className='px-4 py-2 transition-all duration-300 border-none shadow-md hover:bg-blue-400 hover:text-white/90'>
          Купить сейчас
        </button>
        <button className='px-4 py-2 transition-all duration-300 border-none shadow-md hover:bg-blue-400 hover:text-white/90'>
          Добавить в корзину
        </button>
      </div>
      {/* Social Proof */}
      <div className='flex items-center gap-2 my-6'>
        <div className='???'>⭐⭐⭐⭐⭐</div>
        <p className='???'>4.9/5 (1,247 отзывов)</p>
      </div>

      <div className='group hover:bg-gray-100'>
        <h3 className='group-hover:text-blue-600'>Заголовок</h3>
        <p className='group-hover:translate-x-2'>Текст сдвигается</p>
        <button className='opacity-0 group-hover:opacity-100'>
          Кнопка появляется
        </button>
      </div>

      <div>
        <input className='peer' type='checkbox' />
        <label className='peer-checked:text-red-600'>
          Меняет цвет когда checkbox отмечен
        </label>
      </div>

      <div>
        <button className='px-6 py-3 text-white transition-all duration-200 bg-blue-500 shadow-md hover:bg-blue-600 active:bg-blue-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-lg'>
          Крутая кнопка
        </button>
      </div>

      <div>
        <div className='p-6 transition-all duration-300 bg-white rounded-lg shadow-md group hover:shadow-xl'>
          <img className='transition-transform duration-300 group-hover:scale-110' />
          <h3 className='transition-colors group-hover:text-blue-600'>
            Заголовок
          </h3>
          <p className='transition-transform group-hover:translate-x-2'>
            Описание
          </p>
          <button className='transition-all duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
            Появляющаяся кнопка
          </button>
        </div>
      </div>

      <div>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className='p-4 odd:bg-gray-100 even:bg-white first:rounded-t-lg last:rounded-b-lg hover:bg-blue-50'
          >
            {item}
          </div>
        ))}
      </div>

      <div>
        <input className='border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 invalid:border-red-500 invalid:text-red-600 valid:border-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed' />
      </div>

      <div>
        <div
          className="
  before:content-['★'] before:text-yellow-500 before:mr-2
  after:content-['NEW'] after:bg-red-500 after:text-white 
  after:text-xs after:px-1 after:rounded after:ml-2
"
        >
          Продукт
        </div>
      </div>

      <div>
        <div className='text-black bg-white dark:bg-gray-900 dark:text-white'>
          Контент адаптируется под тему
        </div>
      </div>

      <div>
        <div className='transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95 active:rotate-1'>
          Анимированная карточка
        </div>
      </div>

      <br />

      <div>
        // Простая иконка перед текстом
        <div className="before:content-['★'] before:text-yellow-500 before:mr-2">
          Рейтинг продукта
        </div>
        // Badge после текста
        <span className="after:content-['NEW'] after:bg-red-500 after:text-white after:text-xs after:px-1 after:rounded after:ml-2">
          Продукт
        </span>
      </div>

      <br />

      <div>
        // Горизонтальная линия под заголовком
        <h2 className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500">
          Заголовок с подчеркиванием
        </h2>
        // Вертикальная линия слева
        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-500">
          Текст с цветной полосой
        </div>
      </div>

      <br />

      <div>
        <div
          className='
  group relative cursor-pointer
  after:content-[attr(data-tooltip)] 
  after:absolute after:top-full after:left-1/2 
  after:-translate-x-1/2 after:mt-2 
  after:px-2 after:py-1 after:text-sm 
  after:bg-black after:text-white after:rounded 
  after:opacity-0 after:transition-opacity 
  group-hover:after:opacity-100
'
          data-tooltip='Это подсказка!'
        >
          Наведите для подсказки
        </div>
      </div>

      <div
        className="
  relative overflow-hidden group
  before:content-[''] before:absolute before:inset-0 
  before:bg-gradient-to-r before:from-transparent before:to-black/50
  before:opacity-0 before:transition-opacity 
  group-hover:before:opacity-100
"
      >
        <img src='...' className='object-cover w-full h-64' />
        <div className='absolute inset-0 flex items-center justify-center text-white transition-opacity opacity-0 group-hover:opacity-100'>
          <button>View Details</button>
        </div>
      </div>

      <br />
      <div>
        <ul className='list-disc marker:text-blue-500 marker:text-xl'>
          <li>Первый пункт с синими маркерами</li>
          <li>Второй пункт</li>
        </ul>
      </div>
      <br />

      <div>
        <button
          className="
  relative overflow-hidden px-6 py-3 bg-blue-500 text-white rounded
  before:content-[''] before:absolute before:top-0 before:left-0 
  before:w-0 before:h-full before:bg-blue-700 
  before:transition-all before:duration-300
  hover:before:w-full
"
        >
          <span className='relative z-10'>Анимированная кнопка</span>
        </button>
      </div>
      <br />
      <div>
        <div
          className="
  relative p-6 bg-white rounded-lg shadow-md
  before:content-[''] before:absolute before:top-0 before:left-0 
  before:w-2 before:h-full before:bg-gradient-to-b 
  before:from-blue-500 before:to-purple-500 before:rounded-l-lg
  after:content-[''] after:absolute after:top-2 after:right-2
  after:w-3 after:h-3 after:bg-green-500 after:rounded-full
"
        >
          <h3>Карточка с декорацией</h3>
          <p>Цветная полоса слева и индикатор справа</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
