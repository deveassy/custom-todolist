import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useInputState } from "../../hooks/useInputState";
import { ISectionListProps } from "../search/SectionList";

function SearchInput() {
  const history = useHistory<ISectionListProps>();
  const { path } = useRouteMatch();

  /**
   * 폼 상태값을 다루는 custom hook
   */
  const [inputValue, setInputValue] = useInputState({
    keyword: "",
  });

  /**
   * 키워드 입력 시 검색 UI로 전환
   */
  useEffect(() => {
    // if (inputValue.keyword.length) history.push(`${path}/search`);
    if (inputValue.keyword === null) return;
    history.replace(`${path}/search`, {
      keyword: inputValue.keyword,
    });
  }, [history, inputValue.keyword, path]);
  return (
    <div>
      <input
        placeholder="검색"
        value={inputValue.keyword}
        name="keyword"
        onChange={setInputValue}
      />
    </div>
  );
}

export default SearchInput;
