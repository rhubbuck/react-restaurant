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
  @media (max-width: 850px) {
       margin: 50px 90px;
       height: 320px;
  }
`

export const GalleryColumn = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 10px;
    height: 700px;
    @media (max-width: 850px) {
       height: 250px;
       flex: 50%;
  }
    
`
