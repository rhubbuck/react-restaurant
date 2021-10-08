import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const Sake = () => {
    return (
        <div>
            <ItemContainer>
                <ItemHeader>Sake</ItemHeader>
                <SectionDescription>Various rices are brewed, pressed, filtered and pasteurized into this clear and refreshing wine-like spirit. Listed from drier to sweeter.</SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>Hakutsuru Draft junmai shut, 300ml </ItemTitle>
                            <Price>7/16</Price>
                        </LineOne>
                        <LineTwo>light, fresh smooth taste; cucumber and spicy vanilla bean</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Ozeki junmai, 750m </ItemTitle>
                            <Price>6/19</Price>
                        </LineOne>
                        <LineTwo>well balanced full bodied with light melon flavor</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Ozeki Yamadanishiki tokubetsu junmai, 300ml </ItemTitle>
                            <Price>10/23</Price>
                        </LineOne>
                        <LineTwo>full bodied; clean and refreshing with a dry aftertaste</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Bunraku Nihonjin no Wasuremono  junmai shu, 300ml </ItemTitle>
                            <Price>9/26</Price>
                        </LineOne>
                        <LineTwo>lemon/lime sherbert, key lime pie & whipped cream on the palate</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Shirakawago Sasanigori “Lightly Filtered”  720ml </ItemTitle>
                            <Price>11/50</Price>
                        </LineOne>
                        <LineTwo>medium-bodied, rice-forward, mellow, sweet finish</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Hakutsuru Sayuri “The Little Lilly”  300ml </ItemTitle>
                            <Price>11/25</Price>
                        </LineOne>
                        <LineTwo>cream, cherry blossom, white grape</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>Zipang Junmai, 300ml </ItemTitle>
                            <Price>8/18</Price>
                        </LineOne>
                        <LineTwo>lively and bright with hints tropical fruits</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Sake

