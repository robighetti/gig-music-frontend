import React, { useState, useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { moduleMenus } from '../../utils/menu/menu';

import { Submenu } from './Submenu';

import LogoColorido from '../../assets/rbg-logo.png';

import {
  Container,
  Content,
  Header,
  LogoImg,
  MenuContent,
  MenuContainer,
} from './styles';

interface SubMenuProps {
  title: string;
  path: string;
  icon: object;
}

const Aside: React.FC = () => {
  const [click, setClick] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const { signOut } = useAuth();

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  return (
    <Container click={click}>
      <button onClick={handleClick}>
        {click ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      <Content click={click}>
        <Header>
          <LogoImg src={LogoColorido} alt="Gig Music" />
        </Header>

        <MenuContent>
          <MenuContainer>
            {moduleMenus.map((item: SubMenuProps, index: number) => {
              return (
                <Submenu
                  item={item}
                  key={index}
                  setSidebar={setSidebar}
                  sidebar={sidebar}
                />
              );
            })}
          </MenuContainer>

          <button type="button" onClick={() => signOut()}>
            <FiLogOut />
            Sair do sistema
          </button>
        </MenuContent>
      </Content>
    </Container>
  );
};

export default Aside;
