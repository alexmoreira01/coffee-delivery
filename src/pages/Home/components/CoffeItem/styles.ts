import styled from 'styled-components';

export const CoffeeItemContent = styled.div`
  display: flex;
  
  width: 100%;
  
  padding: 1.25rem;
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

  > h1{
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

  > p {
    margin-top: 8px;
    margin-bottom: 33px;

    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};

    font-size: 14px;
    font-weight: 400;
    /* line-height: 18px; */
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

  > span {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    font-size: ${(props) => props.theme.textSizes['components-tag']};
    font-weight: bold;

    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`;

export const CoffeeItemFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      font-weight: regular;
    }

    span {
      font-size: ${(props) => props.theme.textSizes['title-title-m']};
      font-weight: bold;
      line-height: 0.75rem;
      font-family: 'Baloo 2', cursive;
    }
  }
`;

export const AddCounter = styled.div`
  width: 7.5rem;
  
  > button {
    display: flex;
    width: 2.375rem;
    height: 2.375rem;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    margin-left: 0.3rem;
    
    background: ${(props) => props.theme.colors["purple-dark"]};
    color: ${(props) => props.theme.colors["base-card"]};

    transition: 0.3s;
    
    &:hover {
      background: ${(props) => props.theme.colors["purple"]};
    }
  }
`; 