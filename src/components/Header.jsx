import logo from "../assets/logo-1.png";

export default function MyHeader() {
  return (
    <header className='px-4 mx-auto bg-blue-500 max-w-7xl sm:px-6 lg:px-8'>
      <img
        className='w-40 border-2'
        src={logo}
        alt='investment calculator logo'
      />
      <h1>investment calculator</h1>
    </header>
  );
}
