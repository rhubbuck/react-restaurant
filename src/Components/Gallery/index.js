import React from 'react';
import { GalleryContainer, GalleryColumn } from './GalleryElements';

const Gallery = () => {
    return (
        <GalleryContainer>
                <GalleryColumn>
                    <img src="./images/orange-cocktail.jpg" alt="Cocktail with orange slice" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/chef.jpg" alt="Sushi chef" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/egg-ramen.jpg" alt="Ramen with egg" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./images/chicken-ramen.jpg" alt="Chicken ramen" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/sushi-arrangement.jpg" alt="Sushi tray" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/tempura-sushi.jpg" alt="Tempura roll" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./images/beer.jpg" alt="Japanese beer" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/watermelon-cocktail.jpg" alt="Watermelon cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/cocktail.jpg" alt="Cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./images/shrimp-ramen.jpg" alt="Shrimp ramen" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/soup.jpg" alt="Soup and nigiri" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./images/cocktail-with-orange.jpg" alt="cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
            </GalleryContainer>
    )
}

export default Gallery
