interface LinkItemProps {
  name: string;
  route: string
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Strona Domowa', route:'/' },
  { name: 'O Aplikacji', route:'/aboutapp' },
  { name: 'O mnie', route:'/about' },
  { name: 'Znajomi', route:'/friends'},
  { name: 'Ustawienia', route:'/settings' },
];