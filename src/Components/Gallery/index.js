import React from 'react';
import { GalleryContainer, GalleryColumn } from './GalleryElements';

const Gallery = () => {
    return (
        <GalleryContainer>
                <GalleryColumn>
                    <img src="./Images/orange-cocktail.jpg" alt="Cocktail with orange slice" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/chef.jpg" alt="Sushi chef" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/egg-ramen.jpg" alt="Ramen with egg" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./Images/chicken-ramen.jpg" alt="Chicken ramen" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/sushi-arrangement.jpg" alt="Sushi tray" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/tempura-sushi.jpg" alt="Tempura roll" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./Images/beer.jpg" alt="Japanese beer" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/watermelon-cocktail.jpg" alt="Watermelon cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/cocktail.jpg" alt="Cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
                <GalleryColumn>
                    <img src="./Images/shrimp-ramen.jpg" alt="Shrimp ramen" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/soup.jpg" alt="Soup and nigiri" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                    <img src="./Images/cocktail-with-orange.jpg" alt="cocktail" style={{marginTop: "8px", height: "33%", verticalAlign: "middle", width: "100%"}}/>
                </GalleryColumn>
            </GalleryContainer>
    )
}

export default Gallery
