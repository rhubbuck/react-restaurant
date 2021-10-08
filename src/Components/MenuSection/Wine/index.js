import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const Wine = () => {
    return (
        <div>
            <ItemContainer>
                <ItemHeader>Wine</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>Marquis de la Tour </ItemTitle>
                            <Price>8/30</Price>
                        </LineOne>
                        <LineTwo>Brut, France</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Terre Gaie </ItemTitle>
                            <Price>11/40</Price>
                        </LineOne>
                        <LineTwo>Prosecco, Italy</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Meinklang Prosa </ItemTitle>
                            <Price>13/46</Price>
                        </LineOne>
                        <LineTwo>Sparkling Rose, Austria</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Bodegas Fontana </ItemTitle>
                            <Price>10/40</Price>
                        </LineOne>
                        <LineTwo>Rosé, Spain</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Molina a Vento </ItemTitle>
                            <Price>8/30</Price>
                        </LineOne>
                        <LineTwo>Inzolia</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Fable </ItemTitle>
                            <Price>9/32</Price>
                        </LineOne>
                        <LineTwo>Chardonnay, California</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Terre Gaie </ItemTitle>
                            <Price>10/38</Price>
                        </LineOne>
                        <LineTwo>Moscato, NV</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Sancerre </ItemTitle>
                            <Price>14/50</Price>
                        </LineOne>
                        <LineTwo>Sauvingnon Blanc, France </LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Clic </ItemTitle>
                            <Price>9/32</Price>
                        </LineOne>
                        <LineTwo> Cabernet, Italy</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Matthew Fritz </ItemTitle>
                            <Price>12/39</Price>
                        </LineOne>
                        <LineTwo>Pinot Noir, California</LineTwo>
                    </Item>
                </Items>
            </ItemContainer>  
        </div>
    )
}

export default Wine
