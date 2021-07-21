import { v4 as uuidV4 } from "uuid";

/**
 * @param prefixString 접두어 문자열
 * @returns 접두어 + UUID
 */
export const createId = (prefixString: string) => {
  return `${prefixString} - ${uuidV4()}`;
};
