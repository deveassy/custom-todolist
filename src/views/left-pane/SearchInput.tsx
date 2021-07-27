import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useInputState } from "../../hooks/useInputState";

function SearchInput() {
  const history = useHistory();
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
    if (inputValue.keyword.length) history.push(`${path}/search`);
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
