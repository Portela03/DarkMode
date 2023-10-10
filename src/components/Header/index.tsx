import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {shade} from 'polished'

const Header: React.FC = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    // Lida com o caso em que o tema não está disponível.
    return null;
  }

  return (
    <div>
      <Container>
        boaa fiote

        <Switch
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.50, theme.colors.primary)}
          onColor={theme.colors.secondary} 
        />
      </Container>
    </div>
  );
};

export default Header;
