import { getAnimeById } from '@/services/get-animes';
import { AnimeInfo } from '../_components/anime-info';

export const revalidate = 10;

export default async function AnimeOnePage({ params }: { params: { slug: string } }) {
  const anime = await getAnimeById(+params.slug);

  return (
    <section className='mt-10'>
      <AnimeInfo
        name={anime.names.ru}
        genres={anime.genres}
        description={anime.description}
        id={anime.id}
      />
    </section>
  );
}
