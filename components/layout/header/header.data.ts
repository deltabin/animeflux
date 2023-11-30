export interface INavData {
  name: string;
  href: string;
}

export const navData: INavData[] = [
  {
    name: 'Аниме',
    href: '/anime'
  },
  {
    name: 'Манга',
    href: '/manga'
  },
  {
    name: 'Расписание',
    href: '/schedule'
  },
  {
    name: 'Рандом',
    href: '/random'
  }
];
