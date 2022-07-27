import { NavItem } from './NavItem';
import { LinkItems } from '../../utils/linksItems';
import { useLanguage } from '../../../context/language/languageContext';
import { Flex, Spacer } from '@chakra-ui/react';

const NavItems = () => {
  const { languageObj: { sidebar } = LinkItems } = useLanguage()
  //Flex direction='column' h='85% to correct!!!!!!!!!
  return (
    <>
      <Flex direction='column' h='85%'>
        <NavItem route='/'>
          {sidebar[0].name}
        </NavItem>
        <NavItem route='/aboutapp'>
          {sidebar[1].name}
        </NavItem>
        <NavItem route='/about'>
          {sidebar[2].name}
        </NavItem>
        <Spacer />
        <NavItem route='friends'>
          {sidebar[3].name}
        </NavItem>
        <NavItem route='settings'>
          {sidebar[4].name}
        </NavItem>
      </Flex>
    </>
  )
}

export default NavItems