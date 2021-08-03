import React, { useCallback, useState } from "react";

type EventHandler = React.ChangeEventHandler<HTMLInputElement>;

/**
 * input 상태를 다루는 custom hook
 * @param initialState의 초기 상태값
 * @returns `state`: 상태값, `handleChangeInputState`: 상태값 핸들러, `clear` : 특정 키의 초기화 함수
 */
export const useInputState = <T extends Record<string, string | number>>(
  initialState: T
): [T, EventHandler, (key: any) => void] => {
  const [state, setState] = useState(initialState);

  /**
   * HTML input의 상태 핸들러 함수
   */
  const handleChangeInputState = useCallback<EventHandler>(
    (e) => {
      try {
        if (!e.target.name)
          // input element의 name 지정하지 않았을 경우
          throw new Error(
            "this hook need to a name property to handle input value"
          );
        // name에 대한 조건 확인 로직을 프로그래미틱 하게 제어 할 필요
        if (state[e.target.name] === undefined)
          // input element의 name이 잘못 지정된 경우
          throw new Error(
            "cannot handle state of the form. please check the name of this element"
          );
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [state]
  );

  /**
   * 상태값 초기화 함수
   * @param key 초기화를 원하는 상태의 키
   */
  const clear = useCallback(
    (key: string) => {
      // try {
      //   if (state[key] === undefined)
      //     // 상태값에 key가 존재하지 않는 경우
      //     throw new Error("key is not given instance of the state");
      //   setState({ ...state, [key]: "" }); // 특정 key의 상태값의 초기화
      // } catch (error) {
      //   console.error("[useInputState]", error);
      // }
      if(state[key] === undefined)
        throw new Error("the given key is not instance of state");
        setState({...state, [key] : ''});
    },
    [state]
  );

  return [state, handleChangeInputState, clear];
};
