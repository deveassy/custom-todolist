import React, { useState } from "react";

function SearchInput() {
  const [state, setState] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <div>
      <input value={state} onChange={handleChange} placeholder="검색" />
    </div>
  );
}

export default SearchInput;
