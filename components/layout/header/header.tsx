import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { options } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { HeaderNav } from './header-nav';

export const HeaderLayout = async () => {
  const session = await getServerSession(options);
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex justify-between px-16 border py-3 items-center'>
        <Link href='/'>
          <h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            Anime
            <span className='text-primary'>Flux</span>
          </h2>
        </Link>
        <HeaderNav />
        {session && session.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none'>
              <Avatar>
                <AvatarImage src={session.user.image || ''} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/profile'>Профиль</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Подписки</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/api/auth/signout'>Выйти</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href='api/auth/signin'>
            <Button>Войти</Button>
          </Link>
        )}
      </div>
    </header>
  );
};
