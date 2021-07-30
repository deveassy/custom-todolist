import React, { forwardRef, useEffect, useState } from "react";
import { createId } from "../../utils/string";

type CFormProps = {
  visible: boolean;
  onSubmit: (newCollection: ICollection) => void;
};

const CollectionForm = forwardRef<HTMLInputElement, CFormProps>(
  (props, ref) => {
    const { visible, onSubmit } = props;
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleSubmit = () => {
      if (!inputValue) return;
      const newCollection: ICollection = {
        id: createId("custom"),
        name: inputValue,
        order: 0,
        data: [],
      };
      onSubmit(newCollection);
      setInputValue("");
    };

    /**
     * 폼에서 벗어나는 경우에도 submit 함수 작동
     */
    const handleBlur = () => {
      handleSubmit();
    };

    useEffect(() => {
      if (visible) setInputValue("");
    }, [visible]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          ref={ref}
          onChange={handleChange}
          value={inputValue}
          placeholder=""
          onBlur={handleBlur}
          style={{ visibility: visible ? "visible" : "hidden" }}
        />
      </form>
    );
  }
);

export default CollectionForm;
