import React from 'react'
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'

const Shochu = () => {
    return (
        <div>
              <ItemContainer>
                <ItemHeader>Shochu</ItemHeader>
                <SectionDescription>Japan’s most popular drink, a refined and clean spirit distilled from various grains</SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>Mura Mugi </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>barley</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Gyokuro </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>green tea</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Satuma Mura </ItemTitle>
                            <Price>9</Price>
                        </LineOne>
                        <LineTwo>sweet potato</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Shochu
