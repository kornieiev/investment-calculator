export default function LearningColors() {
  return (
    <div className='p-8 space-y-8'>
      <h1 className='text-4xl font-bold text-gray-800'>Цвета и Типографика</h1>

      {/* Здесь будут примеры */}
      {/* Цветовая палитра */}
      <div className='p-6 bg-white rounded-lg shadow-md'>
        <h2 className='mb-4 text-2xl font-semibold'>
          Цветовая палитра Tailwind
        </h2>

        {/* Синие оттенки */}
        <div className='mb-4'>
          <p className='mb-2 text-sm text-gray-600'>Синие оттенки (blue)</p>
          <div className='flex gap-2'>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-blue-100 rounded'>
              100
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-blue-300 rounded'>
              300
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-blue-500 rounded'>
              500
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-blue-700 rounded'>
              700
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-blue-900 rounded'>
              900
            </div>
          </div>
        </div>

        {/* Красные оттенки */}
        <div className='mb-4'>
          <p className='mb-2 text-sm text-red-600'>Красные оттенки (red)</p>
          <div className='flex gap-2'>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-100 rounded'>
              100
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-200 rounded'>
              200
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-300 rounded'>
              300
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-400 rounded'>
              400
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-red-500 rounded'>
              500
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-600 rounded'>
              600
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-red-700 rounded'>
              700
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs bg-red-800 rounded'>
              800
            </div>
            <div className='flex items-center justify-center w-16 h-16 text-xs text-white bg-red-900 rounded'>
              900
            </div>
          </div>
        </div>

        {/* Typography - размеры шрифтов */}
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-semibold'>Размеры шрифтов</h2>

          <div className='space-y-2'>
            <p className='text-xs'>text-xs - Очень маленький текст</p>
            <p className='text-sm'>text-sm - Маленький текст</p>
            <p className='text-base'>
              text-base - Обычный текст (по умолчанию)
            </p>
            <p className='text-lg'>text-lg - Большой текст</p>
            <p className='text-xl'>text-xl - Очень большой текст</p>
            <p className='text-2xl'>text-2xl - Заголовок H2</p>
            <p className='text-3xl'>text-3xl - Заголовок H1</p>
            <p className='text-4xl'>text-4xl - Огромный заголовок</p>
          </div>
        </div>

        {/* Font Weight */}
        <div className='p-6 bg-white rounded-lg shadow-md'>
          <h2 className='mb-4 text-2xl font-semibold'>Толщина шрифта</h2>

          <div className='space-y-2'>
            <p className='font-thin'>font-thin - Тонкий шрифт</p>
            <p className='font-light'>font-light - Лёгкий шрифт</p>
            <p className='font-normal'>font-normal - Обычный шрифт</p>
            <p className='font-medium'>font-medium - Средний шрифт</p>
            <p className='font-semibold'>font-semibold - Полужирный</p>
            <p className='font-bold'>font-bold - Жирный шрифт</p>
            <p className='font-extrabold'>font-extrabold - Очень жирный</p>
          </div>
        </div>
      </div>
    </div>
  );
}
