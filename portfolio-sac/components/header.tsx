import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <img src="/silvio-logo.svg" className="w-48" alt="React Bricks" />
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-gray-500 hover:text-pink-700">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-500 hover:text-pink-700">About</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-pink-700">Blog</a>
            </Link>
            <Link href="/contacts">
              <a className="text-gray-500 hover:text-pink-700">Contacts</a>
            </Link>
            <Link href="/portfolio">
              <a className="text-gray-500 hover:text-pink-700">Portfolio</a>
            </Link>
          </div>
        </div>
        </div>
    </div>
  </header>
)

export default Header
