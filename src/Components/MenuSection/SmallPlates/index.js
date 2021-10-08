import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'

const SmallPlates = () => {
    return (
        <div>
            <ItemContainer>
                <ItemHeader>Small Plates</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>agedashi tofu </ItemTitle>
                            <Price>7</Price>
                        </LineOne>
                        <LineTwo>steamed with good salt OR spicy miso</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>edamame </ItemTitle>
                            <Price>6</Price>
                        </LineOne>
                        <LineTwo>tentsuyu / itogaki</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>miso soup </ItemTitle>
                            <Price>5</Price>
                        </LineOne>
                        <LineTwo>enoki / scallions / wakame</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>pork gyoza </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>inaka ponzu</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>takoyaki </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>hush puppy / octopus / miso butter</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>crispy brussels </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>miso vin / rice krispies</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>shishito peppers </ItemTitle>
                            <Price>9</Price>
                        </LineOne>
                        <LineTwo>figs / katsuobushi / sticky peanuts / honey-soy</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>garlic noodles </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>crab butter / black pepper / kokuto</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yellowtail jalapeño </ItemTitle>
                            <Price>9</Price>
                        </LineOne>
                        <LineTwo>amazu ponzu / cilantro</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>salmon nanbanzuke </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>spicy sweet + sour / kewpie slaw / tartar sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>okonomi-age </ItemTitle>
                            <Price>8</Price>
                        </LineOne>
                        <LineTwo>tots / pork / shrimp / okonomi toppings</LineTwo>
                    </Item>
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default SmallPlates
