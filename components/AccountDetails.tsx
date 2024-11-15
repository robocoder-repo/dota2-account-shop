
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface AccountDetailsProps {
  id: number;
  mmr: number;
  level: number;
  rareItems: string[];
  price: number;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ id, mmr, level, rareItems, price }) => {
  return (
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
};

export default AccountDetails;
