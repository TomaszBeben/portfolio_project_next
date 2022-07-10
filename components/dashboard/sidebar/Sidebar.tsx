import { useState, useEffect } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

import { NavItem } from './NavItem';
import { LinkItems } from '../../utils/linksItems';

import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  route: string
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [language, setLanguage] = useState<Array<LinkItemProps>>(LinkItems)

  useEffect(()=>{
    fetch('http://localhost:3000/api/languages/pl')
    .then(res=>res.json())
    .then(data => setLanguage(data))
  })

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#1C448E', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          TB
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {language && language.map((link) => (
        <NavItem key={link.name} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;