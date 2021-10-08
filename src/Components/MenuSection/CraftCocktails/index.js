import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const CraftCocktails = () => {
    return (
        <div>
               <ItemContainer>
                <ItemHeader>Craft Cocktails</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>kyoto 75 </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>gin, dolan blanc vermouth, lemon, rosemary syrup, bitters, brut sparkling wine</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yuzu sour </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>bourbon, amaro montenegro, bergamont, cynar, yuzu syrup</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>barakou #2 </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>four roses bourbon, brovo amaro, cocchi torino, orange bitters, aromatic bitters, flamed lemon</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>hattori hanzo </ItemTitle>
                            <Price>12</Price>
                        </LineOne>
                        <LineTwo>reposado tequila, jalapeño agave, pomegranate, cilantro, lime, celery bitters, house celery salt rim</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>chuhai  </ItemTitle>
                            <Price>9</Price>
                        </LineOne>
                        <LineTwo>8000 generation shochu, pineapple, grapefruit bitters</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>tokyo barbee </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>strawberry hibiscus cordial, marquis brut, sansho syrup</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>shochu mule </ItemTitle>
                            <Price>9</Price>
                        </LineOne>
                        <LineTwo>barley shochu, lime, goslings ginger beer</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>aperol spritz  </ItemTitle>
                            <Price>7</Price>
                        </LineOne>
                        <LineTwo>prosecco, aperol, soda water</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default CraftCocktails
