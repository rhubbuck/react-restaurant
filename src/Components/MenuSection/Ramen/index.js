import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const Ramen = () => {
    return (
        <div>
             <ItemContainer>
                <ItemHeader>Ramen</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>tonkotsu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>pork broth / chashu / menma / kikurage / baby vidalia / mayu / soft egg</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>tori paitan shoyu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>chicken broth / tsukune / greens / shimeji / rayu / soft egg</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yasai shoyu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>vegetable broth / burnt corn / greens / benishoga / mayu</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>spicy crab garlic noodle </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>mazemen / crab butter / black pepper / kokuto</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Ramen
