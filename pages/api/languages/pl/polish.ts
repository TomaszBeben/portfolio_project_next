import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSettings,
  FiUsers
} from 'react-icons/fi';
import { IconType } from 'react-icons';

type Data = {
  name: string;
  icon: IconType;
}

export const polish_sidebar: Array<Data> = [
  { name: 'Strona Domowa', icon: FiHome },
  { name: 'O Aplikacji', icon: FiTrendingUp },
  { name: 'O mnie', icon: FiCompass },
  { name: 'Znajomi', icon: FiUsers},
  { name: 'Ustawienia', icon: FiSettings },
]