import React from 'react'
import { ItemContainer, Items, ItemHeader, Item, LineOne, LineTwo, ItemTitle, Price, LunchTitle } from '../MenuSectionElements'

const Lunch = () => {
    return (
        <div>
              <ItemContainer>
                <ItemHeader>Lunch</ItemHeader>
                <LunchTitle>Small Plates</LunchTitle>
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
                            <ItemTitle>garlic noodles </ItemTitle>
                            <Price>11</Price>
                        </LineOne>
                        <LineTwo>crab butter / black pepper / kokuto</LineTwo>
                    </Item>
                    <LunchTitle>Bento</LunchTitle>
                    <Item>
                        <LineOne>
                            <ItemTitle>karaage box </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>crispy chicken / crispy brussels / steamed rice / fried gyoza / salad</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>poke box </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>tuna / chili oil / apples / radishes / steamed rice / crispy brussels / fried gyoza / salad</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>vegetable box </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>grilled veg / sake-miso glaze / blistered shishitos / steamed edamame / steamed rice / salad</LineTwo>
                    </Item>
                    <LunchTitle>Noodles</LunchTitle>
                    <Item>
                        <LineOne>
                            <ItemTitle>tori paitan shoyu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>chicken broth / tsukune / local greens / shimeji / rayu / soft egg</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>tonkotsu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>pork broth / chashu / kikurage / menma / baby vidalia / mayu / soft egg</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>yasai shoyu </ItemTitle>
                            <Price>15</Price>
                        </LineOne>
                        <LineTwo>vegetable broth / burnt corn / local greens / benishōga / mayu</LineTwo>
                    </Item>
                    <Item>
                        <LineOne>
                            <ItemTitle>spicy crab garlic noodle </ItemTitle>
                            <Price>17</Price>
                        </LineOne>
                        <LineTwo>brothless mazemen / crab butter / black pepper / kokuto</LineTwo>
                    </Item>
                    <LunchTitle>Sweets</LunchTitle>
                    <Item>
                        <LineOne>
                            <ItemTitle>mochi </ItemTitle>
                            <Price>2.5 for one / 6 for all three</Price>
                        </LineOne>
                        <LineTwo>ice cream dumplings (seasonal flavors)</LineTwo>
                    </Item>
                   
                </Items>
            </ItemContainer> 
        </div>
    )
}

export default Lunch