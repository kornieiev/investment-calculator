import { useState } from "react";
import img from "../../assets/385-536x354.jpg";

// Урок 6: Позиционирование - Практическое задание
export default function PositionDemo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='z-20 mx-auto max-w-7xl'>
      {/* Main container */}
      {/* Sticky Navigation */}
      <nav className='sticky top-0 px-6 py-8 bg-slate-200'>
        <div className='flex justify-between'>
          <div>Logo</div>
          <div>Menu Items</div>
        </div>
      </nav>
      {/* Hero Section with Overlay */}
      <section className='relative mt-6'>
        {/* relative container */}
        <img src={img} className='mx-auto ' alt='Hero' />
        {/* Overlay with centered content */}
        <div className='absolute transform -translate-x-1/2 -translate-y-1/2 text-white/95 top-1/2 left-1/2'>
          {/* absolute overlay */}
          <h1 className='font-bold text-center'>Welcome to Our Site</h1>
          <p className='text-center'>Amazing content here</p>
        </div>
        {/* Badge in corner */}
        <div className='absolute text-3xl font-bold text-red-400 top-5 right-5'>
          {/* absolute badge */}
          NEW
        </div>
      </section>
      {/* Card with Dropdown */}
      <div className='p-8 outline '>
        <div className='relative group/card'>
          {/* relative container for dropdown */}
          {/* Card content */}
          <div className=''>
            <h3>Product Card</h3>
            <p>Hover for dropdown menu</p>
          </div>
          {/* Dropdown Menu */}
          <div className='absolute left-0 flex flex-col gap-3 p-4 mt-2 space-y-2 align-middle transition-all duration-300 ease-in-out translate-y-2 bg-orange-100 rounded-lg shadow-lg opacity-0 top-full group-hover/card:opacity-100 group-hover/card:translate-y-0'>
            {" "}
            {/* absolute dropdown */}
            <a href='#' className='???'>
              View Details
            </a>
            <a href='#' className='???'>
              Add to Cart
            </a>
            <a href='#' className='???'>
              Add to Wishlist
            </a>
          </div>
        </div>
      </div>
      {/* Long content for sticky demo */}
      <div className='h-screen p-8 bg-gradient-to-b from-blue-100 to-purple-100'>
        <h2>Scroll to see sticky navigation</h2>
        <p>This section is very tall to demonstrate sticky positioning...</p>
      </div>
      {/* Fixed "Back to Top" button */}
      <button
        className='fixed z-40 bottom-6 right-20'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* fixed button */}↑
      </button>
      {/* Modal trigger (bonus) */}
      <div className='p-8 text-center'>
        <button className='' onClick={() => setShowModal((prev) => !prev)}>
          Open Modal
        </button>
      </div>
      {/* Fake Modal для демонстрации */}
      {showModal && (
        <div className='fixed z-30 max-w-xs p-4 bg-white border rounded-lg shadow-xl bottom-4 left-4'>
          <h3 className='font-bold'>Demo Modal</h3>
          <p className='text-sm'>
            This is always visible to show fixed positioning
          </p>
          <button className='absolute text-gray-400 top-1 right-2'>✕</button>
        </div>
      )}
    </div>
  );
}
