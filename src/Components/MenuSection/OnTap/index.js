import React from 'react'
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'

const OnTap = () => {
    return (
        <div>
              <ItemContainer>
                <ItemHeader>Beers on tap</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>kirin ichiban </ItemTitle>
                            <Price>7</Price>
                        </LineOne>
                        <LineTwo>pale lager</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>hutton & smith belayer’s blonde </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>blonde ale</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yee-haw dunkel </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>dark lager</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>wiseacre tiny bomb </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>pilsner</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>gypsy circus queen of swords </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>cider</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>wanderlinger </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>rotating seasonal</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>oddstory </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>rotating seasonal</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default OnTap
