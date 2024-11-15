
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

interface AccountCardProps {
  id: number;
  mmr: number;
  level: number;
  rareItems: string[];
  price: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ id, mmr, level, rareItems, price }) => {
  return (
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
};

export default AccountCard;
