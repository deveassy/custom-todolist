import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const DEFAULT_VALUE: ICollection[] = [];

export const useKeywordSearch = (keyword: string) => {
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
  return { result };
};
