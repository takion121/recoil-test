import { RecoilRoot } from "recoil";
import CharacterCounter from "./CharacterCounter";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil Test</h1>
        <hr />
        <div id="test1">
          <h2>텍스트 상태 관리</h2>
          <h5>RecoilRoot, Atom, Selector</h5>
          <h5>useRecoilState, useRecoilValue</h5>
          <br />
          <CharacterCounter />
          <br />
        </div>
        <hr />
        <div id="test2">
          <h2>Todo List</h2>
          <h5>useSetRecoilState</h5>
          <br />
          <TodoList />
          <br />
        </div>
      </div>
    </RecoilRoot>
  );
}
