import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const DEFAULT_VALUE: ICollection[] = [];

/**
 * 리덕스 스토어에서 키워드 검색을 통 해 할 일 리스트 결과 반환
 * @param keyword 검색 키워드
 * @returns 검색 결과
 */
export const useKeywordSearch = (
  keyword: string
): { result: ICollection[] } => {
  const [result, setResult] = useState<ICollection[]>([]);

  const collections = useSelector((state: RootState) => state.collections);

  // 컬렉션 검색
  useEffect(() => {
    if (keyword.length > 0) {
      setResult(
        collections.map((collection) => ({
          ...collection,
          data: collection.data.filter((todo) => todo.title.includes(keyword)),
        }))
      );
    } else {
      setResult(DEFAULT_VALUE);
    }
  }, [collections, keyword]);

  useEffect(() => {}, [result]);
  return { result };
};
