import React, { forwardRef, useEffect, useState } from "react";
import { Collection } from "../../models/collection";

type CFormProps = {
  visible: boolean;
  onSubmit: (newCollection: ICollection) => void;
};

const CollectionForm = forwardRef<HTMLInputElement, CFormProps>(
  (props, ref) => {
    const { visible, onSubmit } = props;

    const [title, setTitle] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const handleSubmit = () => {
      if (!title) return;
      const newCollection = new Collection(title).data;
      if (!newCollection) return;
      onSubmit(newCollection);
      setTitle("");
    };

    /**
     * 폼에서 벗어나는 경우에도 submit 함수 작동
     */
    const handleBlur = () => {
      handleSubmit();
    };

    useEffect(() => {
      if (visible) setTitle("");
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
          value={title}
          placeholder=""
          onBlur={handleBlur}
          style={{ visibility: visible ? "visible" : "hidden" }}
        />
      </form>
    );
  }
);

export default CollectionForm;
