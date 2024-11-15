
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Dota 2 Account Shop</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Button variant="outline">Contact</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
