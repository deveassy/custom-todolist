import React from "react";

function MainScreen() {
  return (
    <div>
      {/* 타이틀 영역 */}
      <div>
        <h1>타이틀</h1>
      </div>
      {/* 본문 영역 */}
      <div>
        <ul>
          <li>
            <div>할 일 1</div>
          </li>
          <li>
            <div>할 일 2</div>
          </li>
          <li>
            <div>할 일 3</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainScreen;
