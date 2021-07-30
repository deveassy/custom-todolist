import React from "react";
import { useKeywordSearch } from "../../hooks/useKeywordSearch";
import TodoList from "../right-pane/TodoList";

type ISectionListProps = {
  keyword: string;
};

/**
 * 검색 collection 섹션별 리스트
 */
function SectionList({ keyword }: ISectionListProps) {
  // 검색 로직 훅 사용
  const { result } = useKeywordSearch(keyword);
  if (keyword.length === 0) {
    <p>검색결과가 없습니다.</p>;
  }

  return (
    <div>
      {result.map((r) =>
        r.data.length ? (
          <div>
            <hr />
            <section>
              <h2>{r.name}</h2>
              <TodoList items={r} />
            </section>
          </div>
        ) : null
      )}
    </div>
  );
}

export default SectionList;
