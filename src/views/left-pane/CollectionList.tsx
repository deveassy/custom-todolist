import React from "react";
import CollectionItem from "../../components/CollectionItem";

type CListProps = {
  items: Collection[];
};

function CollectionList({ items }: CListProps) {
  return (
    <ul>
      {items.map((collection, index) => (
        <CollectionItem key={collection.id} index={index} item={collection} />
      ))}
    </ul>
  );
}

export default CollectionList;
