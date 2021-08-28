import React from "react";
import { Fade } from "react-reveal";
import Filter from "../statics/Filter";
import Item from "../components/Item/Item";

import Sort from "../components/Selector/Sort";

import { TwoSideContainer } from "../components/MyContainer";
import { useSelector } from "react-redux";

function ShopPage() {
  const items = useSelector((state) => state.items.items);

  return (
    <>
      <h1>Shop</h1>

      <TwoSideContainer flexStart={true}>
        <TwoSideContainer.Left notHalf={true}>
          <Filter></Filter>
        </TwoSideContainer.Left>
        <TwoSideContainer.Right>
          <Sort />
          <Fade bottom cascade>
            <ul className="products">
              {items
                ? items.map((item, index) => (
                    <li key={index}>
                      <Item item={item}></Item>
                    </li>
                  ))
                : "loading..."}
            </ul>
          </Fade>
        </TwoSideContainer.Right>
      </TwoSideContainer>
    </>
  );
}

export default ShopPage;
