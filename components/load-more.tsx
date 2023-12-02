'use client';

import { Loader2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const LoadMore = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <section className='flex justify-center items-center w-full'>
        <div>
          <Loader2 width={56} height={56} className='animate-spin' />
        </div>
      </section>
    </>
  );
};
