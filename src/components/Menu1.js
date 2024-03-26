import React from "react";
import Menu1Text from "./Menu1Text";
function Menu1({ addTocart }) {
  return (
    <div>
      <br />
      <Menu1Text addToCart={addTocart} />
      <Menu1Text addToCart={addTocart} />
      <Menu1Text addToCart={addTocart} />
      {/* <Menu1Text />
        <Menu1Text />
        <Menu1Text />
        <Menu1Text />
        <Menu1Text /> */}
    </div>
  );
}
export default Menu1;
