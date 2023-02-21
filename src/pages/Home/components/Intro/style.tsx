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

  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Content = styled.div`
  /* Trocado do default Layout */
  /* max-width: 90rem; */
  padding: 4rem 0rem;
  /* margin: auto auto; */

  display: flex;
  justify-content: space-between;
`;

export const BoxOne = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    color: ${(props) => props.theme.colors["base-title"]};
    font-size: 3rem;
    font-weight: bold;
    width: 36.7rem;

    font-size: ${(props) => props.theme.textSizes["title-title-xl"]};
    font-family: ${(props) => props.theme.fonts.title};

    line-height: 1.3;

    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => props.theme.colors["base-subtitle"]};

    font-size: ${(props) => props.theme.textSizes["text-regular-l"]};
    font-weight: 400;
    line-height: 26px;
  }
`;

export const BoxTwo = styled.div`
  width: 100%;
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  /* grid-template-columns: 231px 294px; */
  /* gap: 20px 40px; */
`;