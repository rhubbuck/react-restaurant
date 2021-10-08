import React from 'react'
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'

const BottledBeer = () => {
    return (
        <div>
              <ItemContainer>
                <ItemHeader>Bottled Beer</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>Sapporo Light </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>Rice Lager, Japan, 3.9%</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default BottledBeer
