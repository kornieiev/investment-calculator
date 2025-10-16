// Создайте файл: BlogPost.jsx
export default function BlogPost() {
  return (
    <article className='p-4 mx-auto border max-w-fit'>
      {/* Hero секция с градиентом */}
      <header className='p-6 text-white bg-gradient-to-b from-slate-600 to-slate-200 via-red-500'>
        <h1 className='italic text-center text-white/90'>
          10 советов по изучению Tailwind CSS
        </h1>
        <p className='mt-2 font-bold text-neutral-200'>
          Руководство для начинающих разработчиков
        </p>
        <div className='mt-2 text-slate-600'>
          <span className='text-neutral-800'>Автор: </span>
          <span className='font-semibold from-neutral-900'>Дмитрий</span>
          <span className='text-red-600'> • </span>
          <time className='italic'>10 октября 2025</time>
        </div>
      </header>

      {/* Основной контент */}
      <main className='py-8 leading-loose bg-slate-200'>
        <h2 className='text-2xl font-bold text-center'>Введение</h2>
        <p className='mt-4 ml-6 italic text-black/60'>
          Tailwind CSS революционизировал способ написания стилей...
        </p>

        <h2 className='pt-4 text-2xl font-bold text-center'>
          Основные принципы
        </h2>
        <ul className='text-black/60'>
          <li className='ml-6 italic'>Утилитарный подход</li>
          <li className='ml-6 italic'>Responsive дизайн</li>
          <li className='ml-6 italic'>Компонентное мышление</li>
        </ul>
      </main>
    </article>
  );
}
