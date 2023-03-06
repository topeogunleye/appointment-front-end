import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen
        ? (
          <button type="button" className="fixed  z-30 flex items-center cursor-pointer left-10 top-6" onClick={() => setIsOpen(!isOpen)}>
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className=""
              fill="#2563EB"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          </button>
        )
        : (
          <div className={`sidebar fixed top-0 left-0 bg-gray-200 w-[20vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            <button type="button" className="text-xl text-black fixed top-4 left-4" onClick={() => setIsOpen(!isOpen)}>X</button>
            <h1>My Sidebar</h1>
          </div>
        )}
    </>
  );
}
