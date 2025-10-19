import logo from "../assets/logo-1.png";

export default function MyHeader({ isDark, toggleTheme }) {
  return (
    <header className='flex flex-row items-center justify-around gap-4 p-8 mx-auto md:p-6 sm:p-4 max-w-7xl sm:px-6 lg:px-8 from-blue-400 to-cyan-400 bg-gradient-to-tr dark:bg-gradient-to-b dark:from-cyan-900 dark:to-blue-900'>
      <img
        className='w-20 md:w-40 sm:w-32'
        src={logo}
        alt='logo showing calculator '
      />
      <h1 className='text-3xl uppercase md:text-5xl sm:text-4xl text-indigo-950 dark:text-white/80'>
        investment calculator
      </h1>
      <button
        className='flex items-center justify-center w-12 text-2xl text-white transition-colors border-none rounded-full focus:outline-none sm:text-4xl sm:w-16 aspect-square bg-cyan-400 hover:bg-cyan-400/50 dark:bg-blue-800 dark:hover:bg-indigo-900'
        onClick={toggleTheme}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
