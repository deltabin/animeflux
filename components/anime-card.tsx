import { truncate } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface IAnimeCardItem {
  title: string;
  imageUrl: string;
  episodes: string;
}

const AnimeCardItem = ({ title, imageUrl, episodes }: IAnimeCardItem) => {
  return (
    <Card>
      <CardHeader>
        <p>{truncate(title, 20)}</p>
      </CardHeader>
      <CardContent>
        <Image className='mx-auto' src={imageUrl} width={250} height={250} alt={title} />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button>Смотреть</Button>
        <Badge variant='secondary'>{episodes} СЕРИЙ</Badge>
      </CardFooter>
    </Card>
  );
};

export default AnimeCardItem;
