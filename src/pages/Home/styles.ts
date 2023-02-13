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
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    font-weight: bold;
    width: 36.7rem;

    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};

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

  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
  
    align-items: center;
    align-content: center;

    padding: 8px;
    border-radius: 999px;
    
    color: ${(props) => props.theme['background']};
  }
`;

export const Info1 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

export const Info2 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme['base-text']};
  }
`;

export const Info3 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme['yellow']};
  }
`;

export const Info4 = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme['purple']};
  }
`;

export const ContainerCoffees = styled.main`
  gap: 3.4rem 0rem;

  header {
    font-size: 2rem;
    font-weight: bold;
    line-height: 41.6px;
    
    color: ${(props) => props.theme['base-subtitle']};

  }
`;

export const ListCoffes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;

  margin-top: 3.4rem;
`;

export const CoffeeItem = styled.div`
  width: 16rem;
  height: 19.4rem;

  /* position: absolute; */

  padding: 0px 20px;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {}

  h1{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;


    line-height: 26px;
    
    font-size: 1.3rem;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

    color: ${(props) => props.theme['base-label']};


  }
`;