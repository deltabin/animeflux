'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navData, type INavData } from './header.data';

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center space-x-6 text-sm font-medium'>
      {navData.map(({ href, name }: INavData) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            className={cn(
              'transition-colors hover:text-foreground/80 text-foreground/60',
              isActive && 'text-foreground'
            )}
            key={href}
            href={href}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
