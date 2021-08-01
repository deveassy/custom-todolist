import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

type CItemProps = {
  item: ICollection;
  index: number;
};
function CollectionItem({ item, index }: CItemProps) {
  const { path } = useRouteMatch();
  return (
    <li>
      <NavLink
        to={`${path}/collection/${index}`}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        {item.title}
      </NavLink>
    </li>
  );
}

export default CollectionItem;
