import { createUUID } from "../utils/string";

/**
 * 기본 데이터 클래스
 */
export class BaseInstance<T> {
  private _title: string;
  private _instance: T | undefined;
  constructor(title: string) {
    this._title = title;
  }

  /**
   * 인스턴스의 기본 데이터
   */
  public get base() {
    return {
      id: createUUID(),
      createAt: new Date().toString(),
      title: this._title,
    };
  }

  /**
   * 인스턴스 데이터 반환
   */
  public get data() {
    return this._instance;
  }

  /**
   * 인스턴스 세팅
   * @params instance
   */
  public setInstance(instance: T) {
    this._instance = instance;
  }
}
