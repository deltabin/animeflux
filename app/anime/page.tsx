import { LoadMore } from '@/components/load-more';
import { Search } from '@/components/search';
import { getAllAnimes } from '@/services/get-animes';
import type { Metadata } from 'next';
import AnimeCardItem from './_components/anime-card';

export const revalidate = 10;

export const metadata: Metadata = {
  title: 'AnimeFlux | Аниме'
};

export default async function AnimePage({
  searchParams
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const search =
    searchParams.search && typeof searchParams.search === 'string' ? searchParams.search : '';

  const animes = await getAllAnimes(1);

  // TODO: переписать код, написать проверку на ошибки и тд
  const filteredAnimes = animes.list.filter((anime: any) => {
    return anime.names.ru.toLowerCase().includes(search.toLowerCase());
  });

  const animeListToMap = filteredAnimes || animes.list;

  return (
    <div className='mt-10'>
      <Search />

      <section className='grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-9 mt-10'>
        {animeListToMap.map((anime: any) => {
          return (
            <AnimeCardItem
              key={anime.id}
              id={anime.id}
              title={anime.names.ru}
              episodes={anime.type.episodes || '0'}
              imageUrl={`https://api.litelibria.com/posters/${anime.id}.webp`}
            />
          );
        })}
      </section>
      <LoadMore />
    </div>
  );
}
