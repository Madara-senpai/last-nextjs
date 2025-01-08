'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogin = () => {
    // Add your login logic here
    alert('Login functionality coming soon!');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-full shadow-md"
      >
        <FaUserCircle size={20} />
        <span>Login</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
          <Link href="/login">
          <button
            
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Login
          </button>
          </Link>
          <Link href="/signup">
          <button
            
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Signup
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginButton;