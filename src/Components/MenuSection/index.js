import React from 'react'
import { MenusContainer, MenuHeader, MenuSection, SectionItem, SectionHeader, MenusSection } from './MenuSectionElements'
import { Component } from 'react';
import Salads from './Salads';
import SmallPlates from './SmallPlates';
import Ramen from './Ramen';
import Sushi from './Sushi';
import Nigiri from './Nigiri';
import BottledBeer from './BottledBeer';
import Sake from './Sake';
import Wine from './Wine';
import CraftCocktails from './CraftCocktails';
import Shochu from './Shochu';
import OnTap from './OnTap';
import Lunch from './Lunch';

class Menu extends Component {

    state = {
        saladsVisible: false,
        smallPlatesVisible: false,
        ramenVisible: false,
        sushiVisible: false,
        nigiriVisible: false,
        bottledBeerVisible: false,
        sakeVisible: false, 
        wineVisible: false, 
        craftCocktailsVisible: false,
        shochuVisible: false,
        onTapVisible: false,
        lunchVisible: false
    }

    render() {
    return (
        <div>
        <MenusSection>
            <MenusContainer>
                <MenuHeader>Menus</MenuHeader>
                <SectionHeader>Beverages</SectionHeader>
                <MenuSection>
                    <SectionItem onClick={() => {
                        this.setState({sakeVisible: true, bottledBeerVisible: false, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>sake</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({shochuVisible: true, sakeVisible: false, bottledBeerVisible: false, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, wineVisible: false, craftCocktailsVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>shochu</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({craftCocktailsVisible: true, sakeVisible: false, bottledBeerVisible: false, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, wineVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>craft cocktails</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({wineVisible: true, bottledBeerVisible: false, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, sakeVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>wine</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({bottledBeerVisible: true, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>bottled beer</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({onTapVisible: true, bottledBeerVisible: false, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, smallPlatesVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, lunchVisible: false})
                    }}>on tap</SectionItem>
                </MenuSection>
                <SectionHeader>Dinner</SectionHeader>
                <MenuSection>
                    <SectionItem onClick={() => {
                        this.setState({smallPlatesVisible: true, saladsVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>small plates</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({saladsVisible: true, smallPlatesVisible: false, ramenVisible: false, sushiVisible: false, nigiriVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>salads</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({sushiVisible: true, saladsVisible: false, smallPlatesVisible: false, ramenVisible: false, nigiriVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>sushi</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({ramenVisible: true, saladsVisible: false, smallPlatesVisible: false, sushiVisible: false, nigiriVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>ramen</SectionItem>
                    <SectionItem onClick={() => {
                        this.setState({nigiriVisible: true, saladsVisible: false, smallPlatesVisible: false, sushiVisible: false, ramenVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false, lunchVisible: false})
                    }}>nigiri</SectionItem>
                </MenuSection>
                <SectionHeader>Lunch</SectionHeader>
                <MenuSection>
                    <SectionItem onClick={() => {
                        this.setState({lunchVisible: true, nigiriVisible: false, saladsVisible: false, smallPlatesVisible: false, sushiVisible: false, ramenVisible: false, bottledBeerVisible: false, sakeVisible: false, wineVisible: false, craftCocktailsVisible: false, shochuVisible: false, onTapVisible: false})
                    }}>lunch</SectionItem>
                </MenuSection>
            </MenusContainer>
            {this.state.saladsVisible ? <Salads /> : null}
            {this.state.smallPlatesVisible ? <SmallPlates /> : null}
            {this.state.ramenVisible ? <Ramen /> : null}
            {this.state.sushiVisible ? <Sushi /> : null}
            {this.state.nigiriVisible ? <Nigiri /> : null}
            {this.state.bottledBeerVisible ? <BottledBeer /> : null}
            {this.state.sakeVisible ? <Sake /> : null}
            {this.state.wineVisible ? <Wine /> : null}
            {this.state.craftCocktailsVisible ? <CraftCocktails /> : null}
            {this.state.shochuVisible ? <Shochu /> : null}
            {this.state.onTapVisible ? <OnTap /> : null}
            {this.state.lunchVisible ? <Lunch /> : null}
        </MenusSection>
        </div>
    )
}
}

export default Menu
