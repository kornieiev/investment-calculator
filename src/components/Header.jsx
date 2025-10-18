import logo from "../assets/logo-1.png";

export default function MyHeader({ isDark, toggleTheme }) {
  return (
    <header className='flex flex-row items-center justify-around gap-4 p-8 mx-auto bg-blue-100 md:p-6 sm:p-4 dark:bg-indigo-950 max-w-7xl sm:px-6 lg:px-8'>
      <img
        className='w-20 md:w-40 sm:w-32'
        src={logo}
        alt='logo showing calculator '
      />
      <h1 className='text-3xl uppercase md:text-5xl sm:text-4xl text-indigo-950 dark:text-white/80'>
        investment calculator
      </h1>
      <button
        className='flex items-center justify-center w-12 text-2xl text-white transition-colors rounded-full sm:text-4xl sm:w-16 aspect-square bg-amber-100 hover:bg-amber-100/50 dark:bg-black dark:hover:bg-indigo-800'
        onClick={toggleTheme}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
