import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    height: 700px;
    margin: 50px 110px;
    @media (max-width: 480px) {
        display: none;
  }
`

export const GalleryColumn = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 10px;
    height: 700px;
    
`
