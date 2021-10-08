import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const Nigiri = () => {
    return (
        <div>
            <ItemContainer>
                <ItemHeader>Nigiri</ItemHeader>
                <SectionDescription>Two pieces per order</SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>salmon </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>sake</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>smelt roe </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>masago</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>octopus </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>tako</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>crab </ItemTitle>
                            <Price>7</Price>
                        </LineOne>
                        <LineTwo>kani</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>tuna </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>maguro</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>shrimp </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>ebi</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>eel </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>unagi</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>tofu pocket </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>inari</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yellowtail </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>hamachi </LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>salmon roe </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>ikura</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Nigiri
