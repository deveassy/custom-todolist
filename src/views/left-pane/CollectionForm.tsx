import React, { forwardRef, useState } from "react";
import { createId } from "../../utils/reducers";

type CFormProps = {
  visible: boolean;
  onSubmit: (newCollection: Collection) => void;
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
      const newCollection = {
        id: createId("custom"),
        name: inputValue,
        order: 0,
        data: [],
      };
      onSubmit(newCollection);
      setInputValue("");
    };

    const handleBlur = () => {
      handleSubmit();
    };
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
