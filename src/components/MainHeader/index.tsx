import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import emojis from '../../utils/emojis';

import { useAuth } from '../../hooks/auth';
// import Toggle from '../Toggle';

import { Container, Profile, Welcome, UserName, RightSide } from './styles';

const MainHeader: React.FC = () => {
  const { user } = useAuth();

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      {/* <Toggle /> */}

      <RightSide>
        <Profile>
          <Welcome>Olá, {emoji}</Welcome>

          <Link to="/me" title="Meu Perfil">
            <UserName>{user?.name}</UserName>
          </Link>
        </Profile>
      </RightSide>
    </Container>
  );
};

export default MainHeader;
