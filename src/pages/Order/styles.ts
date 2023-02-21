import styled from "styled-components";

export const ContainerOrder = styled.form`
    /* Trocado do default Layout */
    /* max-width: 90rem;
    padding: 0rem 10rem;
    margin: auto auto; */

    display: flex;
    justify-content: space-between;

    margin-top: 2.5rem;
    gap: 2rem;
`;

export const BaseOrderSection = styled.div`
    width: 100%;

    padding: 2.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme.colors["base-card"]};
`;