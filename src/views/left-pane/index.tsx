import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { addCollection } from "../../modules/collections";
import { useHistory, useRouteMatch } from "react-router-dom";
import CollectionList from "./CollectionList";
import CollectionForm from "./CollectionForm";
import SearchInput from "./SearchInput";

function LeftPane() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();

  const [visible, setVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const collections = useSelector((state: RootState) => state.collections);

  /**
   * 폼 노출 함수
   */
  const handleVisibleForm = () => {
    setVisible(true);
  };

  /**
   * 컬렉션 생성함수
   * @param newCollection 생성을 위해 전달된 컬렉션 정보
   */
  const handleSubmit = (newCollection: ICollection) => {
    dispatch(addCollection(newCollection));
    setVisible(false);
    history.push(`${path}/collection/${collections.length}`);
  };

  /**
   * 폼 노출에 따른 인풋창 포커싱
   */
  useEffect(() => {
    if (visible) inputRef.current?.focus();
  }, [visible]);

  return (
    <LeftContainer>
      <section>
        <SearchInput />
      </section>
      <hr style={{ backgroundColor: "#ddd", margin: "16px 0" }} />
      <section>
        <CollectionList items={collections} />
        <CollectionForm
          ref={inputRef}
          visible={visible}
          onSubmit={handleSubmit}
        />
      </section>
      <AddBtnSection>
        <button onClick={handleVisibleForm}>목록 추가하기</button>
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
