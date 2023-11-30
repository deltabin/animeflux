import AnimeCardItem from '@/components/anime-card';
import { Input } from '@/components/ui/input';
import { getAllAnimes } from '@/services/get-animes';

export const revalidate = 10;

export default async function AnimePage() {
  const animes = await getAllAnimes();
  return (
    <div className='mt-10'>
      <Input placeholder='Поиск...' />
      <div className='grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-9 mt-10'>
        {animes.list.map((anime: any) => (
          <AnimeCardItem
            key={anime.id}
            title={anime.names.ru}
            episodes={anime.type.episodes || '0'}
            imageUrl={`https://api.litelibria.com/posters/${anime.id}.webp`}
          />
        ))}
      </div>
    </div>
  );
}
