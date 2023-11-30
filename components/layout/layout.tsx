import { ReactNode } from 'react';
import { HeaderLayout } from './header/header';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <HeaderLayout />
    <main className='container'>{children}</main>
    <footer />
  </>
);
