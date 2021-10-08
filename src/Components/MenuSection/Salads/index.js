import React from 'react'
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'

const Salads = () => {
    return (
        <div>
              <ItemContainer>
                <ItemHeader>Salads</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>seaweed salad </ItemTitle>
                            <Price>7</Price>
                        </LineOne>
                        <LineTwo>hijiki / wakame / tosaka / ichimi-miso vinaigrette</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>nama house </ItemTitle>
                            <Price>6 / 11</Price>
                        </LineOne>
                        <LineTwo>mixed greens / tomato / carrot / cucumber / daikon / wasabi peas / sweet soy vinaigrette</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>cucumber salad </ItemTitle>
                            <Price>5</Price>
                        </LineOne>
                        <LineTwo>marinated cucumber / daikon / red pepper</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Salads
