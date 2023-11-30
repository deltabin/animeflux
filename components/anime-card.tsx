import { truncate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface IAnimeCardItem {
  id: number;
  title: string;
  imageUrl: string;
  episodes: string;
}

const AnimeCardItem = ({ title, imageUrl, episodes, id }: IAnimeCardItem) => {
  return (
    <Card>
      <CardHeader>
        <p className='font-semibold'>{truncate(title, 25)}</p>
      </CardHeader>
      <CardContent>
        <Image className='mx-auto' src={imageUrl} width={250} height={250} alt={title} />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={'anime/' + id}>
          <Button>Смотреть</Button>
        </Link>
        <Badge variant='secondary'>{episodes} СЕРИЙ</Badge>
      </CardFooter>
    </Card>
  );
};

export default AnimeCardItem;
