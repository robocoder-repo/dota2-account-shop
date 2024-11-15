
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for Dota 2 accounts
const mockAccounts = [
  { id: 1, mmr: 3500, level: 100, rareItems: ['Arcana', 'Immortal'], price: 150 },
  { id: 2, mmr: 4200, level: 150, rareItems: ['Arcana', 'Immortal', 'Legendary'], price: 200 },
  { id: 3, mmr: 5000, level: 200, rareItems: ['Arcana', 'Immortal', 'Legendary', 'Mythical'], price: 300 },
  { id: 4, mmr: 3000, level: 80, rareItems: ['Immortal'], price: 100 },
];

const Header = () => (
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

const AccountCard = ({ id, mmr, level, rareItems, price }) => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Dota 2 Account</CardTitle>
    </CardHeader>
    <CardContent>
      <Image
        src={`https://placehold.co/300x200?text=Dota+2+Account+${id}`}
        alt={`Dota 2 Account ${id}`}
        width={300}
        height={200}
        className="rounded-md mb-4"
      />
      <div className="space-y-2">
        <p><strong>MMR:</strong> {mmr}</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Rare Items:</strong> {rareItems.join(', ')}</p>
        <p className="text-xl font-bold">Price: ${price}</p>
      </div>
    </CardContent>
    <CardFooter>
      <Link href={`/account/${id}`} className="w-full">
        <Button className="w-full">View Details</Button>
      </Link>
    </CardFooter>
  </Card>
);

const AccountDetails = ({ id, mmr, level, rareItems, price }) => (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>Dota 2 Account Details</CardTitle>
    </CardHeader>
    <CardContent>
      <Image
        src={`https://placehold.co/600x400?text=Dota+2+Account+${id}`}
        alt={`Dota 2 Account ${id}`}
        width={600}
        height={400}
        className="rounded-md mb-4"
      />
      <div className="space-y-4">
        <p><strong>Account ID:</strong> {id}</p>
        <p><strong>MMR:</strong> {mmr}</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Rare Items:</strong> {rareItems.join(', ')}</p>
        <p className="text-2xl font-bold">Price: ${price}</p>
      </div>
      <Button className="w-full mt-6">Purchase Account</Button>
    </CardContent>
  </Card>
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [selectedAccount, setSelectedAccount] = useState(null);

  const filteredAndSortedAccounts = mockAccounts
    .filter(account => 
      account.mmr.toString().includes(searchTerm) ||
      account.level.toString().includes(searchTerm) ||
      account.rareItems.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'mmr') return b.mmr - a.mmr;
      if (sortBy === 'level') return b.level - a.level;
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          {selectedAccount ? (
            <>
              <Button onClick={() => setSelectedAccount(null)} className="mb-4">Back to List</Button>
              <AccountDetails {...selectedAccount} />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-6 text-center">Dota 2 Accounts for Sale</h1>
              
              <div className="mb-6 flex space-x-4">
                <Input
                  type="text"
                  placeholder="Search by MMR, level, or items"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Select onValueChange={setSortBy} defaultValue={sortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="mmr">MMR</SelectItem>
                    <SelectItem value="level">Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedAccounts.map(account => (
                  <div key={account.id} onClick={() => setSelectedAccount(account)}>
                    <AccountCard {...account} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Dota 2 Account Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
