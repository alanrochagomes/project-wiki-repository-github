import React from "react";

import { ItemContainer } from "./styles";
function ItemRepo() {
  return (
    <ItemContainer>
      <h3>test</h3>
      <p>dio</p>
      <a href="#">Ver repositório</a>
      <br></br>
      <a href="#" className="remover">
        Remover
      </a>
      <hr></hr>
    </ItemContainer>
  );
}

export default ItemRepo;
