import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { useCart } from "../../contexts/CartContainerContext";
import { Fade } from "react-reveal";

function ShoppingCartLogo() {
  const { carts } = useCart();
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <div className="cart">
              <Fade left cascade>
                <ul className="cart-items">
                  {carts.length > 0 &&
                    carts.map((item) => (
                      <li key={item.id}>
                        <div>
                          <img src={item.image} alt={item.title}></img>
                        </div>
                        <div>
                          <div className="right">{item.title}</div>
                          <div className="right">
                            ${item.price} x {item.count}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </Fade>
            </div>
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
