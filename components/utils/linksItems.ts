interface LinkItemProps {
  name: string;
  route: string
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', route:'/' },
  { name: 'Trending', route:'Trending' },
  { name: 'Explore', route: 'Explore' },
  { name: 'Favourites', route: 'Favourites' },
  { name: 'Settings', route: 'settings' },
];