import styled from "styled-components";


export const ContainerIntro = styled.div`

    display: flex;
    justify-content: space-between;

    padding: 4rem 0rem;
    
    div {
        

        header {
            color: ${(props) => props.theme["base-title"]};
            font-size: 48px;
            font-weight: bold;
            width: 36.7rem;

            line-height: 1.3;

            margin-bottom: 1rem;
        }

        p {
            color: ${(props) => props.theme["base-subtitle"]};
            font-weight: 400;

        }
    }
`;

