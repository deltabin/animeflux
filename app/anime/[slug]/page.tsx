import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { truncate } from '@/lib/utils';
import { getAnimeById } from '@/services/get-animes';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';

export default async function AnimeOnePage({ params }: { params: { slug: string } }) {
  const anime = await getAnimeById(+params.slug);

  return (
    <div className='mt-10'>
      <div className='flex gap-4'>
        <Image
          src={`https://api.litelibria.com/posters/${anime.id}.webp`}
          width={256}
          height={366}
          className='rounded-md'
          alt={anime.names.ru}
        />
        <div className='flex flex-col gap-5 w-[600px] justify-between'>
          <div>
            <p className='text-xl font-semibold'>{anime.names.ru}</p>
            <div className='flex gap-4 mt-5'>
              {anime.genres.map((genre: any) => (
                <Badge className='w-fit' key={genre.id}>
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
          <p className='text-foreground/60 text-sm'>{truncate(anime.description, 600)}</p>
          <Button variant='outline' className='flex gap-2 w-fit'>
            <PlusCircle size={16} />В избранное
          </Button>
        </div>
      </div>
    </div>
  );
}
