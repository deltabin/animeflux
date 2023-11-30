import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { HeaderNav } from './header-nav';

export const HeaderLayout = () => {
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

        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>deltabin.</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Профиль</DropdownMenuItem>
            <DropdownMenuItem>Подписки</DropdownMenuItem>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
