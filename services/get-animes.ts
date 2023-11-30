const apiUrl = 'https://api.anilibria.tv/v3';

export const getAllAnimes = async () => {
  const response = await fetch(
    `${apiUrl}/title/updates?filter=id,code,names.ru,genres,type.episodes,status.code,player.episodes,posters&limit=36`
  );

  if (!response.ok) throw new Error('Unable to fetch animes.');

  return response.json();
};