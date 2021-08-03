import React from "react";
import { useLocation } from "react-router-dom";
import SectionList, { ISectionListProps } from "../views/search/SectionList";

function SearchScreen() {
  const { state } = useLocation<ISectionListProps>();
  return (
    <div>
      <h1>Search Screen</h1>
      <h2>{`'${state.keyword}'에 대한 검색 목록`}</h2>
      <SectionList keyword={state.keyword} />
    </div>
  );
}

export default SearchScreen;
