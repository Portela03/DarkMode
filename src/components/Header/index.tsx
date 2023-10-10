import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {shade} from 'polished'

interface Props{
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
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
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
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
