import React from "react";
import { NavLink } from "react-router-dom";

type CItemProps = {
  item: Collection;
  index: number;
};

function CollectionItem({ item, index }: CItemProps) {
  return (
    <li>
      <NavLink
        to={`/todo/${index}`}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default CollectionItem;
