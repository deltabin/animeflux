'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { truncate } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface IAnimeInfo {
  id: number;
  name: string;
  genres: string[];
  description: string;
}

export const AnimeInfo = ({ id, name, genres, description }: IAnimeInfo) => {
  return (
    <div className='flex gap-4'>
      <Image
        src={`https://api.litelibria.com/posters/${id}.webp`}
        width={256}
        height={366}
        className='rounded-md'
        alt={name}
      />
      <div className='flex flex-col gap-5 w-[600px] justify-between'>
        <div>
          <p className='text-xl font-semibold'>{name}</p>
          <div className='flex gap-4 mt-5'>
            {genres.map((genre: string, index: number) => (
              <Badge className='w-fit' key={index}>
                {genre}
              </Badge>
            ))}
          </div>
        </div>
        <p className='text-foreground/60 text-sm'>{truncate(description, 600)}</p>
        <Button onClick={() => toast('Hello world')} variant='outline' className='flex gap-2 w-fit'>
          <PlusCircle size={16} />В избранное
        </Button>
      </div>
    </div>
  );
};
