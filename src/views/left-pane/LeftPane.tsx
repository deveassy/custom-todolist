import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { createId } from "../../utils/reducers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { addCollection } from "../../modules/collections";
import { updateMenuIndex } from "../../modules/menus";

function LeftPane() {
  const [visible, setVisible] = useState(false);
  const [collectionName, setCollectionName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);
  const menuIndex = useSelector((state: RootState) => state.menus.currentIndex);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!collectionName) return;
    const newCollection: Collection = {
      id: createId("custom"),
      name: collectionName,
      order: collections.length,
      data: [],
    };
    dispatch(addCollection(newCollection));
    setVisible(false);
    dispatch(updateMenuIndex(collections.length));
  };

  const handleCollectionNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCollectionName(e.target.value);
  };

  const handleCollectionItemClick = (index: number) => {
    if (menuIndex !== index) dispatch(updateMenuIndex(index));
  };

  const handleBlur = () => {
    setVisible(false);
  };

  const handleAddCollection = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (visible) inputRef.current?.focus();
    else setCollectionName("");
  }, [visible]);

  return (
    <LeftContainer>
      {/* 검색 input창 */}
      <section>
        <input placeholder="검색" />
      </section>
      <div
        style={{
          width: "100%",
          height: 2,
          backgroundColor: "#ddd",
          margin: "16px 0",
        }}
      />
      {/* collection List, 추가 form */}
      <section>
        {collections.map((collection) => {
          <div
            key={collection.id}
            onClick={() => handleCollectionItemClick(collection.order)}
          >
            {collection.name}
          </div>;
        })}
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            style={{ visibility: visible ? "visible" : "hidden" }}
            value={collectionName}
            onChange={handleCollectionNameChange}
            onBlur={handleBlur}
          />
        </form>
      </section>
      {/* collection 추가 버튼 */}
      <AddBtnSection>
        <button onClick={handleAddCollection}>목록 추가하기</button>
      </AddBtnSection>
    </LeftContainer>
  );
}

export default LeftPane;

const LeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: yellow;
`;

const AddBtnSection = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 16px;
`;
