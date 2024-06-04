
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 30vh; /* Metade da página */
  background-color: #152473; /* Azul */
  
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: aliceblue;
  padding-top: 150px;
`;

const Header = () => {
  return (
    <HeaderContainer>
    <Title>Como você prefere falar conosco?</Title>
    </HeaderContainer>
  );
};

export default Header;
