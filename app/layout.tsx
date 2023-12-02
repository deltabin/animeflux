import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'AnimeFlux',
  description: 'AnimeFlux — это аниме-кинотеатр с возможностью скачивать торренты.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='ru'>
      <body className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Toaster />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
