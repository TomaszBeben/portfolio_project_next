import { NavItem } from './NavItem';
import { LinkItems } from '../../utils/linksItems';
import { useLanguage } from '../../../context/language/languageContext';

const NavItems = () => {
  const { languageObj: { sidebar } = LinkItems } = useLanguage()

  return (
    <>
      <NavItem route='/'>
        {sidebar[0].name}
      </NavItem>
      <NavItem route='/aboutapp'>
        {sidebar[1].name}
      </NavItem>
      <NavItem route='/about'>
        {sidebar[2].name}
      </NavItem>
      <NavItem route='friends'>
        {sidebar[3].name}
      </NavItem>
      <NavItem route='settings'>
        {sidebar[4].name}
      </NavItem>
    </>
  )
}

export default NavItems