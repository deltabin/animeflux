'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Input } from './ui/input';

export const Search = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 300);

  useEffect(() => {
    if (!query) router.push('/anime');
    else router.push(`/anime?search=${query}`);
  }, [query, router]);

  return (
    <Input placeholder='Поиск...' value={text} onChange={(event) => setText(event.target.value)} />
  );
};
