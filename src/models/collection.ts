import { BaseInstance } from "./base";

/**
 * 할 일 클래스
 */
export class Collection extends BaseInstance<ICollection> {
  constructor(title: string) {
    super(title);
    this.setInstance({
      ...this.base,
      data: [],
      createdAt: new Date().toString(),
    });
  }
}
