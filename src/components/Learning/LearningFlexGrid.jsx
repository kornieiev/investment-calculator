export default function LearningFlexGrid() {
  const gridTransition = "transition-all duration-300 hover:scale-105";
  return (
    <div className='p-8 space-y-8'>
      <h1 className='text-3xl font-bold'>Изучаем Flexbox и Grid</h1>

      {/* Здесь будут примеры */}
      {/* Базовый flex */}
      <div className='p-4 bg-gray-100'>
        <h2>Базовый Flex</h2>
        <div className='flex gap-4 p-4 bg-blue-100'>
          <div className='p-4 bg-red-200'>Item 1</div>
          <div className='p-4 bg-green-200'>Item 2</div>
          <div className='p-4 bg-yellow-200'>Item 3</div>
        </div>
      </div>

      {/* Горизонтальное выравнивание (justify) */}
      <div className='p-4 bg-gray-100'>
        <h2>Горизонтальное выравнивание</h2>

        <div className='flex justify-center gap-4 p-4 mb-2 bg-blue-100'>
          <div className='p-2 bg-red-200'>Center</div>
          <div className='p-2 bg-green-200'>Center</div>
        </div>

        <div className='flex justify-between gap-4 p-4 mb-2 bg-purple-100'>
          <div className='p-2 bg-red-200'>Between</div>
          <div className='p-2 bg-green-200'>Between</div>
        </div>

        <div className='flex justify-end gap-4 p-4 bg-yellow-100'>
          <div className='p-2 bg-red-200'>End</div>
          <div className='p-2 bg-green-200'>End</div>
        </div>
      </div>

      {/* Вертикальное выравнивание (items) */}
      <div className='p-4 bg-gray-100'>
        <h2>Вертикальное выравнивание</h2>

        <div className='flex items-center justify-center h-32 gap-4 p-4 bg-green-100'>
          <div className='h-8 p-2 bg-red-200'>Центр</div>
          <div className='h-16 p-2 bg-blue-200'>Центр</div>
          <div className='h-12 p-2 bg-yellow-200'>Центр</div>
        </div>

        <div className='flex items-end justify-between h-32 gap-4 p-4 bg-purple-100'>
          <div className='h-8 p-2 bg-red-200'>Низ</div>
          <div className='h-16 p-2 bg-blue-200'>Низ</div>
          <div className='h-12 p-2 bg-yellow-200'>Низ</div>
        </div>
      </div>

      {/* Направления flex */}
      <div className='p-4 bg-gray-100'>
        <h2>Направления Flex</h2>

        {/* Вертикальное направление */}
        <div className='flex flex-col h-40 gap-2 p-4 mb-4 bg-blue-100'>
          <div className='p-2 bg-red-200'>Сверху</div>
          <div className='p-2 bg-green-200'>Посередине</div>
          <div className='p-2 bg-yellow-200'>Снизу</div>
        </div>

        {/* Горизонтальное (по умолчанию) */}
        <div className='flex flex-row gap-2 p-4 bg-purple-100'>
          <div className='p-2 bg-red-200'>Слева</div>
          <div className='p-2 bg-green-200'>Центр</div>
          <div className='p-2 bg-yellow-200'>Справа</div>
        </div>
      </div>

      {/* Flex grow */}
      <div className='p-4 bg-gray-100'>
        <h2>Flex Grow - растягивание элементов</h2>

        <div className='flex gap-2 p-4 bg-green-100'>
          <div className='flex-1 p-2 bg-red-200'>Растягивается (flex-1)</div>
          <div className='p-2 bg-blue-200 '>Обычный</div>
          <div className='p-2 bg-yellow-200 '>Обычный</div>
        </div>
      </div>

      {/* gridTransition Grid */}
      <div className='p-4 bg-gray-100'>
        <h2>gridTransition Grid - двумерная система</h2>

        {/* Простая сетка 2x2 */}
        <div className='grid grid-cols-2 gap-4 p-4 mb-4 bg-blue-100'>
          <div className='p-4 bg-red-200'>Grid 1</div>
          <div className='p-4 bg-green-200'>Grid 2</div>
          <div className='p-4 bg-yellow-200'>Grid 3</div>
          <div className='p-4 bg-purple-200'>Grid 4</div>
        </div>

        {/* Сетка 3 колонки */}
        <div className='grid grid-cols-3 gap-2 p-4 bg-green-100'>
          <div className='p-2 bg-blue-200'>1</div>
          <div className='p-2 bg-pink-200'>2</div>
          <div className='p-2 bg-orange-200'>3</div>
          <div className='p-2 bg-cyan-200'>4</div>
          <div className='p-2 bg-indigo-200'>5</div>
          <div className='p-2 bg-teal-200'>6</div>
        </div>
      </div>

      {/* Сложная Grid */}
      <div className='p-4 bg-gray-100'>
        <h2>Сложная Grid раскладка</h2>

        <div className='grid grid-cols-4 gap-3 p-4 bg-purple-100'>
          <div className='col-span-2 p-4 bg-red-200'>
            Широкий блок (2 колонки)
          </div>
          <div className='p-4 bg-green-200'>Обычный</div>
          <div className='p-4 bg-blue-200'>Обычный</div>
          <div className='p-4 bg-yellow-200'>Блок 1</div>
          <div className='p-4 bg-pink-200'>Блок 2</div>
          <div className='col-span-2 p-4 bg-orange-200'>Ещё широкий</div>
        </div>
      </div>

      <div className='grid grid-cols-4 grid-rows-3 gap-2 p-4 bg-gray-100'>
        <div className='col-span-2 row-span-2 p-4 bg-red-200'>2x2</div>
        <div className='col-span-1 row-span-1 p-4 bg-blue-200'>1x1</div>
        <div className='col-span-1 row-span-3 p-4 bg-green-200'>1x3</div>
        <div className='col-span-2 row-span-1 p-4 bg-yellow-200'>2x1</div>
      </div>

      <div className='p-4 border '>
        <h2>Галерея изображений</h2>

        {/* Используйте Grid для создания адаптивной сетки */}
        <div className='grid grid-cols-3 gap-2'>
          <div className='h-40 col-span-2 transition-all duration-300 bg-red-200 hover:scale-105'>
            Фото 1
          </div>
          <div className={`bg-green-200 h-40 ${gridTransition}`}>Фото 2</div>
          <div className={`bg-blue-200 h-40 ${gridTransition}`}>Фото 3</div>
          <div className={`h-40 col-span-2 bg-yellow-200 ${gridTransition}`}>
            Фото 4
          </div>
          <div className={`h-40 col-span-2 bg-purple-200 ${gridTransition}`}>
            Фото 5
          </div>
          <div className={`h-40 bg-pink-200 ${gridTransition}`}>Фото 6</div>
        </div>
      </div>
    </div>
  );
}
