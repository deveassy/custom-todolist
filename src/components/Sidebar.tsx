import React from "react";
import SearchInput from "./SearchInput";

function Sidebar() {
  return (
    <div>
      <SearchInput />
      <div>
        <ul>
          <li>진행상황</li>
          <li>동기화</li>
          <li>기타</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
