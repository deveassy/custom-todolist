import React from "react";

function App() {
  return (
    <div>
      {/* 사이드바 레이아웃 */}
      <div>
        {/* 검색 영역 */}
        <div></div>
        {/* 메뉴 영역 */}
        <div>
          <ul>
            <li>진행상황</li>
            <li>동기화</li>
            <li>기타</li>
          </ul>
        </div>
      </div>
      {/* 메인 레이아웃 */}
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
    </div>
  );
}

export default App;
