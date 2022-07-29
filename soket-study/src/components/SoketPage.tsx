import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

const SoketPage = () => {
  // const socket = io("http://localhost:5000/", { transports: ["websocket"] });

  const [text, setText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const listInText = () => {
    let copyList = [...list];
    copyList.push(text);
    setList(copyList);
    setText("");
  };

  useEffect(() => {
    // socket.connect();
  }, []);

  return (
    <_SoketPageContainer>
      <h1>소켓 통신 테스트</h1>
      <_DisplayFlex>
        <_SoketPageInput onChange={onChangeText} value={text} />
        <_SoketPagePlusButton onClick={listInText}>추가</_SoketPagePlusButton>
      </_DisplayFlex>
      <ul>
        {list.map((item: string, idx: number) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </_SoketPageContainer>
  );
};

const _SoketPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 50px; ;
`;

const _DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const _SoketPagePlusButton = styled.button`
  width: 100px;
  height: 36px;
`;

const _SoketPageInput = styled.input`
  width: 150px;
  height: 36px;
`;

export default SoketPage;
