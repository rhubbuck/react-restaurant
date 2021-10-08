import React from 'react';
import { ItemContainer, SectionDescription, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price } from '../MenuSectionElements'


const Sushi = () => {
    return (
        <div>
           <ItemContainer>
                <ItemHeader>Sushi</ItemHeader>
                <SectionDescription></SectionDescription>
                <Items>
                    <Item>
                        <LineOne>
                            <ItemTitle>lucky belly </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>puffed tofu / avocado / shiitake / daikon / carrot</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>always sunny </ItemTitle>
                            <Price>13</Price>
                        </LineOne>
                        <LineTwo>smoked salmon / cream cheese / avocado / bread + butter pickle / crunchy salmon skin</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>st. elmo’s fire </ItemTitle>
                            <Price>13</Price>
                        </LineOne>
                        <LineTwo>tuna / cucumber / scallion / jalapeno / spicy tuna mix / citrus tobiko / spicy chili sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>gojira roll </ItemTitle>
                            <Price>14</Price>
                        </LineOne>
                        <LineTwo>panko-fried giant prawn / cream cheese / jalapeño / habanero sriracha</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>caterpiller </ItemTitle>
                            <Price>16</Price>
                        </LineOne>
                        <LineTwo>eel / crab / cucumber / avocado / eel sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>pizza </ItemTitle>
                            <Price>14</Price>
                        </LineOne>
                        <LineTwo>crab / smoked salmon / avocado / tnt sauce / scallion / eel sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>rainbow </ItemTitle>
                            <Price>17</Price>
                        </LineOne>
                        <LineTwo>crab / avocado / cucumber / salmon / tuna / yellowtai / white fish / shrimp / avocado</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>dragon </ItemTitle>
                            <Price>17</Price>
                        </LineOne>
                        <LineTwo>crunchy shrimp / avocado / spicy aioli / eel / avocado / eel sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>crunchy shrimp </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>crunchy shrimp / avocado / spicy aioli / tempura crunchies</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>crazy tuna </ItemTitle>
                            <Price>17</Price>
                        </LineOne>
                        <LineTwo>spicy sweet + sour / kewpie slaw / tartar sauce</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>cali </ItemTitle>
                            <Price>10</Price>
                        </LineOne>
                        <LineTwo>spicy tuna / cucumber / seared albacore / avocado / scallion / ponzu</LineTwo>
                    </Item>
                </Items>
            </ItemContainer>  
        </div>
    )
}

export default Sushi
