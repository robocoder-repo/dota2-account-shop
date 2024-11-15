
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import AccountDetails from '../../../components/AccountDetails';
import Header from '../../../components/Header';

// Mock data for Dota 2 accounts (same as in the home page)
const mockAccounts = [
  { id: 1, mmr: 3500, level: 100, rareItems: ['Arcana', 'Immortal'], price: 150 },
  { id: 2, mmr: 4200, level: 150, rareItems: ['Arcana', 'Immortal', 'Legendary'], price: 200 },
  { id: 3, mmr: 5000, level: 200, rareItems: ['Arcana', 'Immortal', 'Legendary', 'Mythical'], price: 300 },
  { id: 4, mmr: 3000, level: 80, rareItems: ['Immortal'], price: 100 },
];

export default function AccountPage() {
  const params = useParams();
  const accountId = Number(params.id);

  const account = mockAccounts.find(acc => acc.id === accountId);

  if (!account) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Account Not Found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <AccountDetails {...account} />
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Dota 2 Account Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
