import React from 'react';
import { GalleryContainer, GalleryColumn } from './GalleryElements';

const Gallery = () => {
    return (
        <GalleryContainer>
                <GalleryColumn>
                    <img src='/images/chef.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/ramen-with-sauce.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/avocado-roll.jpg' alt='Sushi' style={{ padding: '5px 0', height: '50%'}}></img>
                </GalleryColumn>
                <GalleryColumn>
                    <img src='/images/sushi-tray.jpg' alt='Sushi' style={{ padding: '5px 0', height: '50%'}}></img>
                    <img src='/images/sesame-roll.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/three-cocktails.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                </GalleryColumn>
                <GalleryColumn>
                    <img src='/images/sashimi.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/sake-with-plate.jpg' alt='Sushi' style={{ padding: '5px 0', height: '50%'}}></img>
                    <img src='/images/ramen-side-profile.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                </GalleryColumn>
                <GalleryColumn>
                    <img src='/images/purple-cocktail.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/egg-ramen.jpg' alt='Sushi' style={{ padding: '5px 0', height: '25%'}}></img>
                    <img src='/images/pink-cocktail.jpg' alt='Sushi' style={{ padding: '5px 0', height: '50%'}}></img>
                </GalleryColumn>
        </GalleryContainer>
    )
}

export default Gallery
