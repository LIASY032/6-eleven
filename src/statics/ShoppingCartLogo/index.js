import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { useCart } from "../../contexts/CartContainerContext";
import { Fade } from "react-reveal";
import {
  ColumnContainer,
  TwoSideContainer,
} from "../../components/MyContainer";
import { useSelector } from "react-redux";
import { findItemById } from "../../services";

function ShoppingCartLogo() {
  const { carts, addItem } = useCart();
  const items = useSelector((state) => state.items.items);
  const user = useSelector((state) => state.user);
  if (user.carts) {
    user.carts.forEach((item) => {
      addItem(findItemById(items, item._id), item.count);
    });
  }
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <ColumnContainer>
              <Fade left cascade>
                <>
                  {carts.length > 0
                    ? carts.map((item) => (
                        <TwoSideContainer key={item._id}>
                          <TwoSideContainer.Left>
                            <img src={item.image} alt={item.title}></img>
                          </TwoSideContainer.Left>
                          <TwoSideContainer.Right>
                            <p> {item.title}</p>
                            <p>
                              ${item.price} x {item.count}
                            </p>
                          </TwoSideContainer.Right>
                        </TwoSideContainer>
                      ))
                    : ""}
                </>
              </Fade>
            </ColumnContainer>
          </Popover>
        }
      >
        <div className="cart-logo-container">
          <div className="cart-logo-label">
            {carts.length > 10 ? "9+" : carts.length}
          </div>
          <CartFill size={30} style={{ color: "#FF9900" }}></CartFill>
        </div>
      </OverlayTrigger>
    </>
  );
}

export default ShoppingCartLogo;
