import styled from "styled-components";

export const ContainerIntro = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 5.8rem;
  padding: 4rem 0rem;
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

export const ContainerCoffees = styled.main`
  gap: 3.4rem 0rem;

  header {
    font-size: 2rem;
    font-weight: bold;
    line-height: 41.6px;
    
    color: ${(props) => props.theme.colors['base-subtitle']};

  }
`;

export const ListCoffes = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;
  row-gap: 2.5rem;

  margin-top: 3.4rem;
`;

export const CoffeeItem = styled.div`
  display: flex;
  
  width: 100%;
  
  padding: 0px 1.25rem;
  padding-top: 0px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }

  span {

  }

  h1{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;


    line-height: 26px;
    
    font-size: ${(props) => props.theme.textSizes['title-title-s']};
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    margin-top: 8px;
    margin-bottom: 33px;

    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};


    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

    color: ${(props) => props.theme.colors['base-label']};


  }
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    font-size: ${(props) => props.theme.textSizes['components-tag']};
    font-weight: bold;

    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`;