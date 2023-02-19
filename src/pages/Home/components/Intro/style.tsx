import { rgba } from "polished";
import styled from "styled-components";
import BackGround from '../../../../assets/Background.png'

export const ContainerIntro = styled.section`
  width: 100%;
  height: 34rem;
  background: ${(props) => `url(${BackGround}) no-repeat center,
    linear-gradient(
      0deg,
      ${props.theme.colors["white"]} 0%,
      ${rgba(props.theme.colors["background"], 0.2)} 50%,
      ${props.theme.colors["background"]} 100%
    )
  `};
  background-size: cover;

 
`;

export const Content = styled.div`
  /* Trocado do default Layout */
  max-width: 90rem;
  padding: 4rem 10rem;
  margin: auto auto;

  display: flex;
  justify-content: space-between;
  /* padding: 4rem 0rem; */


  /* margin-bottom: 5.8rem; */
`;

export const Box = styled.div`
`;

export const BoxOne = styled.div`
  margin-bottom: 4.1rem;

  header {
    color: ${(props) => props.theme.colors["base-title"]};
    font-size: 3rem;
    font-weight: bold;
    width: 36.7rem;

    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors["base-subtitle"]};

    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const BoxTwo = styled.div`
  display: grid;
  grid-template-columns: 231px 294px;

  gap: 20px 40px;

`;

const BaseInfo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  gap: 12px;
  height: 2rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 20.8px;

  color: ${(props) => props.theme.colors['base-text']};

  div {
    display: flex;
  
    align-items: center;
    align-content: center;

    padding: 8px;
    border-radius: 999px;
    
    color: ${(props) => props.theme.colors['background']};
  }
`;

export const Info1 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`;

export const Info2 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme.colors['base-text']};
  }
`;

export const Info3 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme.colors['yellow']};
  }
`;

export const Info4 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme.colors['purple']};
  }
`;
