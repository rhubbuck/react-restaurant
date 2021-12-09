import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    margin: 60px 220px;
    @media (max-width: 480px) {
        flex-direction: column;
        margin: 0;
        padding: 15px;
  }
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
`