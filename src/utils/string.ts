import { v4 as uuidV4 } from "uuid";

/**
 * @param prefix 접두어 문자열 (optional)
 * @returns 접두어 + UUID
 */
export const createUUID = (prefix?: string) => {
  return `${prefix ? prefix + "-" : ""}${uuidV4()}`;
};
