import React, { ReactElement } from "react";
import CollectionItem from "../../components/CollectionItem";

type CListProps = {
  items: ICollection[];
};

function CollectionList({ items }: CListProps): ReactElement {
  return (
    <ul>
      {items.map((collection, index) => (
        <CollectionItem key={collection.id} index={index} item={collection} />
      ))}
    </ul>
  );
}

export default CollectionList;
