// Body.js

import styled from 'styled-components';

const BodyContainer = styled.div`
  width: 100%;
  min-height: 50vh; /* Metade da página */ /* Branco */
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50vh;
  position: fixed;

  
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Icon = styled.i`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: black;
  font-size: 2rem;
`;

const SubText1 = styled.p`
color:black;
font-size: 2rem;
font-family: "Roboto", sans-serif;
font-weight: 700;
padding-bottom:40px;`

const Texto = styled.p`
color:black;
font-size: 1.3rem;
font-family: "Roboto", sans-serif;
`
const SubText11 = styled.p`
color:black;
font-size: 1.3rem;
font-family: "Roboto", sans-serif;
`

const Titulo = styled.p`
color:black;
font-size: 2rem;
font-family: "Roboto", sans-serif;
font-weight: 700;
padding-bottom:20px;`

const Body = () => {
  return (
    <BodyContainer>
    <HeaderContainer>
      <Column>
        <Icon className="fa fa-envelope"></Icon>
        <SubText1>E-mail</SubText1>
        <SubText11>Tem alguma dúvida?</SubText11>
        <Texto>meajudacontrolclean@gmail.com</Texto>
      </Column>
      <Column>
        <Icon className="fa fa-phone"></Icon>
        <Titulo>Telefone</Titulo>
        <SubText>Você pode ligar para nós.</SubText>
        <SubText>0500  402 2939</SubText>
      </Column>
    </HeaderContainer>
    </BodyContainer>
  );
};

export default Body;
