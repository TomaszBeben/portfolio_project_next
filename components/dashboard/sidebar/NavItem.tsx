import { ReactNode } from 'react';
import Link from 'next/link'
import {
  Flex,
  FlexProps,
} from '@chakra-ui/react';

interface NavItemProps extends FlexProps {
  children: ReactNode;
  route: string;
}

export const NavItem = ({ children, route}: NavItemProps) => {
  return (
    <Link href={route} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
        {children}
      </Flex>
    </Link>
  );
};