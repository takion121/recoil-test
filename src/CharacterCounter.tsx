import { ChangeEvent, useCallback } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: ""
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  }
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value);
    },
    [setText]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {/* <br />
      Echo: {text} */}
    </div>
  );
}

function TextEcho() {
  const text = useRecoilValue(textState);

  return <div>Echo: {text}</div>;
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <div>Character Count: {count}</div>;
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <TextEcho />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
